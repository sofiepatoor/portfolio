import styled from 'styled-components';
import Container from './styles/Container';

export default function Header() {
  return (
    <HeaderStyles>
      <Container>
        <Logo>Sofie Patoor</Logo>
      </Container>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  text-align: center;
`;

const Logo = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.2rem;
`;