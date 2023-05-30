/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/models/room_v2.glb --transform -t --shadows --keepnames
Adapted by Benoît Dossoine
*/

import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF, Html, MeshReflectorMaterial } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { gameLogicService } from '../services/GameLogicService'
import { store } from '../store/store'
import { useFrame } from '@react-three/fiber'
import PcScreen from './PcScreen'
import Tablet from './Tablet'
import Hologram from './Hologram'
import { useSpring, animated } from '@react-spring/three'
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import HologramContainer from './HologramContainer'
import RadioAudio from './RadioAudio'

type GLTFResult = GLTF & {
  nodes: {
    board_01_high_rsMaterial1_0: THREE.Mesh
    board_02_low1_rsMaterial1_0: THREE.Mesh
    board_02_low2_rsMaterial1_0: THREE.Mesh
    board_03_high_rsMaterial1_0: THREE.Mesh
    board_03_high1_rsMaterial1_0: THREE.Mesh
    board_03_high2_rsMaterial1_0: THREE.Mesh
    board_03_high3_rsMaterial1_0: THREE.Mesh
    board_04_high_rsMaterial1_0: THREE.Mesh
    board_04_high1_rsMaterial1_0: THREE.Mesh
    board_04_high2_rsMaterial1_0: THREE.Mesh
    board_04_high3_rsMaterial1_0: THREE.Mesh
    Night_stand_metallic_0: THREE.Mesh
    Night_stand_wood_0: THREE.Mesh
    Poster: THREE.Mesh
    Mat: THREE.Mesh
    Bin: THREE.Mesh
    Chair: THREE.Mesh
    Keyboard: THREE.Mesh
    PC: THREE.Mesh
    Mouse: THREE.Mesh
    Speakers: THREE.Mesh
    Shelf: THREE.Mesh
    Bed: THREE.Mesh
    Briefcases: THREE.Mesh
    Briefcase: THREE.Mesh
    Closet: THREE.Mesh
    Scale: THREE.Mesh
    Desk: THREE.Mesh
    Filmposter: THREE.Mesh
    Filmposter002: THREE.Mesh
    Filmposter003: THREE.Mesh
    Filmposter004: THREE.Mesh
    Filmposter001: THREE.Mesh
    Dinosaur: THREE.Mesh
    Map: THREE.Mesh
    Plane: THREE.Mesh
    Stylized_Radio: THREE.Mesh
    Armchair: THREE.Mesh
    ['8Ball_0']: THREE.Mesh
    Tablet: THREE.Mesh
    Books: THREE.Mesh
    Tablet_inner: THREE.Mesh
    Pausebutton: THREE.Mesh
    Playbutton: THREE.Mesh
    Large_Control_Knob_Knob_Shiny_Green_0: THREE.Mesh
    Large_Control_Knob_Knob_Shiny_Green_0_1: THREE.Mesh
    Large_Control_Knob_Knob_Shiny_Green_0_2: THREE.Mesh
    Large_Control_Knob_Knob_Shiny_Green_0_3: THREE.Mesh
    Large_Control_Knob_Knob_Shiny_Green_0_4: THREE.Mesh
    Sticker001: THREE.Mesh
    Sticker002: THREE.Mesh
    Sticker003: THREE.Mesh
    Sticker: THREE.Mesh
    Sticker005: THREE.Mesh
    Low_poly_living_room: THREE.Mesh
    Wall001: THREE.Mesh
    Wall002: THREE.Mesh
    Wall003: THREE.Mesh
    Screen: THREE.Mesh
    Screen_inner: THREE.Mesh
  }
  materials: {
    rsMaterial1: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    metallic: THREE.MeshStandardMaterial
    wood: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    lambert73: THREE.MeshStandardMaterial
    ['lambert73.002']: THREE.MeshStandardMaterial
    ['lambert73.003']: THREE.MeshStandardMaterial
    ['lambert73.004']: THREE.MeshStandardMaterial
    ['lambert73.001']: THREE.MeshStandardMaterial
    material_0: THREE.MeshStandardMaterial
    ['Material.034']: THREE.MeshStandardMaterial
    ['Material.035']: THREE.MeshStandardMaterial
    ['Material.036']: THREE.MeshStandardMaterial
    ['Material.037']: THREE.MeshStandardMaterial
    Knob_Shiny_Green: THREE.MeshStandardMaterial
    Neon_Teal_Lights: THREE.MeshStandardMaterial
    Base_Green_Color2: THREE.MeshStandardMaterial
    Black_Color: THREE.MeshStandardMaterial
    Emit_Light: THREE.MeshStandardMaterial
    Sticker: THREE.MeshStandardMaterial
  }
}

