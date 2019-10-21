var weather;

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey ="&appid=41cab2f5c3797b1e479e74b4fb3f4bde";





//原厂
function setup(){

    createCanvas(window.innerWidth,window.innerHeight,WEBGL);


    //p5.speech 魔改
    // let lang = navigator.language || 'en-US';
    // let speechRec = new p5.SpeechRec(lang, gotSpeech);
    // speechRec.start();

    var button = select('#submit');
    button.mousePressed(weatherAsk);
    input = select('#city');
    var foo = new p5.Speech(); // speech synthesis object
    foo.speak('I dont care who you are.'); // say something
}

// function gotSpeech(){
//     console.log('works?');
// }


function weatherAsk(){

    var url = api + input.value() + apiKey;
    loadJSON(url,gotData);

}


function gotData(data){
    weather = data;
}

function draw(){
  
    background(0);

    if (weather){
        // fill(weather.main.temp/2,weather.coord.lat*2,weather.main.humidity*1.5);
        strokeWeight(0.1);




    ambientLight(weather.main.temp/1.5, weather.coord.lat, weather.main.humidity, weather.clouds.all);
       ambientMaterial(255);

        //v1
    //     var para = 0.004;
    //   rotateX=(PI * noise( para* frameCount + 10));
    //   rotateY=(HALF_PI * noise( para* frameCount + 10));
    //   rotateZ=(QUARTER_PI * noise( para* frameCount + 10));

    //v2
    rotateX(noise(frameCount*0.024)+weather.main.temp);
    rotateY(noise(frameCount*0.026)+weather.coord.lat);
    rotateZ(noise(frameCount*0.025)+weather.main.humidity);
    // box(weather.main.temp*2,weather.coord.lat*5,weather.main.humidity*4);
    torus(weather.coord.lat*9,weather.main.humidity/10,3,12);
    }
}


