import Button from "react-bootstrap/Button";
import * as Style from "./style";
import { MainTitle } from "../../styles/utils";

export default function Header() {
    return (
        <Style.Header>
            <MainTitle>Nome do projeto</MainTitle>
            <Button 
                variant="info"
                title="Anunciar vaga no site"
            >
                Anunciar vaga
            </Button>
        </Style.Header>
    );
};