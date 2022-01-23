import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>OTHER CITIES WE SERVE</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bangalore.jpg'
              text='Services in Bangalore'
              label='truck in bangalore'
              path='/services'
            />
            <CardItem
              src='images/channai.jpg'
              text='Services in Chennai'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mumbai.jpg'
              text='Services in Mumbai'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/pune.jpeg'
              text='Services in Pune'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Rajasthan.jpg'
              text='Services in Rajasthan'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
