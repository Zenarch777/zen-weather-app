$('.search-button').on('click', function() {
    let kota = $('.input-bar').val();
    $.ajax({
        url : `https://api.openweathermap.org/data/2.5/weather?q=${kota}&units=metric&appid=0c8c2a077d4e0f29d5dbc68aa2d09338
        `,
        success : (response) => {
            setResponse(kota, response);
            setImage(kota);
        },
        error : () => {
            console.log('error');
        }
    })
    
})

function setResponse(kota, response){
    const {temp, feels_like, humidity} = response.main;
    const {icon, description} = response.weather[0];
    const {speed} = response.wind;

    $('.main-information').html(`
        <!-- contains temp, city name, description -->
        <div class="temperature main-card">
            <h1 class="temp card-header">Temperature</h1>
            <h1 class="temperature">${temp}&#176;C</h1>
        </div>
        <div class="description main-card">
            <img src="http://openweathermap.org/img/wn/${icon}.png" class="weather-icon">
            <h3>${description}</h3>
        </div>
        <div class="header">
            <h1 class="weather-in">Weather in<br></h1>
            <h1 class="city-name">${kota}</h1>
        </div>
    `)

    $('.informations-details').html(`
        <!-- contains feels like, wind speed, humidity -->
        <div class="information-card info-1">
            <h2 class="card-header">feels like</h2>
            <h2 class="card-info">${feels_like}&#176;C</h2>
        </div>
        <div class="information-card info-2">
            <h2 class="card-header">Humidity</h2>
            <h2 class="card-info">${humidity}%</h2>
        </div>
        <div class="information-card info-3">
            <h2 class="card-header">wind speed</h2>
            <h2 class="card-info">${speed}m/s</h2>
        </div>
    `)
}


function setImage(kota) {
    $.ajax({
        url : `https://api.unsplash.com/search/photos?query=night ${kota}&orientation=portrait&client_id=xz_-w1ElkGZnnjpimNRood7Rw-wJZ4exzqvkFkHDCmc`,
        success : (response) => {
            changeImage(response);
        },
        error : () => {
            console.log('err');
        }
    })
}

function changeImage(response) {
    let ran_num = Math.floor(Math.random() * 10);
    const {raw} = response.results[ran_num].urls;
    const color = response.results[ran_num].color;
    const right_bg = document.getElementById('right-bg');
    $('.city-name').css('color', `${color}`);
    right_bg.style.backgroundImage = `url('${raw}')`;
}