import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container, Main, Details, Rate } from './styles';

interface Props {
  name: string;
  operation_hours: string;
  address: string;
  culinary: string;
  avg_rating: string;
  total_ratings: string;
}

export function Info(props: Props) {
  const {
    name,
    operation_hours,
    address,
    culinary,
    avg_rating,
    total_ratings,
  } = props;

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
