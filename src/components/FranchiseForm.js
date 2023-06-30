import "./FranchiseFormStyles.css"

function FranchiseForm(){
    return(
        <div className="form-container">
            <h1>Join Us</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Phone"/>
                <textarea placeholder="Tell us about yourself" rows="4"></textarea>
                <button>Send Application</button>
            </form>
        </div>
    )
}

export default FranchiseForm