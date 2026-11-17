const FLAG_COLORS = ['#f4b41a', '#d8344a', '#f4b41a']

/* Varal de ponta a ponta: no celular, menos bandeirinhas num desenho estreito, para elas não
   ficarem espremidas (o SVG estica na largura). */
export default function Varal({ count, width, className }: { count: number; width: number; className: string }) {
  const sag = width * 0.055
  const flags = Array.from({ length: count }, (_, i) => {
    const t = (i + 0.5) / count
    const u = 1 - t
    return {
      x: 2 * u * t * (width / 2) + t * t * width,
      y: u * u * 6 + 2 * u * t * (6 + sag * 2) + t * t * 6,
      color: FLAG_COLORS[i % 3],
    }
  })
  const half = width / count / 2.6
  return (
    <svg
      viewBox={`0 0 ${width} ${sag + 50}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute inset-x-0 top-[68px] w-full overflow-visible ${className}`}
    >
      <path
        d={`M0 6 Q${width / 2} ${6 + sag * 2} ${width} 6`}
        fill="none"
        stroke="#9aa8f2"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      {flags.map(({ x, y, color }, i) => (
        <path
          key={i}
          className="flag-drop"
          style={{ animationDelay: `${200 + i * (900 / count)}ms` }}
          d={`M${x - half} ${y - 1} L${x + half} ${y - 1} L${x} ${y + half * 2} Z`}
          fill={color}
        />
      ))}
    </svg>
  )
}
