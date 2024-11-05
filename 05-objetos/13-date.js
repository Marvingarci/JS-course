const ahora = new Date();
console.log(ahora); // 2021-09-29T20:00:00.000Z

const fecha = new Date("December 11 1986 13:15 GMT-0300");
console.log(fecha); // 1986-12-11T16:15:00.000Z


// Se puede crear pasando los parámetros de la fecha
// Ojo con el mes, comienza en 0 (enero) y termina en 11 (diciembre)
// También se puede pasar la hora, minutos, segundos y milisegundos
// Formato: new Date(año, mes, día, hora, minutos)
const fecha2 = new Date(1986, 11, 25, 14, 30)
console.log(fecha2); // 1986-12-25T17:30:00.000Z    

console.log('dateString',fecha2.toDateString())
console.log('isoString',fecha2.toISOString())
console.log('timeString',fecha2.toTimeString())
// console.log('localString',fecha2.toLocaleString())
// console.log('utcString',fecha2.toUTCString())

// Métodos para obtener los valores de la fecha
console.log('getFullYear',fecha2.getFullYear())// Año
console.log('getMonth',fecha2.getMonth())// Mes
console.log('getDate',fecha2.getDate()) // Día
console.log('getDay',fecha2.getDay())// Día de la semana (0-6)
console.log('getHours',fecha2.getHours())// Hora
console.log('getMinutes',fecha2.getMinutes())
console.log('getSeconds',fecha2.getSeconds())
console.log('getMilliseconds',fecha2.getMilliseconds())

// Métodos para establecer los valores de la fecha
fecha2.setFullYear(1990)
fecha2.setMonth(0)
fecha2.setDate(1)