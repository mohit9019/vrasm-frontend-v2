import "../../css/home/Footer.css";
function Footer(){
    return(<>
        <div className="footer">
        <center>
            <div className="tabs">
                <ul className="row">
                    <li className="column">Home</li>
                    <li className="column">About Us</li>
                    <li className="column">Categories</li>
                    <li className="column">Contact Us ?</li>
                </ul>
                <ul className="row">
                    <li className="column">HTML / CSS</li>
                    <li className="column">React JS</li>
                    <li className="column">WordPress</li>
                    <li className="column">Bootstrap</li>
                </ul>
                <ul className="row">
                    <li className="column">Business</li>
                    <li className="column">Portfolio</li>
                    <li className="column">Education</li>
                    <li className="column">E-Commerce</li>
                </ul>
                <ul className="row">
                    <li className="column">Log In</li>
                    <li className="column">Register</li>
                    <li className="column">Privacy Policy !</li>
                    <li className="column">Terms and Conditions *</li>
                </ul>
                <div className="row" id="ico"><div class="column"><i class="fab fa-youtube"></i>
                <i class="fab fa-instagram"></i>
                <i class="fas fa-envelope"></i></div>
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