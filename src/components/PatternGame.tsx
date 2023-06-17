import { useEffect, useState } from "react";
import { store } from "../store/store";
import { subscribeKey } from "valtio/utils";
import { gameLogicService } from "../services/GameLogicService";

function PatternGame(props:any){
    const [grid, setGrid] = useState<Array<boolean[]>>([]);
    const [amountClicked,setAmountClicked] = useState(0);
    const solution: Array<boolean[]> = [
        [false,false,true,false,false,false,false,false,true,false,false],
        [true,false,false,true,false,false,false,true,false,false,true],
        [true,false,true,true,true,true,true,true,true,false,true],
        [true,true,true,false,true,true,true,false,true,true,true],
        [true,true,true,true,true,true,true,true,true,true,true],
        [false,true,true,true,true,true,true,true,true,true,false],
        [false,false,true,false,false,false,false,false,true,false,false],
        [false,true,false,false,false,false,false,false,false,true,false]
    ];

    let [disabled,setDisabled] = useState(!store.zoomedIn);
    const unsubscribe = subscribeKey(store, 'zoomedIn', (state)=>{setDisabled(!state)});

    useEffect(()=>{
        for(let row = 0; row < 8; row++){
            grid.push([]);
            for(let col = 0; col < 11; col++){
                grid[row].push(false);
            }
        }
    },[])

    const cellClick = (e:any) => {     
        let clicked = e.target.getAttribute("data-clicked");
        let newGrid = grid;
        if(clicked == 'false'){
            e.target.style.backgroundColor = 'orange';
            e.target.setAttribute("data-clicked", true);
            setAmountClicked(count => count+1);
            newGrid[e.target.getAttribute("data-row")][e.target.getAttribute("data-col")] = true;
        } else if(clicked == 'true'){
            e.target.style.backgroundColor = 'transparent';
            e.target.setAttribute("data-clicked", false);
            setAmountClicked(count => count-1);
            newGrid[e.target.getAttribute("data-row")][e.target.getAttribute("data-col")] = false;
        }

        setGrid([...newGrid]);
        checkSolution(newGrid);
    }

    const checkSolution = (grid: Array<boolean[]>) => {
        for(let row=0; row<solution.length;row++){
            for(let col=0; col<solution[row].length;col++){
                if(solution[row][col]!=grid[row][col]){
                    return;
                }
            };
        };
        store.gameProgress.tabletUnlocked = true;
        gameLogicService.updateSolvedRiddles(["Tablet", "Poster"]);
        props.unlockTablet();
    }

    return(
        <>
            {!disabled?
                <div className="patternGameContainer" hidden={disabled}>
                    {grid.map((row, rowIndex)=>
                        row.map((col, colIndex)=>
                        <div
                        className="cell" key={rowIndex+colIndex} data-col={colIndex} data-row={rowIndex} data-clicked={false}
                        onClick={(e)=> cellClick(e)}>
                            </div>
                        )
                        )}
                </div>:
                null
            }
        </>
    )
}

export default PatternGame;