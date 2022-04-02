import Card from "./Card";
import RatedStars from "../preview/RatedStars";
function details(val){
    return(
      <>
        <div className="templetes">
        <Card 
          id={val.id}
          img='/Images/ecolife.jpg'
          title={val.name}
          desc={val.desc}
          review={<RatedStars></RatedStars>}
          sale={val.sale}
          price={val.price}
        />
        </div>
      </>
    );
  }
  export default details;