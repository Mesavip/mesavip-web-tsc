import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { api } from '../../services/api';
import {
  Container,
  RestaurantList,
  RestaurantCard,
  Product,
  ProductDescription,
} from './styles';

interface Restaurant {
  id: string;
  name: string;
  culinary: string;
  bairro: string;
  image: string;
  avg_rating: string;
}

export function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  function redirectToRestaurant(restaurant_id: any) {
    window.location.href = `../restaurants/${restaurant_id}`;
  }

  useEffect(() => {
    api.get<Restaurant[]>('restaurants').then((response) => {
      setRestaurants(response.data);
    });
  }, []);

  return (
    <Container>
      <h3>{restaurants.length} Available restaurants</h3>
      <RestaurantList>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => redirectToRestaurant(restaurant.id)}
            key={restaurant.id}
          >
            <Product>
              <img src={restaurant.image} alt={restaurant.name} />

              <div className="div-produto-titulo-e-nota">
                <strong>{restaurant.name}</strong>
                <div className="div-nota">
                  <FaStar color="#fb0" />
                  <span>{restaurant.avg_rating}</span>
                </div>
              </div>
              <ProductDescription>
                <div className="div-produto-culinaria-e-localizacao">
                  <p>{restaurant.culinary}</p>
                  <p>{restaurant.bairro}</p>
                </div>
                <div>$25 - $50</div>
              </ProductDescription>
            </Product>
          </RestaurantCard>
        ))}
      </RestaurantList>
    </Container>
  );
}
