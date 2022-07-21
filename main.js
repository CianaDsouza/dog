function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'meow.gif';
      cat = cat + 1;
    } else{
      img.src = 'listen.gif';
    }

    navigator.mediaDevices.getUserMedia();

    navigator.mediaDevices.getUserMedia({audio : true});
  }
}

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()* 255)+1;
        random_number_g=Math.floor(Math.random()* 255)+1;
        random_number_b=Math.floor(Math.random()* 255)+1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+results[0].label;
        document.getElementById("result_confidence").innerHTML = ' Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img= document.getElementById('listen');
    img1= document.getElementById('bark');
    img2= document.getElementById('meow');
  

    if (results[0].label == "Bark"){
        img.src = 'bark.gif';
        img1.src = 'meow.png';
        img2.src = 'listen.png';
        
    }
        
         else if (results[0].label == "Meow"){
            img.src = 'bark.png';
            img1.src = 'meow.gif';
            img2.src = 'listen.png';
           
             }else {
                img.src = 'bark.png';
                img1.src = 'meow.png';
                img2.src = 'listen.gif';
                
                }
}
}
