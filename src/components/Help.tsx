function Help(){
    const handleClick = () => {
        console.log("help clicked");
    }
    return(
        <button className="help-button frame-button" onClick={handleClick}>
            <p>?</p>
        </button>
    )
}

export default Help;