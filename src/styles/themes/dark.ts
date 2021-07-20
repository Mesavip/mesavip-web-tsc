/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'dark',
  separator: '#3b3f42',
  logo: 'https://bit.ly/2UjKlSb',
  headerShadow: `--tw-shadow: 0 4px 1.25px -1px rgba(255, 255, 255, 0.1),
  0 2px 1px -1px rgba(255, 255, 255, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
  var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);`,

  colors: {
    primary: '#fff',
    secondary: '#0a8af3',
  },

  background: {
    primary: '#2d333b',
    secondary: '#22272e',
  },

  onHover: {
    primary: '#363E47',
    secondary: '#f3f6fa',
  },

  form: {
    background: '#22272e',
    separator: '#3b3f42',
    boxShadow:
      '0 2px 4px rgb(76 86 102 / 25%), 0 8px 16px rgb(76 86 102 / 25%)',

    input: {
      border: '#4c5666d2',
      placeholder: '#b5b9be',
    },

    primaryButton: {
      background: '#444c56',
      onHover: '#535c66',
    },

    secondaryButton: {
      background: '#347d39',
      onHover: '#3e8f42',
    },
  },
};