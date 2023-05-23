function Sticker(props:any){
    return(
        <mesh scale={props.scale} position={props.position} rotation={props.rotation}>
            <planeBufferGeometry/>
            <meshStandardMaterial color='#FD7E25'/>
        </mesh>
    )
}

export default Sticker;