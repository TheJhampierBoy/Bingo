document.addEventListener('DOMContentLoaded', function() {
  function holaMundo(elemento, yomiColumna, yomiXgrande = false, yomiXpequeña = false) {
    const container = document.getElementById(elemento);
    for (let iteracion = 0; iteracion < 25; iteracion++) {
      const numero = Math.floor(Math.random() * 75) + 1; // Genera un número aleatorio entre 1 y 75
      const aleatorio = document.createElement('div');
      aleatorio.className = 'random'; 
      aleatorio.textContent = numero;

      if (iteracion % 5 === yomiColumna ||
          (yomiXgrande && (iteracion % 6 === 0 || (iteracion % 4 === 0))) ||
          (yomiXpequeña && [0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 22 ].includes(iteracion))) {
        aleatorio.classList.add('yomi');
      }
      container.appendChild(aleatorio);
    }
  }
  holaMundo('numeros1', 0); 
  holaMundo('numeros2', 1); 
  holaMundo('numeros3', 2); 
  holaMundo('numeros4', 3); 
  holaMundo('numeros5', 4); 
  holaMundo('numeros6', -1, true); 
  holaMundo('numeros7', -2, false, true); 
});



