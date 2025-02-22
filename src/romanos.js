function romanos(num) {

  const valores = [
    [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];

  let resultado = "";

  for (let [valor, letra] of valores) {
    while (num >= valor) {
      resultado += letra;
      num -= valor;
    }
  }

  return resultado;
}

export default romanos;