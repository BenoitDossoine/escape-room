import Help from "./Help";
import Inventory from "./Inventory";
import Timer from "./Timer";
import View from "./View";

function Frame(){
  return(
    <div className="frame-wrapper">
      <div className="frame">
        <View></View>
        <Timer></Timer>
        <Help></Help>
        <Inventory></Inventory>
      </div>
    </div>
  );
}

export default Frame;
