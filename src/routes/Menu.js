import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import outer_bkl from "../assets/Menuu_bkl.jpg";
function Contact(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={outer_bkl}
        title="Menu Details"
        text=""
        buttonText=""
        url="/"
        btnClass="show"
        />
        </>
    )
}

export default Contact;