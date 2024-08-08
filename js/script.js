function fetchDolarData() {
  fetch("https://dolarapi.com/v1/dolares")
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById('card-container');
          container.innerHTML = ''; 

          data.forEach(dolar => {
              const card = document.createElement('div');
              card.className = 'card';
              card.innerHTML = `  
                  <h2>${dolar.nombre}</h2>
                  <p>Compra: $${dolar.compra}</p>
                  <p>Venta: $${dolar.venta}</p>
              `;
              container.appendChild(card);
          });
      })
      .catch(error => {
          console.error('error al obtener los datos:', error);
      });
}


fetchDolarData();

setInterval(fetchDolarData, 300000);
