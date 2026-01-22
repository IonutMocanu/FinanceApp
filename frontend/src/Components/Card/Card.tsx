import React, { JSX } from 'react';
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
  return (
    <div className="card">
        <img src="https://picsum.photos/100/100" alt="" />
        <div className="details">
            <h2>{companyName}</h2>
            <h4>{ticker}</h4>
            <p>${price}</p>
        </div>
        <p className='Infon'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sed molestias pariatur, repellat nisi, tempore reprehenderit sit rem sequi quis unde. Nesciunt numquam consequuntur doloremque? Ratione voluptatibus ipsum maxime delectus.</p>
    </div>
  )
}

export default Card

