interface createSquirclePathProps {
  width?: number
  height?: number
  r1?: number
  r2?: number
  p1?: number
  p2?: number
  c?: number
}

function radiusFromC (c?: number) {
  switch (Number(c)) {
    case 1:
      return { r1: 0.02, r2: 0.05 }
    case 2:
      return { r1: 0.04, r2: 0.10 }
    case 3:
      return { r1: 0.06, r2: 0.15 }
    case 4:
      return { r1: 0.08, r2: 0.20 }
    case 5:
      return { r1: 0.10, r2: 0.25 }
    case 6:
      return { r1: 0.12, r2: 0.30 }
    case 7:
      return { r1: 0.14, r2: 0.35 }
    case 8:
      return { r1: 0.16, r2: 0.40 }
    case 9:
      return { r1: 0.18, r2: 0.45 }
    case 10:
      return { r1: 0.20, r2: 0.50 }
    default:
      return { r1: 0.10, r2: 0.25 }
  }
}

export function createSquirclePath(props: createSquirclePathProps) {
  const { width = 64, height = 64, r1 = 0.0586, r2 = 0.332, p1, p2, c } = props
  const radius = Math.min(width, height)
  const normalized1 = p1 ?? r1 * radius
  const normalized2 = p2 ?? r2 * radius
  const radius1 = c ? radiusFromC(c).r1 * radius : Math.min(normalized1, normalized2)
  const radius2 = c ? radiusFromC(c).r2 * radius : normalized2

  return `
    M 0,${radius2}
    C 0,${radius1} ${radius1},0 ${radius2},0
    L ${width - radius2},0
    C ${width - radius1},0 ${width},${radius1} ${width},${radius2}
    L ${width},${height - radius2}
    C ${width},${height - radius1} ${width - radius1},${height} ${width - radius2},${height}
    L ${radius2},${height}
    C ${radius1},${height} 0,${height - radius1} 0,${height - radius2}
    L 0,${radius2}
  `
}
