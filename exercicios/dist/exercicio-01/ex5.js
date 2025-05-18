"use strict";
const notas = [10, 5, 6, 7];
let media = 0;
notas.map((nota) => {
    media += nota;
});
media /= 4;
console.log(media);
