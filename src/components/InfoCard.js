import React from 'react';

import './App.css';

const InfoCard = (props) => {
  const imgUrl = 'https://dmitrykalko.github.io/rakovich/base/images/';
  const { selectedItem, search, inputStatus, onClick } = props
  const { lastName, flagName, imgId } = selectedItem;

  return (
    <div className="info"
      style={inputStatus === true ? { opacity: 1 } : { opacity: 0 }}
      style={search !== '' ? { opacity: 0 } : { opacity: 1 }}
    >
      <h1>{lastName}</h1>
      <h3>Герб: {flagName}</h3>
      <img className="imgUrl" src={imgUrl + +imgId + '.png'} alt="flagImage" />
      <button className="sertificate-btn" onClick={() => onClick(selectedItem)}>Получить грамоту шляхтича</button>
    </div>
  );
}

export default InfoCard;