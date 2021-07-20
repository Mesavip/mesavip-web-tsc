export default {
  title: 'light',
  separator: 'rgba(0, 0, 0, 0.0275)',
  logo: 'https://bit.ly/3sERTuX',
  headerShadow: `--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
  var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);`,

  colors: {
    primary: '#000',
    secondary: '#f3ef19',
  },

  background: {
    primary: '#f3f6fa',
    secondary: '#fff',
  },

  onHover: {
    primary: '#f5f6f8',
  },

  form: {
    background: '#fff',
    separator: '#dadde1',
    boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',

    input: {
      border: '#dddfe2',
      placeholder: '',
    },

    primaryButton: {
      background: '#db1313',
      onHover: '#db1414',
    },

    secondaryButton: {
      background: '#42b72a',
      onHover: '#399e24',
    },
  },
};