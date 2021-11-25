import { createContext } from 'react';
import { Restaurant } from '../../../interfaces/Restaurant';

interface RestaurantContext {
  restaurant_id: string;
  restaurant: Restaurant;
}

export const RestaurantPageContext = createContext({} as RestaurantContext);
