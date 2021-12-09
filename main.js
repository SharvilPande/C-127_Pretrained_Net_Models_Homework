song_peter = "";
song_potter = "";

function preload() {
    song_peter = loadSound("Peter_pan.mp3");
    song_potter = loadSound("Harry_Potter.mp3");
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.position(600, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 350, 350);
}