


const ServicesCard = ({service}) => {
    const {id, name,price,description,card_img} = service || {}
    return (
        <div>
   <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={card_img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;