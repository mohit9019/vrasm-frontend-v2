import Card from "./Card";

function details(val){
    return(
      <>
        <div className="templetes">
        <Card 
          _id={val._id}
          img='/Images/default.webp'
          title={val.name}
          desc={val.desc}
          review={val.rating}
          sale={val.sale}
          price={val.price}
        />
        </div>
      </>
    );
  }
  export default details;