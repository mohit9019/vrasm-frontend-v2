import Card from "./Card";
function details(val){
    return(
      <>
        <div className="templetes">
        <Card 
          id={val.id}
          img={val.img}
          title={val.title}
          desc={val.desc}
          review={val.review}
          sale={val.sale}
          price={val.price}
        />
        </div>
      </>
    );
  }
  export default details;