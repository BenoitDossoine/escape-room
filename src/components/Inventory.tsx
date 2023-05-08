import Icofont from 'react-icofont';

function Inventory(){
    const handleClick = () => {
        console.log("inventory clicked!")
    }
    return(
        <button className="inventory-button frame-button" onClick={handleClick}>
            <Icofont icon="ui-folder" size='3'></Icofont>
        </button>
    )
}

export default Inventory;