import { Scene } from 'three';
import gameAssets from '../data/gameAssets.json';
import { store } from '../store/store';
import { cameraService } from "./CameraService";

class GameLogicService{
    public handleClickEvent(e:any, zoomOverride:string | null = null){
        e.stopPropagation();
        let tag  = '';
        if(zoomOverride){
            tag = zoomOverride;
        } else {
            tag = `${e.eventObject.name}`;
        }
        const event = (gameAssets as any)[tag];
        store.currentEvent = event;

        if(event.type === "zoom" && !store.zoomedIn){
            cameraService.zoomIn(event);
        }
    }

    public checkPcCode(code:number){
        if(code == 1985){
            store.gameProgress.pcUnlocked = true;
            this.updateSolvedRiddles(["Screen"]);
            return true;
        } else {
            return false;
        }
    }

    public updateSolvedRiddles(riddles:string[]){
        const prevSolvedRiddles = [...store.solvedRiddles];
        for(let riddle of riddles){
            prevSolvedRiddles.push(riddle);
        }
        store.solvedRiddles = prevSolvedRiddles;
    }

    public startEnd(scene:Scene){
        store.gameProgress.capacitorClicked = true;
        cameraService.zoomEnd();
        const light = scene.getObjectByName("mainLight") as THREE.PointLight;
        light.intensity = 0.1;    
        for(let i = 1; i<9;i++){
            const mesh = scene.getObjectByName("SpeakerPart00"+i) as THREE.Mesh;
            setTimeout(()=>{
                this.turnOnSpeaker(mesh);
                this.updateLoadingBar(i);
                if(i===8){
                    let screenLoadingText = document.getElementById("screenLoadingText") as HTMLElement;
                    screenLoadingText.innerHTML = "Prepare for time jump!"
                    setTimeout(()=>{
                        store.gameEnded = true;
                    },1000)
                }
            }, i<8?i*1000:(i*1000)+2000);
        }


    }
    
    public turnOnSpeaker(mesh:THREE.Mesh){
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.emissiveIntensity = 10;
        
        const positionalAudio = mesh.children[0] as THREE.PositionalAudio;
        positionalAudio.play();
    }

    public updateLoadingBar(i:number){
        const loadingElements = document.getElementsByClassName("loaderPart");
        loadingElements[i-1].classList.add("active");
    }
}

export const gameLogicService = new GameLogicService();