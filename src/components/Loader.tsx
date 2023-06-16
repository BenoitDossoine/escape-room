import {ReactComponent as Logo} from '../assets/logo_web.svg';

function Loader(){
    return(
        <div className="loaderContainer">
            <Logo/>
            <p>Please await <br/> further instructions</p>
        </div>
    )
}

export default Loader;