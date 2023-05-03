export function multiplicarPor10(array) {
  return array.map((element) => element * 10);
}

export function soloPares(array) {
  return array.filter((element) => element % 2 === 0);
}

export function moverALaDerecha(array) {
  const arrayNuevo = [...array];
  const ultimoElemento = arrayNuevo.pop();
  arrayNuevo.unshift(ultimoElemento);
  return arrayNuevo;
}

export function soloUnaPalabra(array) {
  return array.filter((element) => element.split(" ").length === 1);
}

export function soloArraysPositivos(array) {
  return array.filter((arrayInterno) =>
    arrayInterno.every((element) => element > 0)
  );
}

export function soloVocales(array) {
  return array.map((palabra) =>
    palabra
      .split("")
      .filter((letra) => /[aeiouAEIOU]/.test(letra))
      .join("")
  );
}

export function todasVocalesIguales(array) {
  return array.filter((palabra) => {
    const letras = palabra.split("");
    const vocales = letras.filter((letra) => /[aeiouAEIOU]/.test(letra));
    return vocales.every((vocal) => vocal === vocales[0]);
  });
}

export function duplicarMatriz(array) {
  return array.map((fila) => fila.map((elemento) => elemento * 2));
}

export function mayoresDeEdadValidados(array) {
  return array.map((persona) => ({
    ...persona,
    mayor: persona.edad > 18,
  }));
}

export function transformarObjetoEnArray(objeto) {
  const array = [...Object.values(objeto)];
  const ids = [...Object.keys(objeto)];
  return array.map((obj, idx) => ({
    id: ids[idx],
    ...obj,
  }));
}
