let modoRelax = false;
let movimientos = 0;
let cronometro;
let grupoTarjetas = [
  ["🐳", "🦩", "🐒", "🦘"],
  ["🌵", "🌴", "🌲", "🌻"],
  ["🍌", "🍉", "🍓", "🍒"],
  ["🥰", "😎", "🤠", "🤣"],
  ["💩", "🤡", "👻", "👽"],
];
let nivelActual = 0;
let niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 6,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 12,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 18,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 30,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60,
  },
];
