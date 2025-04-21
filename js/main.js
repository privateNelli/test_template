const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=santiago%2C%20cl&format=json&u=c';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '095aad4e56mshac6106191472275p13ec7cjsn5a05db475647',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};

// Función para obtener datos de la API y mostrarlos en la página
async function fetchWeatherData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parsear la respuesta como JSON

        // Seleccionar el contenedor donde se mostrarán los datos
        const weatherContainer = document.querySelector('.weather-data');

        // Construir la URL del ícono (esto depende de cómo la API proporcione el ícono)
        const iconUrl = `https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/${result.current_observation.condition.code}d.png`;

        // Actualizar el contenido del contenedor con los datos obtenidos
        weatherContainer.innerHTML = `
            <h3>¿Qué usarías hoy?</h3>
            <div class="align">   
            <p>Temperatura: ${result.current_observation.condition.temperature}°C</p>
            <img src="${iconUrl}" alt="Ícono del clima" />
            </div> 
        `;
    } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error en el contenedor
        document.querySelector('.weather-data').innerHTML = '<h3>Error al obtener los datos del clima.</h3>';
    }
}

// Llamar a la función al cargar la página
fetchWeatherData();