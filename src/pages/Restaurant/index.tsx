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
import { Restaurant as IRestaurant } from '../../interfaces/Restaurant';
import { RestaurantPageContext } from './contexts/RestaurantContext';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export function Restaurant({ match }: Props) {
  const restaurant_id = match.params.id;
  const [restaurant, setRestaurant] = useState({} as IRestaurant);

  useEffect(() => {
    api.get(`restaurants/${restaurant_id}`).then((item) => {
      setRestaurant(item.data);
    });
  }, []);

  return (
    <RestaurantPageContext.Provider value={{ restaurant_id, restaurant }}>
      <Container>
        <Banner />

        <Main>
          <div className="flex">
            <div className="content">
              <Info />
              <ImagesGallery />
              <About />
            </div>

            <div className="reservation-bg">
              <Separator className="separator" />
              <Reservation />
              <Separator className="separator" />
            </div>
          </div>

          <Ratings />
        </Main>
      </Container>
    </RestaurantPageContext.Provider>
  );
}
