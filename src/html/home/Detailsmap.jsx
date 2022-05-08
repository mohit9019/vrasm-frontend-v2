import Card from "./Card";

function details(val){
  console.log('val',val);
    return(
      <>
        <div className="templetes">
        <Card 
          _id={val._id}
          img={val.images[0]}
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