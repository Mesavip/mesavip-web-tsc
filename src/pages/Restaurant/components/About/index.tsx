import { useContext } from 'react';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { RestaurantPageContext } from '../../contexts/RestaurantContext';
import { Container, Contact } from './styles';

export function About() {
  const { restaurant } = useContext(RestaurantPageContext);
  const { about, phone, site } = restaurant;

  return (
    <Container>
      <span>About the restaurant</span>
      <div className="main">
        <div className="sobre">
          <p>
            {/* Inplementar https://stackoverflow.com/questions/28255937/how-to-use-read-more-toggle-for-dynamic-text */}
            {about}
          </p>
        </div>
        <Contact>
          <p className="phone">
            <FaPhoneAlt /> {phone}
          </p>
          <p className="site">
            <FaGlobe />
            <a href={site} target="_blank" rel="noreferrer">
              Restaurant site
            </a>
          </p>
        </Contact>
      </div>
    </Container>
  );
}
