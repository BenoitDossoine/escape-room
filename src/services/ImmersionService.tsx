class ImmersionService{
    public playBackgroundAudio = () => {
        let audio = document.getElementById("backgroundMusic") as HTMLAudioElement;
        audio.play();
        audio.volume = 0.5;
    }
    
    public pauseBackgroundAudio = () => {
        let audio = document.getElementById("backgroundMusic") as HTMLAudioElement;
        audio.pause();
    }

    public setFullScreen = () => {
        const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
        if(body.requestFullscreen){
            body.requestFullscreen();
        }
    }
}

export const immersionService = new ImmersionService();