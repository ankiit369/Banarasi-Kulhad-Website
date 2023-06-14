import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import decor1_bkl from "../assets/decor1_bkl.jpg"
function Home(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={decor1_bkl}
        title="Banarasi Kulhad Chai"
        text="Taste That Matters The Most"
        buttonText="Take A Sip"
        url="/"
        btnClass="show"
        />
        </>
    )
}

export default Home;