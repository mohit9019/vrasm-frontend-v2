import Card from "./Card";

function details(val) {
  let rating = 0;
  val.feedbacks?.map(f => {
    rating += f.rating;
  })
  rating /= val.feedbacks?.length;
  if (isNaN(rating)) {
    rating = 0;
  }
  return (
    <>
      <div className="templetes">
        <Card
          key={val._id}
          _id={val._id}
          img={val.images[0]}
          title={val.name}
          desc={val.description}
          review={rating}
          sale={val.sale}
          price={val.price}
          rating={rating}
          isLiked={val.is_liked}
        />
      </div>
    </>
  );
}
export default details;