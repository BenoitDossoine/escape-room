function GameLost(){
    return(
        <div className="gameLostContainer">
            <div className="dialogBoxContainer">
                        <div className="dialogBox movingBackground">
                            <div className="dialogContent">
                                <h2 className="dialogTitle">You failed</h2>
                                <div className="dialogContent">
                                    <p>Well, that didn't go as planned</p>
                                    <p>Want to go back in time and try again?</p>
                                </div>
                                <button className="lostButton"><a href="/">Let's do it!</a></button>
                            </div>
                        </div>
                    </div>
            {/* <div className="gameLostCard">
                <p className="lostText">Well, that didn't go as planned...</p>
                <p className="lostText">Want to go back in time and try again?</p>
                <button className="lostButton"><a href="/">Let's do it!</a></button>
            </div> */}
        </div>
    )
}

export default GameLost;