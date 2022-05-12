import Navigation from "../../components/Navigation/index"
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faGithub,faInstagram} from "@fortawesome/free-brands-svg-icons"
const AboutMe = () => {
    return (
        <>
            <Navigation/>
            <div className="heading-container">
                <div className="heading">
                    <h2>Hello World</h2>
                </div>
                <div className="heading-desc">
                    <h4>Hi, I'm Nikola<br></br> and I'm an <br></br>front<span>end</span> developer!</h4>
                </div>
                <div className="tech-heading">
                    <h2>My technologies</h2>
                </div>
                <div className="tech-wrapper">
                <div className="tech-desc">
                    <h3>JS</h3>
                   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="./js-logo.png" alt="javascript"/></a>
                </div>
                <div className="tech-desc">
                    <h3>REACT</h3>
                   <a href="https://reactjs.org/" target="_blank"><img src="./logo192.png" alt="react"/></a>
                </div>
                <div className="tech-desc">
                    <h3>FIREBASE</h3>
                    <a href="https://firebase.google.com/docs" target="_blank"><img src="./firebase-logo.png" alt="firebase"/></a>
                </div>
                </div>
                <div className="footer-heading">
                    <h3>You can find me here</h3>
                </div>
                <div className="footer-social">
                    <h4>Facebook</h4>
                    <h4>Github</h4>
                    <h4>Instagram</h4>
                </div>
                <div className="footer-icons">
                    <a href="https://www.facebook.com/nikola.culic.1" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{fontSize: '32px', color: "#4267B2"}}/></a> 
                    <a href="https://github.com/Culic96" target="_blank"><FontAwesomeIcon icon={faGithub} style={{fontSize: '32px', color: "#333"}} /></a>
                    <a href="https://www.instagram.com/tupactello/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{fontSize: '32px', color: "#fbad50"}}/></a>
                </div>
            </div>
        </>
    )
}

export default AboutMe;