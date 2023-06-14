import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import decor2_bkl from "../assets/decor2_bkl.jpg";
function About(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={decor2_bkl}
        title="About"
        text=""
        buttonText=""
        url="/"
        btnClass="show"
        />
        </>
    )
}

export default About;