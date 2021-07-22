import { useEffect, useState } from 'react';
import { Container, Main, Separator } from './styles';
import { api } from '../../services/api';
import { RouteComponentProps } from 'react-router';

import { About } from './components/About';
import { Banner } from './components/Banner';
import { ImagesGallery } from './components/ImagesGallery';
import { Info } from './components/Info';
import { Ratings } from './components/Ratings';
import { Reservation } from './components/Reservation';

interface Restaurant {
  name: string;
  about: string;
  phone: string;
  site: string;
  culinary: string;
  address: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: any;
  avg_rating: string;
  operation_hours: string;
  total_ratings: string;
}

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export function Restaurant({ match }: Props) {
  const restaurant_id = match.params.id;
  const [restaurant, setRestaurant] = useState<Restaurant>(Object);

  useEffect(() => {
    api.get(`restaurants/${restaurant_id}`).then((item) => {
      console.log(item.data);
      setRestaurant(item.data);
    });
  }, []);

  return (
    <Container>
      <Banner restaurant_id={restaurant_id} />

      <Main>
        <div className="flex">
          <div className="content">
            <Info
              name={restaurant.name}
              operation_hours={restaurant.operation_hours}
              address={restaurant.address}
              culinary={restaurant.culinary}
              avg_rating={restaurant.avg_rating}
              total_ratings={restaurant.total_ratings}
            />

            <ImagesGallery restaurant_id={restaurant_id} />

            <About
              about={restaurant.about}
              phone={restaurant.phone}
              site={restaurant.site}
            />
          </div>

          <div className="reservation-bg">
            <Separator className="separator" />
            <Reservation restaurant_id={restaurant_id} />
            <Separator className="separator" />
          </div>
        </div>

        <Ratings
          average={restaurant.avg_rating}
          totalratings={restaurant.total_ratings}
          restaurant_id={restaurant_id}
        />
      </Main>
    </Container>
  );
}
