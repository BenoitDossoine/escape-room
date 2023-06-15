import {ReactComponent as Logo} from '../assets/logo_web.svg';

function Loader(){
    return(
        <div className="loaderContainer">
            {/* <img src="./img/Asset 18.svg" alt="Logo of the Time Investigation Agency" /> */}
            <Logo/>
            <p>Please await <br/> further instructions</p>
        </div>
    )
}

export default Loader;