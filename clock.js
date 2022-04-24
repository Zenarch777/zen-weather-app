setInterval(() => {
    setHour();
}, 1000);    

function setHour() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    console.log(`${hour}.${minutes}`);

    let AMORPM = () => {
        if(hour > 0 && hour < 12){
            return 'AM';
        } else{
            return 'PM';
        }
    }

    $('.clock').html(`
        <h1>${hour}.${minutes} ${AMORPM()} WIB.</h1>
    `)
}