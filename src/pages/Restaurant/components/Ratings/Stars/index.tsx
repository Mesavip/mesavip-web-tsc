import { FaStar, FaStarHalf } from 'react-icons/fa';

interface Props {
  numberOfStars: any;
  starSize: number;
}

export function Stars({ numberOfStars, starSize }: Props) {
  const remainder = numberOfStars % 1;
  const averageInteger = Math.floor(numberOfStars - remainder);
  const stars = [];

  function isHalfStarNeeded() {
    return remainder >= 0.5;
  }

  for (let i = 1; i <= averageInteger; i++) {
    stars.push(<FaStar size={starSize} color="#fb0" key={i} />);
  }

  return (
    <>
      {stars}
      {isHalfStarNeeded() ? <FaStarHalf size={starSize} color="#fb0" /> : null}
    </>
  );
}
