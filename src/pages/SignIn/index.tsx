import { useState } from 'react';
import { UserFormData } from '../../interfaces/UserFormData';
import { api } from '../../services/api';
import { login } from '../../services/auth';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Text,
  Separator,
  CreateAccountLink,
} from './styles';

export function SignIn() {
  const [user, setUser] = useState({} as UserFormData);

  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();

    const response = await api.post('users/signin', user);
    login(response.data.token);

    window.location.href = '../';
  }

  return (
    <Container>
      <Text>
        <h3>
          <span>MESAVIP</span> helps you to make reservations in your favorite
          restaurants.
        </h3>
      </Text>

      <Form onSubmit={handleSubmit} autoComplete="on">
        <Input
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          name="email"
          placeholder="Email"
          type="email"
        />

        <Input
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          placeholder="Password"
          type="password"
        />

        <SubmitInput type="submit" value="Sign in" />

        <a href="/#">Forgot your password?</a>

        <Separator />

        <CreateAccountLink>
          <a href="/signup"> Create a new account </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
