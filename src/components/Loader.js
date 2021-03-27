import Loading_icon from "./Loading_icon.gif"

const Loader = () => {
    return (
        <div className = "loader"> 
            <img src = {Loading_icon} alt = "Loading" />
            <h1> Fetching Data</h1>
            
        </div>
    )
}

export default Loader
