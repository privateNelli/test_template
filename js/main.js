const url = 'https://open-weather13.p.rapidapi.com/city/Santiago/ES';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'e4901d53a5mshf89170677be3655p1215a6jsnc543650059cb',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};

// Función para obtener datos de la API y mostrarlos en la vista
async function fetchWeatherData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parsear la respuesta como JSON
        const weatherContainer = document.getElementByClassName('weather-data');
        
        // Actualizar el contenido del contenedor con los datos obtenidos
        weatherContainer.innerHTML = `
            <p>¿Que se usa hoy?</p>
            <p>Temperatura: ${result.main.temp}°C</p>
            
        `;
    } catch (error) {
        console.error(error);
        document.getElementByClassName('weather-data').innerHTML = '<h3>Error fetching weather data.</h3>';
    }
}

// Llamar a la función al cargar la página
fetchWeatherData();