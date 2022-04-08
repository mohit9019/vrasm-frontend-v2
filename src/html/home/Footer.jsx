import "../../css/home/Footer.css";
import { Link } from "react-router-dom";
function Footer(){
    return(<>
        <div className="footer">
        <center>
            <div className="tabs">
                <ul className="row">
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="#">About Us</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">Categories</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="#">Contact Us ?</Link></li>
                </ul>
                <ul className="row">
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">HTML / CSS</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">React JS</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">WordPress</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">Bootstrap</Link></li>
                </ul>
                <ul className="row">
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">Business</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">Portfolio</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">Education</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/categoriespage">E-Commerce</Link></li>
                </ul>
                <ul className="row">
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="/Login">Log In</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="Registration">Register</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="#">Privacy Policy !</Link></li>
                    <li className="column"><Link style={{textDecoration:"none",color:"white"}} to="#">Terms and Conditions *</Link></li>
                </ul>
                <div className="row" id="ico"><div class="column"><a href="https://www.youtube.com/c/VRASM"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
                </div>
                    </div>
            </div> 
            </center>
            <center><div className="line"></div></center>
            <div className="end">
            <p className="footerlogo">VRASM</p>
                <p className="copyright">Copyright © 2015 VRASM. All Rights Reserved.</p>
            </div>
        </div>
    </>
    );
}
export default Footer; 