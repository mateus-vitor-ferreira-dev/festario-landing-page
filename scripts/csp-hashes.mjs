// Depois do `next build`: põe em cada página uma CSP com o hash exato de cada <script> inline dela.
//
// O export estático do Next embute o estado da página em scripts inline, então o cabeçalho
// (public/_headers) precisa de 'unsafe-inline'. Esta segunda política, numa <meta>, vale junto com a
// do cabeçalho (o navegador aplica as duas), e ela só aceita os scripts inline que o build gerou:
// qualquer script injetado depois, que não esteja na lista, é bloqueado.
import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const OUT = 'out'

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map((e) => {
    const path = join(dir, e.name)
    if (e.isDirectory()) return htmlFiles(path)
    return e.name.endsWith('.html') ? [path] : []
  }))
  return files.flat()
}

// <script> sem src e que o navegador executa (JSON-LD e afins são dados, não código).
const INLINE_SCRIPT = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi
const DATA_TYPE = /\btype=["']?application\/(ld\+)?json/i

let pages = 0
for (const file of await htmlFiles(OUT)) {
  const html = await readFile(file, 'utf8')
  if (html.includes('http-equiv="Content-Security-Policy"')) continue
  const hashes = new Set()
  for (const [, attrs, body] of html.matchAll(INLINE_SCRIPT)) {
    if (DATA_TYPE.test(attrs) || !body) continue
    hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`)
  }
  // Página sem script inline (ex.: o arquivo de verificação do Google) não precisa de nada.
  if (hashes.size === 0) continue
  const meta = `<meta http-equiv="Content-Security-Policy" content="script-src 'self' https://static.cloudflareinsights.com ${[...hashes].join(' ')}">`
  const out = html.replace(/<head([^>]*)>/i, (m) => `${m}${meta}`)
  if (out === html) throw new Error(`Sem <head> em ${file}`)
  await writeFile(file, out)
  pages += 1
}
console.log(`CSP com hashes em ${pages} páginas`)
