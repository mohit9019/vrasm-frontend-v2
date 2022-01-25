import "../../css/home/Footer.css";
function Footer(){
    return(<>
        <div className="footer">
        <center>
            <div className="tabs">
                <ul className="row">
                    <li className="column">Home</li>
                    <li className="column">About</li>
                    <li className="column">Products</li>
                    <li className="column">Testimonials</li>
                </ul>
                <ul className="row">
                    <li className="column">HTML 5</li>
                    <li className="column">Responsive</li>
                    <li className="column">PSD</li>
                    <li className="column">PPT</li>
                </ul>
                <ul className="row">
                    <li className="column">Whats new</li>
                    <li className="column">Online Events</li>
                    <li className="column">VRASM Photos</li>
                    <li className="column">VRASM Icons</li>
                </ul>
                <ul className="row">
                    <li className="column">Join Us</li>
                    <li className="column">Contact Us</li>
                    <li className="column">Privacy Policy</li>
                    <li className="column">Terms and Conditions</li>
                </ul>
                <div className="row" id="ico"><div class="column"><i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook-f"></i></div>
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