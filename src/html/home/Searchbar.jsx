//searchbar -css in card.css
function Searchbar(){
    const total_Template=1000;
    return(
        <>
            <div className="searchbar"> 
                <div className="search-icon"><i class="fas fa-search"></i></div>
                <div className="search-input"><input type="search" placeholder={"Search "+total_Template+"of Templates..."} /></div>
             </div> 
        </>
    );
}
export default Searchbar;