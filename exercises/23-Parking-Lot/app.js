

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(matrix) {
  let totalSlots = 0;
  let occupiedSlots = 0;
  let availableSlots = 0;

  // Bucle anidado para recorrer la matriz
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 1) {
              occupiedSlots++;
              totalSlots++;
          } else if (matrix[i][j] === 2) {
              availableSlots++;
              totalSlots++;
          }
          // Ignoramos el valor 0 porque no representa un espacio de estacionamiento.
      }
  }

  return {
    totalSlots,
    availableSlots,
    occupiedSlots
};
}

console.log(getParkingLotState(parking_state));
