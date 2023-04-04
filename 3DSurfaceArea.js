function surfaceArea(A) {
    // Write your code here
 const flatArray = A.reduce((a, c) => a.concat(c), [])

  const buildHeight = Math.max(...flatArray)
  const columnsNum = flatArray.length

  let area = 0

  // MAIN CODE:
  for (let floor = buildHeight; floor > 0; floor--) {
    const currentFloorArea = findCurrentFloorArea(floor)
    area += currentFloorArea
  }

  area += columnsNum * 2

  // METHODS:
  function findCurrentFloorArea(floor) {
    const currentFloorMap = createCurrentFloorMap(floor)
    const currentFloorSurfaceMap = createSurfaceMap(currentFloorMap)
    const sumOfFloorWalls = currentFloorSurfaceMap.reduce((acc, curr) => {
      return acc + curr.reduce((a, c) => a += c, 0)
    }, 0)

    return sumOfFloorWalls
  }

  function createCurrentFloorMap(floor) {
    let map = []
    map = A.map(a => {
      return a.map((n) => n >= floor ? 4 : 0)
    })
    return map
  }

  function createSurfaceMap(floorMap) {
    const outsideWallsMap = floorMap.map(a => {
      return a.map(r => r)
    })

    for (let i = 0; i < floorMap.length; i++) {
      for (let j = 0; j < floorMap[0].length; j++) {
        if (floorMap[i][j] && floorMap[i][j + 1] > 0) outsideWallsMap[i][j]--
        if (floorMap[i][j] && floorMap[i][j - 1] > 0) outsideWallsMap[i][j]--
        if (floorMap[i][j] && floorMap[i + 1] && floorMap[i + 1][j] > 0) outsideWallsMap[i][j]--
        if (floorMap[i][j] && floorMap[i - 1] && floorMap[i - 1][j] > 0) outsideWallsMap[i][j]--
      }

    }
    return outsideWallsMap
  }
  
  return area
}
