import React, { useState, useEffect } from 'react';
import { api } from '../../../../services/api';

interface Props {
  restaurant_id: string;
}

export function Banner(props: Props) {
  const [banner, setBanner] = useState('');
  const { restaurant_id } = props;

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
