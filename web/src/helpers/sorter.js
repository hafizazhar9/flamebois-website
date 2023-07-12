import React from 'react'

export const roomSorter = (roomList, floorNumber) => {
  let copiedList = roomList.slice(0);
  
  // Filter list of rooms to those on the given floor
  let filteredList = copiedList.filter(room => {
    return room.floor === floorNumber;
  });

  // Function to sort rooms numerically by their room number
  const numericalSort = roomList => { 
    return roomList.sort((first, second) => {
      const firstRoom = parseInt(first.name.replace(/\D+/, ''));
      const secondRoom = parseInt(second.name.replace(/\D+/, ''));
      
      if (firstRoom < secondRoom) {
        return -1;
      } else if (firstRoom > secondRoom) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  
  // Numerically sort a new array with each room named 'Room'
  let nameRoom = numericalSort(
    filteredList.filter(room => room.name[0] === 'B')
  );
  
  // Numerically sort a new array with each room named 'Studio'
  let nameStudio = numericalSort(
    filteredList.filter(room => room.name[0] === 'L')
  );
  
  // Numerically sort a new array with all other named room types
  let nameOther = numericalSort(
    filteredList.filter(room => room.name[0] !== 'B' && room.name[0] !== 'L')
  );
  
  // Re-combine the sorted rooms, studios, and others into a single array
  return nameRoom.concat(nameStudio).concat(nameOther);
};