import Accordion from "./accordion"
import Boxes from "./boxes"
import Contact from "./contact"
import Footer from "./footer"
import Learn from "./learn"
import Modal from "./modal"
import Navbar from "./navbar"
import Newsletter from "./newletter"
import Showcase from "./showcase"


const Home = () => {
  return (
    <>
    <Navbar />
    <Showcase />
    <Newsletter />
    <Boxes />
    <Learn />
    <Accordion />
    <Contact />
    <Footer />
    <Modal />
    </>
  )
}

export default Home