import Help from "./Help";
import Inventory from "./Inventory";
import Timer from "./Timer";

function Frame(){
  return(
    <div className="frame-wrapper">
      <div className="frame">
        <Timer></Timer>
        <Help></Help>
        <Inventory></Inventory>
      </div>
    </div>
  );
}

export default Frame;
