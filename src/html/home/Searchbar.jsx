//searchbar -css in card.css
function Searchbar(){
    const total_Template=1000;
    return(
        <>
            <div className="searchbar"> 
                <div className="search-icon"><i class="fas fa-search"></i></div>
                <div className="search-input"><input type="text" placeholder={"Search "+total_Template+" Templates..."} /></div>
             </div> 
        </>
    );
}
export default Searchbar;