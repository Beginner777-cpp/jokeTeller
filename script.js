const video = document.getElementById('video');
async function test() {
    const media = await navigator.mediaDevices.getUserMedia(
        {
            audio: true,
            video: true,
        }
    )
    console.log(media);
    video.srcObject = media;
    video.onloadedmetadata = ()=>{
        video.play();
    }
}

test()