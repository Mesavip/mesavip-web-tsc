import React, { useState, useEffect, useContext } from 'react';
import { api } from '../../../../services/api';
import { RestaurantPageContext } from '../../contexts/RestaurantContext';

export function Banner() {
  const [banner, setBanner] = useState('');
  const { restaurant_id } = useContext(RestaurantPageContext);

  useEffect(() => {
    api
      .get(`files/list/${restaurant_id}/banner`)
      .then((item) => setBanner(item.data[0].path));
  }, []);

  return (
    <div style={{ textAlign: 'center' }} className="banner">
      <img
        src={banner}
        alt="Restaurant banner"
        style={{
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          width: '72vw',
        }}
      />
    </div>
  );
}
