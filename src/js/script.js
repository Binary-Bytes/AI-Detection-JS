//* Parameters for Model Detection

const modelParams = {
    flipHorizontal: true,
    imageScaleFactor: 0.7,
    maxNumBoxes: 20,
    iouTreshold: 0.5,
    scoreTreshold: 0.79,
}

//* Change The Navigator According to Different Browsers

navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozgetUserMedia ||
    navigator.msgetUserMedia;

//* Grab All The Elements

const video = document.getElementById('video');
const audio = document.getElementById('audio');
const canvas = document.getElementById('canvas');

//* Some Variables

const context = canvas.getContext('2d');
let model;

//* Start The Video and Run Detection Every Second

handTrack.startVideo(video)
    .then(status => {
        if (status) {
            navigator.getUserMedia({ video: {} }, stream => {
                    video.srcObject = stream;

                    setInterval(function() {
                        runDetection(video);
                    }, 1000);
                },
                err => console.error(err)
            );
        }
    });

//* Main Function That Detects Everything

function runDetection(video) {
    model.detect(video)
        .then(predictions => {
            model.renderPredictions(predictions, canvas, context, video); //! Comment This Line If You Want (Read README.md)

            if (predictions.length > 0) {
                audio.play(); //! Comment This Line If You Want (Read README.md)
            }
        });
}

//* Load HandTrack Model

handTrack.load(modelParams)
    .then(lmodel => {
        model = lmodel;
    });