/* eslint-disable react/prop-types */
import React from 'react';
// import { logout } from '../../services/auth';

interface Props {
  text: string,
  href: string,
  signout?: string
}

export default function Button(props: Props) {
  const { text, href } = props;

  return (
    <div className="buttons">
      <a href={href}>
        <button >
          {text}
        </button>
      </a>
    </div>
  );
}