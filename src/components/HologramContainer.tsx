import { useState } from "react";
import { store } from "../store/store";
import { subscribeKey } from "valtio/utils";
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