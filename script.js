document.getElementById('convert').onclick=tempConvert;
document.getElementById('clear').onclick=clearform;

function tempConvert() {
    var fahrenheit=document.getElementById("fahrenheit").value;
    var kelvin=document.getElementById("kelvin").value;
    var celsius=document.getElementById("celsius").value;

    if(fahrenheit !=''){
        kelvin = (parseFloat(fahrenheit)-32)*(parseFloat(5/9)) + 273.15;
        celsius = (parseFloat(fahrenheit)-32)/1.8;
    }
    else if(kelvin != ''){
        fahrenheit = (parseFloat(kelvin)-273.15)*(parseFloat(9/5)) + 32;
        celsius = (parseFloat(kelvin))-273.15;
    }
    else{
        fahrenheit = (parseFloat(celsius)*1.8)+32;
        kelvin = (parseFloat(celsius))+273.15;
    }

    document.getElementById('fahrenheit').value=parseFloat(fahrenheit).toFixed(2);
    document.getElementById('kelvin').value=parseFloat(kelvin).toFixed(2);
    document.getElementById('celsius').value=parseFloat(celsius).toFixed(2);
}

function clearform() {
    document.getElementById('fahrenheit').value='';
    document.getElementById('kelvin').value='';
    document.getElementById('celsius').value='';
}