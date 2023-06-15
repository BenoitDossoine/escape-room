function LoadingBar(){
    return(
        <div className="screenLoadingContainer">
            <div className="loadingBarContainer">
                <div className="loaderPart"></div>
                <div className="loaderPart"></div>
                <div className="loaderPart"></div>
                <div className="loaderPart"></div>
                <div className="loaderPart"></div>
                <div className="loaderPart"></div>
                <div className="loaderPart"></div>
                <div className="loaderPart"></div>
            </div>
            <p id="screenLoadingText">
                LOADING...
            </p>
        </div>
    )
}

export default LoadingBar;