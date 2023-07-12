/* eslint-disable prettier/prettier */
const Room = require('./Room')

Room.create([
  // Level 8
  {
    name: 'BK 1',
    floor: 'CS 1',
    capacity: 18,
    assets: {
      pcLab: true
    }
  },
  {
    name: 'BK 2',
    floor: 'CS 1',
    capacity: 18,
    assets: {
      projector: true
    }
  },
  {
    name: 'BK 3',
    floor: 'CS 1',
    capacity: 18,
    assets: {
      projector: true,
      opWalls: true
    }
  },
  {
    name: 'BK 4',
    floor: 'CS 1',
    capacity: 24
  },
  {
    name: 'BK 5',
    floor: 'CS 1',
    capacity: 18,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'BK 6',
    floor: 'CS 1',
    capacity: 18
  },
  {
    name: 'BK 7',
    floor: 'CS 1',
    capacity: 18
  },
  {
    name: 'BK 8',
    floor: 'CS 1',
    capacity: 18
  },
  {
    name: 'BK 9',
    floor: 'CS 1',
    capacity: 18
  },
  {
    name: 'BK 10',
    floor: 'CS 1',
    capacity: 18
  },
  {
    name: 'BK 11',
    floor: 'CS 1',
    capacity: 18
  },
  {
    name: 'BK 12',
    floor: 'CS 1',
    capacity: 18,
    assets: {
      tv: true
    }
  },
  {
    name: 'BK 13',
    floor: 'CS 1',
    capacity: 18
  },
  {
    name: 'BK 14',
    floor: 'CS 1',
    capacity: 18,
    assets: {
      tv: true
    }
  },
  {
    name: 'BK 15',
    floor: 'CS 1',
    capacity: 18,
    assets: {
      tv: true
    }
  },
  
  {
    name: 'Lab 01',
    floor: 'CS 1',
    capacity: 20,
    assets: {
      macLab: true
    }
  },
  // Level 13
  {
    name: 'BK 16',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'BK 17',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'BK 18',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'BK 19',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      projector: true,
      opWalls: true
    }
  },
  {
    name: 'BK 20',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      projector: true
    }
  },
  {
    name: 'BK 21',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      projector: true
    }
  },
  {
    name: 'BK 22',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      projector: true
    }
  },
  {
    name: 'BK 23',
    floor: 'CS 2',
    capacity: 40,
    assets: {
      projector: true
    }
  },
  {
    name: 'BK 24',
    floor: 'CS 2',
    capacity: 16
  },
  {
    name: 'BK 25',
    floor: 'CS 2',
    capacity: 20
  },
  {
    name: 'BK 26',
    floor: 'CS 2',
    capacity: 20
  },
  {
    name: 'BK 27',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      macLab: true
    }
  },
  {
    name: 'BK 28',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      pcLab: true
    }
  },
  {
    name: 'BK 29',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      pcLab: true
    }
  },
  {
    name: 'BK 30',
    floor: 'CS 2',
    capacity: 20,
    assets: {
      pcLab: true
    }
  },
 
  {
    name: 'Smart Room',
    floor: 'CS 2',
    capacity: null,
    assets: {
      tv: true
    }
  }
])
  .then((rooms) => {
    console.log(`Created ${rooms.length} rooms.`)
  })
  .catch((error) => {
    console.error(error)
  })