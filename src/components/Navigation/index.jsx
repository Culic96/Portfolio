import "./style.css";
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
        <div className="nav-holder">
            <div className="nav-links">
                <ul>
                    <li><a href="/">About me</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}


export default Navigation;