import React, { useState, useEffect, useContext } from 'react';
import { Container } from './styles';
import { api } from '../../../../services/api';
import { RestaurantPageContext } from '../../contexts/RestaurantContext';

interface Image {
  id: string;
  path: string;
}

export function ImagesGallery() {
  const [images, setImages] = useState([] as Image[]);
  const [bigImage, setBigImage] = useState({} as Image);
  const { restaurant_id } = useContext(RestaurantPageContext);

  useEffect(() => {
    api.get(`files/list/${restaurant_id}/galeria`).then((item) => {
      setBigImage(item.data.shift());
      setImages(item.data);
    });
  }, []);

  return (
    <Container className="images-gallery">
      <div className="imagem-grande">
        <img src={bigImage.path} alt="Restaurant's gallery" />
      </div>

      <div className="imagens-pequenas">
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.path} alt="Restaurant's gallery" />
          </div>
        ))}
      </div>
    </Container>
  );
}
