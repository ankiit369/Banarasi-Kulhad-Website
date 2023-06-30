import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import outer_bkl from "../assets/interior_bkl.jpg";
import FranchiseForm from "../components/FranchiseForm";
function Franchise(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={outer_bkl}
        title="Franchise Details"
        text=""
        />
        <FranchiseForm/>
        </>
    )
}

export default Franchise;