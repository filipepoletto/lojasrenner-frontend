import logoImg from "../../assets/logo-dona-moda.svg";
import { CartTopbar } from "../CartTopbar";
import { Container, UserProfile } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Dona Moda" />
      <nav>
        <UserProfile>
          <span>R</span>
          <p>Boa tarde, Renata!</p>
        </UserProfile>
        <CartTopbar />
      </nav>
    </Container>
  )
}
