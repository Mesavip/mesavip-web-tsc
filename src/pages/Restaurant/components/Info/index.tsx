import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { RestaurantPageContext } from '../../contexts/RestaurantContext';
import { Container, Main, Details, Rate } from './styles';

export function Info() {
  const { restaurant } = useContext(RestaurantPageContext);
  const {
    name,
    operation_hours,
    address,
    culinary,
    avg_rating,
    total_ratings,
  } = restaurant;

  return (
    <Container>
      <Main>
        <Details>
          <h1> {name} </h1>
          <span> Hours of operation: {operation_hours} </span>
          <p>{address}</p>
          <p> {culinary} </p>
        </Details>

        <Rate>
          <div className="nota">
            <FaStar color="#fb0" size={17} />
            <span> {avg_rating} </span>
          </div>
          <p> {total_ratings} Ratings</p>
        </Rate>
      </Main>
    </Container>
  );
}
