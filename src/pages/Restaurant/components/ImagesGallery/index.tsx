import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../../../services/api';

interface Props {
  restaurant_id: string;
}

interface Image {
  id: string;
  path: string;
}

export function ImagesGallery(props: Props) {
  const [images, setImages] = useState<Image[]>([]);
  const [bigImage, setBigImage] = useState<Partial<Image>>({});
  const { restaurant_id } = props;

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
