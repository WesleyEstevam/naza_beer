import { Container } from './styles';

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <Container>
      <b>© 2022 inCode</b>
    </Container>
  );
}
