// create a function to make 10 cards about city around the world : 2 in asia, 2 in europe, 2 in africa, 1 in australia, 2 in america

const cities = ['tokyo', 'paris', 'london', 'cape town', 'cairo', 'perth', 'new york', 'mexico city'];

function generate_card(kota) {
    // make a request
    $.ajax({
        url : `https://api.openweathermap.org/data/2.5/weather?q=${kota}&units=metric&appid=0c8c2a077d4e0f29d5dbc68aa2d09338`,
        success : (response) => {
            // if console.log() is succeed, it means the function works properly
            create_card(kota, response);
        },
        error : () => {
            console.log('error');
        }
    })
}

function create_card(kota, response) {

    const {temp, feels_like, humidity} = response.main;
    const {description, icon} = response.weather[0];
    const {speed} = response.wind;
    const {country} = response.sys;

    $('.sidebar-card-container').append(`
            <div class="sidebar-card">
            <div class="sidebar-card-content">
                <div class="sidebar-card-top">
                    <h5 class="sidebar-city-name">${country}, ${kota}</h2>
                        <div class="sidebar-card-right">
                            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="" class="sidebar-icon">
                            <h5 class="sidebar-temp">${temp}&#176;C</h5>		
                        </div>							
                </div>
                <div class="sidebar-card-bottom">
                    <span>feels like : ${feels_like}&#176;C</span>
                    <span>hum : ${humidity}%</span>
                    <span>wind speed : ${speed}m/s</span>
                </div>
            </div>
        </div>
    `)
}

cities.forEach(city => generate_card(city))