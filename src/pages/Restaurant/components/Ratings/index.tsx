import { useState, useEffect, useContext } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { api } from '../../../../services/api';
import {
  Container,
  Average,
  NumberOfComments,
  Rating,
  Comment,
  Separator,
} from './styles';
import { Stars } from './Stars';
import { Ratings as IRatings } from '../../../../interfaces/Ratings';
import { RestaurantPageContext } from '../../contexts/RestaurantContext';

export function Ratings() {
  const [ratings, setRatings] = useState([] as IRatings[]);
  const { restaurant, restaurant_id } = useContext(RestaurantPageContext);
  const { avg_rating, total_ratings } = restaurant;

  useEffect(() => {
    api.get(`ratings/list/${restaurant_id}`).then((item) => {
      setRatings(item.data);
    });
  }, []);

  return (
    <Container className="ratings">
      <Average>
        <span>CUSTOMERS RATINGS</span>
        <h3>{avg_rating}</h3>
        <Stars numberOfStars={avg_rating} starSize={25} />
        <p> {total_ratings} ratings</p>
      </Average>

      <div>
        <NumberOfComments>
          <FaRegCommentAlt size={16} />
          <span> {total_ratings} Comments </span>
        </NumberOfComments>

        {ratings.map((rating) => (
          <Rating key={rating.id}>
            <Separator />

            <div className="nome-data">
              <span>{rating.client}</span>
              <span>{rating.date}</span>
            </div>

            <Stars numberOfStars={rating.rating} starSize={16} />

            <Comment>
              <p>{rating.comment}</p>
            </Comment>
          </Rating>
        ))}
      </div>
    </Container>
  );
}
