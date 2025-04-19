const data = null;

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);

        // Parsear la respuesta JSON
        const weatherData = JSON.parse(this.responseText);

        // Extraer la lista de pronósticos
        const forecastList = weatherData.list;

        // Seleccionar el contenedor donde se mostrarán los datos
        const weatherBox = document.querySelector('.weather-box');

        // Crear el contenido dinámico
        let content = `<h3>¿Que se usa hoy?</h3>`;
        forecastList.forEach((forecast, index) => {
            if (index < 1) { // Mostrar solo los primeros 5 pronósticos
                content += `
                    <div class="forecast-item">
                        <p>Temperatura: ${Math.round(forecast.main.temp)}°C</p>
                    </div>
                    <hr>
                `;
            }
        });

        // Actualizar el contenido en el HTML
        weatherBox.innerHTML = content;
    }
});

xhr.open('GET', 'https://rapidweather.p.rapidapi.com/data/2.5/forecast?q=Santiago%2C%20Chile&cnt=40&units=metric&lang=es');
xhr.setRequestHeader('x-rapidapi-key', 'e4901d53a5mshf89170677be3655p1215a6jsnc543650059cb');
xhr.setRequestHeader('x-rapidapi-host', 'rapidweather.p.rapidapi.com');
xhr.send(data);