import { logout } from '../../services/auth';

interface Props {
  text: string,
  href: string,
  signout?: boolean
}

export default function Button(props: Props)  {
  const { text, href, signout } = props;

  return (
    <div className="buttons">
      <a href={href}>
      <button onClick={ signout ? () => logout() : undefined} type="button">
          {text}
        </button>
      </a>
    </div>
  );
}