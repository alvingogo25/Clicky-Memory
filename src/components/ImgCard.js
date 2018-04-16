import React from 'react';

const ImgCard = props => (
<div className="tile">
  <img id={props.id} alt={props.name} src={`./images/${props.name}.png`} onClick={() => props.setClicked(props.id)} className="img"/>
</div>
);

export default ImgCard;
