song_peter = "";
song_potter = "";
right_WristX = 0;
right_WristY = 0;
left_WristX = 0;
leftWristY = 0;

function preload() {
    song_peter = loadSound("Peter_pan.mp3");
    song_potter = loadSound("Harry_Potter.mp3");
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.position(600, 250);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet model is initialized");
}

function gotPoses(results) {
    
        if (results.length > 0) {
            console.log(results);
            right_WristX = results[0].pose.rightWrist.x;
            right_WristY = results[0].pose.rightWrist.y;
            console.log("right_WristX = " + right_WristX + ", right_WristY = " + right_WristY);
            left_WristX = results[0].pose.leftWrist.x;
            left_WristY = results[0].pose.leftWrist.y;
            console.log("left_WristX = " + left_WristX + ", left_WristY = " + left_WristY);
        }
    }


function draw() {
    image(video, 0, 0, 350, 350);
}

