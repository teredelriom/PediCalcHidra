function calcular() {
  const peso = parseFloat(document.getElementById("peso").value) / 1000;
  if (!peso || peso <= 0) {
    alert("Por favor, ingresa un peso válido mayor a 0.");
    return;
  }
  const mantenimiento = peso <= 10 ? peso * 100 : peso <= 20 ? 1000 + (peso - 10) * 50 : 1500 + (peso - 20) * 20;
  document.getElementById("resultado").innerHTML = `<pre class="whitespace-pre-wrap text-gray-800">Mantenimiento: ${mantenimiento.toFixed(0)} ml/día</pre>`;
}