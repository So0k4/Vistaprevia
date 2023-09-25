console.log("page loaded...");
const videoPreview = document.getElementById('videoPreview');
const placeholder = document.querySelector('.placeholder');


placeholder.addEventListener('mouseover', () => {

videoPreview.muted = true;
videoPreview.play();
});


placeholder.addEventListener('mouseout', () => {

videoPreview.pause();
videoPreview.currentTime = 0;

});