var speechRecognition=window.webkitSpeechRecognition;
var recogtition=new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recogtition.start()
}
recogtition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking your selfie now")
        speak();
    }
}
Webcam.set({
    width: 360,
    height: 250,
    image_format:'png',
    png_quality: 90
})
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        snapapicture();
        sava();
    },3000)
}
camera=document.getElementById("camera");

function snapapicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="pic_of_me" src="'+data_uri+'">'
    })
}
function sava(){
    link=document.getElementById("link");
    img=document.getElementById("pic_of_me").src;
    link.href=img;
    link.click();
}