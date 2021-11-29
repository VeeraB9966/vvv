Webcam.set({
width:350,
height:300,
image_format:'jpg',
jpg_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');