export function Room(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('models/room_v2-transformed.glb') as GLTFResult;
  const vec = new THREE.Vector3();
  const hologramBaseMesh:any = useRef();

  const [active,setActive] = useState(false);
  const {buttonPosition}:any = useSpring({buttonPosition: !active? [0,0,0]: [0.02,-0.02,0.02]})
  
  const [play,setPlay] = useState(false);
  const {playButtonPosition}:any = useSpring({playButtonPosition: play?[162.24,84,-0.33]:[162.24, 85.14, -0.33]});
  const {pauseButtonPosition}:any = useSpring({pauseButtonPosition: play?[162.24,86.2,-0.33]:[162.24, 85.14, -0.33]});

  useFrame((state)=>{
    if(store.zoomedIn){
      state.camera.position.lerp(vec.set(store.cameraPosition.x,store.cameraPosition.y,store.cameraPosition.z),0.08);
      state.camera.rotation.set(store.cameraRotation.x,store.cameraRotation.y,store.cameraRotation.z);
      state.camera.updateProjectionMatrix();
    } else if (!store.zoomedIn){
      state.camera.position.lerp(vec.set(0,0,0),0.08);
      state.camera.updateProjectionMatrix();
    }
    return null;
  });

  return (
    <group {...props} dispose={null}>
      <group
        name="Shelf_group"
        onClick={(e)=>gameLogicService.handleClickEvent(e)}
      >
        <group 
          name="Skateboard"
          position={[104.45, 139.62, -156.85]} rotation={[-0.01, 0.01, 0.15]}
          onClick={(e)=>gameLogicService.handleClickEvent(e)}
        >
          <mesh name="board_01_high_rsMaterial1_0" geometry={nodes.board_01_high_rsMaterial1_0.geometry} material={materials.rsMaterial1} />
          <mesh name="board_02_low1_rsMaterial1_0" geometry={nodes.board_02_low1_rsMaterial1_0.geometry} material={materials['Material.005']} position={[-2.54, 0, 0]} />
          <mesh name="board_02_low2_rsMaterial1_0" geometry={nodes.board_02_low2_rsMaterial1_0.geometry} material={materials['Material.005']} position={[2.54, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1} />
          <mesh name="board_03_high_rsMaterial1_0" geometry={nodes.board_03_high_rsMaterial1_0.geometry} material={materials.rsMaterial1} position={[-2.54, 0, 0]} />
          <mesh name="board_03_high1_rsMaterial1_0" geometry={nodes.board_03_high1_rsMaterial1_0.geometry} material={materials.rsMaterial1} position={[2.54, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1} />
          <mesh name="board_03_high2_rsMaterial1_0" geometry={nodes.board_03_high2_rsMaterial1_0.geometry} material={materials.rsMaterial1} position={[2.54, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh name="board_03_high3_rsMaterial1_0" geometry={nodes.board_03_high3_rsMaterial1_0.geometry} material={materials.rsMaterial1} position={[-2.54, 0, 0]} rotation={[0, 0, -Math.PI]} scale={-1} />
          <mesh name="board_04_high_rsMaterial1_0" geometry={nodes.board_04_high_rsMaterial1_0.geometry} material={materials.rsMaterial1} position={[-2.54, 0, 0]} />
          <mesh name="board_04_high1_rsMaterial1_0" geometry={nodes.board_04_high1_rsMaterial1_0.geometry} material={materials.rsMaterial1} position={[2.54, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1} />
          <mesh name="board_04_high2_rsMaterial1_0" geometry={nodes.board_04_high2_rsMaterial1_0.geometry} material={materials.rsMaterial1} position={[2.54, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh name="board_04_high3_rsMaterial1_0" geometry={nodes.board_04_high3_rsMaterial1_0.geometry} material={materials.rsMaterial1} position={[-2.54, 0, 0]} rotation={[0, 0, -Math.PI]} scale={-1} />
        </group>
        <mesh name="Books" geometry={nodes.Books.geometry} material={materials['Material.001']} position={[17.71, 147.41, -161.99]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        </mesh>
        <mesh name="Sticker001" geometry={nodes.Sticker001.geometry} material={materials.Sticker} position={[22.44, 138.16, -152.71]} rotation={[Math.PI / 2, 0.2, 0]} scale={1.53} />
        <mesh name="Sticker002" geometry={nodes.Sticker002.geometry} material={materials.Sticker} position={[21.93, 160.49, -154.7]} rotation={[Math.PI / 2, 0.2, 0]} scale={1.53} />
        <mesh name="Sticker003" geometry={nodes.Sticker003.geometry} material={materials.Sticker} position={[13.61, 137.83, -152.71]} rotation={[Math.PI / 2, 0.2, 0]} scale={1.53} />
        <mesh name="Sticker" geometry={nodes.Sticker.geometry} material={materials.Sticker} position={[44.05, 137.45, -141.65]} rotation={[1.55, -0.02, 0.32]} scale={1.53} />
        <mesh name="Sticker005" geometry={nodes.Sticker005.geometry} material={materials.Sticker} position={[116.15, 141.74, -161.17]} rotation={[1.57, -0.03, 0.99]} scale={1.53} />
        <mesh
          name="Shelf" geometry={nodes.Shelf.geometry} material={materials['Material.001']}
          rotation={[-Math.PI / 2, 0, 0]} scale={100}
        />
      </group>
      <group  
        name="Nightstand" 
        position={[178.31, 13.38, 0]} rotation={[-Math.PI / 2, 0, 1.57]} scale={63.55}
        onClick={(e)=>gameLogicService.handleClickEvent(e)}
      >
        <mesh name="Night_stand_metallic_0" geometry={nodes.Night_stand_metallic_0.geometry} material={materials.metallic} position={[0, 0.18, 0.01]} scale={1.61} />
        <mesh name="Night_stand_wood_0" geometry={nodes.Night_stand_wood_0.geometry} material={materials.wood} position={[0, 0.18, 0.01]} scale={1.61} />
      </group>
      <group>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.034']} position={[-82.12, 167.63, -172.98]} rotation={[Math.PI / 2, 0, 0]} scale={32.13} />
        <mesh
          name="Poster" geometry={nodes.Poster.geometry} material={materials['Material.001']}
          rotation={[-Math.PI / 2, 0, 0]} scale={100}
          onClick={(e)=>gameLogicService.handleClickEvent(e)}
          />
      </group>
      <mesh 
        name="Mat" geometry={nodes.Mat.geometry} material={materials['Material.001']}
        position={[-4.63, 0, -2.57]} rotation={[-Math.PI / 2, 0, 0]} scale={100}
        onClick={(e)=>gameLogicService.handleClickEvent(e)}
      />
      <mesh
        name="Bin" geometry={nodes.Bin.geometry} material={materials['Material.001']}
        position={[-55.45, -1.37, -174.66]} rotation={[-Math.PI / 2, 0, 0]} scale={100}
        onClick={(e)=>gameLogicService.handleClickEvent(e)}
      />
      <mesh name="Chair" geometry={nodes.Chair.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh name="Keyboard" geometry={nodes.Keyboard.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh
        name="PC" geometry={nodes.PC.geometry} material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]} scale={100}
      />
      <mesh name="Mouse" geometry={nodes.Mouse.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh name="Speakers" geometry={nodes.Speakers.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh name="Bed" geometry={nodes.Bed.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh
        name="Closet" geometry={nodes.Closet.geometry}material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]} scale={100}
        onClick={(e)=>gameLogicService.handleClickEvent(e)}
      />
      <mesh name="Scale" geometry={nodes.Scale.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh name="Desk" geometry={nodes.Desk.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group
        name="Filmposters_left"
        onClick={(e)=>gameLogicService.handleClickEvent(e)}
      >
        <mesh name="Filmposter" geometry={nodes.Filmposter.geometry} material={materials.lambert73} position={[111.37, 158.63, 191.74]} rotation={[0, 0.04, Math.PI / 2]} scale={[-69.25, -44.97, -81.33]} />
        <mesh name="Filmposter002" geometry={nodes.Filmposter002.geometry} material={materials['lambert73.002']} position={[72.04, 157.99, 191]} rotation={[0, 0, 1.36]} scale={[-64.54, -41.92, -75.8]} />
        <mesh name="Filmposter003" geometry={nodes.Filmposter003.geometry} material={materials['lambert73.003']} position={[16.53, 159.37, 191]} rotation={[0, 0.04, 1.62]} scale={[-104.96, -68.16, -123.27]} />
      </group>
      <group
        name="Filmposters_right"
        onClick={(e)=>gameLogicService.handleClickEvent(e)}
      >
        <mesh name="Filmposter004" geometry={nodes.Filmposter004.geometry} material={materials['lambert73.004']} position={[-66.3, 166.76, 191.2]} rotation={[0, 0.04, 1.6]} scale={[-94.28, -61.23, -110.73]} />
        <mesh name="Filmposter001" geometry={nodes.Filmposter001.geometry} material={materials['lambert73.001']} position={[-94.94, 113.75, 191.03]} rotation={[0, 0.04, 1.68]} scale={[-37.1, -24.1, -43.58]} />
      </group>
      <mesh
        name="Dinosaur" geometry={nodes.Dinosaur.geometry} material={materials.material_0}
        position={[-150.86, 96.66, -63.43]} rotation={[-1.31, 0, -2.88]} scale={0.12} 
        onClick={(e)=> store.zoomedIn?gameLogicService.handleClickEvent(e):null}  
      />
      <mesh name="Map" geometry={nodes.Map.geometry} material={materials['Material.001']} position={[0, 0.09, -14.52]} rotation={[-Math.PI / 2, 0, 0]} scale={100}/>
      <group position={[162.24, 85.14, -0.33]} rotation={[-1.55, -0.79, -3.12]} scale={1.28}>
        <mesh 
          name="Radio" geometry={nodes.Stylized_Radio.geometry} material={materials['Material.035']}
          onClick={(e)=>gameLogicService.handleClickEvent(e)}
        />
        <RadioAudio/>
      </group>
      <animated.mesh
        name="Pausebutton" geometry={nodes.Pausebutton.geometry} material={materials['Material.035']}
        position={pauseButtonPosition} rotation={[-1.55, -0.79, -3.12]} scale={1.28}
        onClick={(e)=>{
          setPlay(false);
          store.radioPlaying = false;
        }}
      />
      <animated.mesh
        name="Playbutton" geometry={nodes.Playbutton.geometry} material={materials['Material.035']}
        position={playButtonPosition} rotation={[-1.55, -0.79, -3.12]} scale={1.28}
        onClick={(e)=>{
          setPlay(true);
          store.radioPlaying = true;
        }}
      />
      <mesh name="Armchair" geometry={nodes.Armchair.geometry} material={materials['Material.036']} position={[134.66, 35.39, 143.84]} rotation={[Math.PI, -0.74, Math.PI]} scale={[26.29, 3.91, 26.29]} />
      <mesh name="8Ball_0" geometry={nodes['8Ball_0'].geometry} material={materials['Material.037']} position={[-155.93, 134.36, -97.39]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={5.48} />
      <group name="Environment">
        <mesh name="Low_poly_living_room" geometry={nodes.Low_poly_living_room.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh name="Wall001" geometry={nodes.Wall001.geometry} material={materials['Material.001']} position={[201.77, 129.05, 75]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[108, 100, 100.11]} />
        <mesh name="Wall002" geometry={nodes.Wall002.geometry} material={materials['Material.001']} position={[77.92, 130.95, -185.62]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh name="Wall003" geometry={nodes.Wall003.geometry} material={materials['Material.001']} position={[77.92, 130.95, 195.62]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={-100} />
      </group>
      <group name="Screen" 
        onClick={(e)=>{
          gameLogicService.handleClickEvent(e);
        }
      }>
        <mesh name="Screen" castShadow receiveShadow geometry={nodes.Screen.geometry} material={materials['Material.001']} position={[-130.85, 78.88, 72.53]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh name="Screen_inner" castShadow receiveShadow geometry={nodes.Screen_inner.geometry} material={materials['Material.001']} position={[-131.06, 94.46, 97.27]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <MeshReflectorMaterial
            mirror={1}
            color={0x121212}
          />
          <PcScreen/>
        </mesh>
      </group>
      <group 
        name="Tablet"
        onClick={(e)=>gameLogicService.handleClickEvent(e)}  
      >
        <mesh
          name="Tablet" geometry={nodes.Tablet.geometry} material={materials['Material.001']}
          position={[-113.46, 73.58, 37.19]} rotation={[-Math.PI / 2, 0, -0.66]} scale={100}
        />
        <mesh
          name="Tablet_inner" geometry={nodes.Tablet_inner.geometry} material={materials['Material.001']}
          position={[-107.96, 75.3, 36.65]} rotation={[-2.02, -0.49, -0.77]} scale={100}
        >
        </mesh>
        <Tablet/>
      </group>

      <group
        name="Hologram" position={[128, 54.92, 137.85]} scale={7.89}
        onClick={(e)=>gameLogicService.handleClickEvent(e)}
        >
        <HologramContainer active={store.gameProgress.hologramActivated}/>
        <animated.mesh position={buttonPosition} name="HologramButton" geometry={nodes.Large_Control_Knob_Knob_Shiny_Green_0.geometry} material={materials.Knob_Shiny_Green}
          onClick={(e)=>
            {
              setActive(true);
              store.gameProgress.hologramActivated = true;
              gameLogicService.updateSolvedRiddles(["Hologram"]);
            }
          }
        >
          <meshStandardMaterial color={'red'}/>
        </animated.mesh>
        <mesh name="Large_Control_Knob_Knob_Shiny_Green_0_1" geometry={nodes.Large_Control_Knob_Knob_Shiny_Green_0_1.geometry} material={materials.Neon_Teal_Lights}/>
        <mesh name="Large_Control_Knob_Knob_Shiny_Green_0_2" geometry={nodes.Large_Control_Knob_Knob_Shiny_Green_0_2.geometry} material={materials.Base_Green_Color2}>
        </mesh>
        <mesh ref={hologramBaseMesh} name="Large_Control_Knob_Knob_Shiny_Green_0_3" geometry={nodes.Large_Control_Knob_Knob_Shiny_Green_0_3.geometry} material={materials.Black_Color}>
          {
            active?
            <meshStandardMaterial emissive={'#FD7E25'} opacity={1} emissiveIntensity={4} toneMapped={false}/>:
            <meshStandardMaterial color={'#FD7E25'}/>
          }
        </mesh>
        <mesh name="Large_Control_Knob_Knob_Shiny_Green_0_4" geometry={nodes.Large_Control_Knob_Knob_Shiny_Green_0_4.geometry} material={materials.Emit_Light}/>
        <EffectComposer>
          <SelectiveBloom selection={hologramBaseMesh} mipmapBlur luminanceThreshold={1} luminanceSmoothing={1} />
        </EffectComposer>
      </group>
    </group>
  )
}

useGLTF.preload('/output.glb')
