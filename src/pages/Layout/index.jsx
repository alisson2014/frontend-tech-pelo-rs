import Header from "../../components/Header";
import { Container } from "./style";

export default function Layout({ children }) {
    return (
        <Container>
            <Header />
            {children}
            <footer>footer</footer>
        </Container>
    );
};