async function fetchWeatherData(location) {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + `${location}` + '&appid=64a2c98dfc04ca72ca625942b9345493&units=metric', { mode: 'cors' });
    const jsondata = await response.json();
    return jsondata;
}

async function Display(Dlocation) {
    let jdata = await fetchWeatherData(Dlocation);
    document.write("Weather data of " + jdata.name + " is" + "<br>");
    document.write("Temp :" + jdata.main.temp + "<br>");
    document.write("Humidity :" + jdata.main.humidity + "<br>");
    document.write("Pressure :" + jdata.main.pressure + "<br>");
}
function iData() {
    var data = document.getElementById("myText").value;
    if(data == ""){
        alert("Name Field cannot be left empty");
    }
    else{
    var status = check_Alpha(data);
    if (status) {
        Display(data);
    }
    else {
    }
    }
}

function check_Alpha(letters) {
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(letters) == false) {
        alert("Name must be in alphabets only");
        letters.focus();
        return false;
    }
    return true;
}

/* function check_space(letters)
 {
   if(letters == " "){
       alert("Name Field cannot be left empty");
       letters.focus();
       return false;
     }
     return true;
 }*/