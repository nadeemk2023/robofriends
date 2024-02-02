const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green ma2 pa3 dib br3 grow shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
