import { Folder } from 'react-feather';

function Inventory(){
    const handleClick = () => {
        console.log("inventory clicked!")
    }
    return(
        <button className="inventory-button frame-button" onClick={handleClick}>
           <Folder size={48}/>
        </button>
    )
}

export default Inventory;