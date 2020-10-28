import React from 'react';
import './CardList'

const Card = ({ name, email, id }) => { // it get from CardList 
  return (
    <div className='tc grow bg-purple br3 pa3 ma2 dib bw2 shadow-1 '>{/* // this is just a style  */}
      <img alt='robots' src={`https://robohash.org/${id}?set=set2size=200x200`} />  {/* img */}
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
