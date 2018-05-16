var apiKey = '971af0623ca973152ec0809e939d5c29';

      document.getElementById('locSubmit').addEventListener('click', function(event){

      var req = new XMLHttpRequest();

      var input = document.getElementById('zipcode').value;
      var cityinput = document.getElementById('city').value;

      var answered = false;

      if (input.length >='1') {
        req.open("GET", 'http://api.openweathermap.org/data/2.5/weather?zip=' + input +',&appid=' + apiKey, true);
        answered = true;

      }

      if (cityinput.length >='1' && !(answered)) {
        req.open("GET", 'http://api.openweathermap.org/data/2.5/weather?q=' + cityinput +',&appid=' + apiKey, true);

      }
    
      req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          var response = JSON.parse(req.responseText);
          document.getElementById('currentTemp').textContent = response.main.temp;
          document.getElementById('currentHumidity').textContent = response.main.humidity;
          document.getElementById('currentCity').textContent =response.name;
        } else {
          console.log("Error in network request: " + req.statusText);
        }

      });

    req.send();
    event.preventDefault();

  });