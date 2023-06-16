import Hologram from "./Hologram";

function HologramContainer(props:any){
    return(
        props.active?
            <Hologram/>          
        :
        null
    )
}

export default HologramContainer;