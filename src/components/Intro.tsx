function Intro(props:any){
    return(
        <div className="introContainer">
            <p> &gt; Welcome, agent. Are you ready to start? (Y/N)</p>
            &gt; <input 
            autoFocus type="text" maxLength={1} className="introInput"
            onInput={(e:any)=>{
                if(e.target.value === "Y" || e.target.value === "y"){
                    document.addEventListener("keydown", (event)=>{
                        props.startGame();
                        document.removeEventListener("keydown",(event)=>props.startGame());
                    })
                }
            }}
            ></input>
        </div>
    )
}

export default Intro;