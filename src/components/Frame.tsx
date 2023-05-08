import Help from "./Help";
import Inventory from "./Inventory";

function Frame(){
  return(
    <div className="frame-wrapper">
      <div className="frame">
        <Help></Help>
        <Inventory></Inventory>
      </div>
    </div>
  );
}

export default Frame;
