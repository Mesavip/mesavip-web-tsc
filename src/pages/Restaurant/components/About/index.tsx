import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { Container, Contact } from './styles';

interface Props {
  about: string;
  phone: string;
  site: string;
}

export function About(props: Props) {
  const { about, phone, site } = props;

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
