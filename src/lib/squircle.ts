export function createSquirclePath(
  width: number = 64,
  height: number = 64,
  r1: number = 0.0586,
  r2: number = 0.332
) {
  const radius1 = Math.min(r1, r2)
  const radius2 = r2

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
