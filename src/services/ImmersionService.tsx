class ImmersionService{
    public playBackgroundAudio = () => {
        let audio = document.getElementById("backgroundMusic") as HTMLAudioElement;
        audio.play();
        audio.volume = 0.3;
    }
    
    public pauseBackgroundAudio = () => {
        let audio = document.getElementById("backgroundMusic") as HTMLAudioElement;
        audio.pause();
    }

    public setFullScreen = () => {
        if(document.fullscreenEnabled){
            document.documentElement.requestFullscreen();
        }
    }
}

export const immersionService = new ImmersionService();