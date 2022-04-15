import "../../css/home/Aboutus.css"
const Aboutus=()=>{
    return(
        <>
            <div className="aboutus"> 
            <h4 className="about-title">Meet the team</h4>
            <div className="about-desc"><div className="horizon"></div><i class="fas fa-users" id="team"></i><div className="horizon"></div></div>
                <div className="about-row">
                    <div className="about-card">
                        <div className="about-img"><img src="/Images/devB.png" /></div>
                        <div className="about-name">Devarshi Mistri</div>
                        <div className="about-mail"><i class="fal fa-paper-plane"></i>   devarshimistri@gmail.com</div>
                    </div>
                    <div className="about-card">
                        <div className="about-img"><img src="/Images/mohitB.png" /></div>
                        <div className="about-name">Mohit Chauhan</div>
                        <div className="about-mail"><i class="fal fa-paper-plane"></i>   mohitchauhan2802@gmail.com</div>
                    </div>
                    <div className="about-card">
                        <div className="about-img"><img src="/Images/manavB.png" /></div>
                        <div className="about-name">Manav Patel</div>
                        <div className="about-mail"><i class="fal fa-paper-plane"></i>   manavpatel@gmail.com</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Aboutus;