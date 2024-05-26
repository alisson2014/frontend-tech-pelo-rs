import { useEffect, useState, useCallback } from "react";
import { Card } from "../../components/Card";
import { Title } from "../../styles/utils";
import { ListCard, Main } from "./style";
import { Badge, Button, Col, Row } from "react-bootstrap";
const { REACT_APP_API_URL } = process.env;

export default function Home() {
    const [opportunities, setOpportunities] = useState([]);

    const getOpportunities = useCallback(async () => {
        try {
            const response = await fetch(REACT_APP_API_URL + "/oportunidade");
            const result = await response.json();
            setOpportunities(result);
        } catch (error) {
            console.error("Erro ao buscar vagas");
        }
    }, [setOpportunities]);

    useEffect(() => {
        getOpportunities();
    }, [getOpportunities]);

    return (
        <Main>
            <Title>Vagas disponiveis</Title>
            <ListCard>
                {opportunities.length > 0 && opportunities.map((opportunity, index) => (
                    <Card.Root>
                        <Card.Top>
                            <Card.Title>{opportunity.titulo}</Card.Title>
                            <Card.Time time={"2024-01-23"} />
                        </Card.Top>
                        <Card.Infos>
                            {opportunity?.cargo && (
                                <Col xs="auto">
                                    <Badge pill bg="info">{opportunity.cargo}</Badge>                     
                                </Col>
                            )}
                            <Col xs="auto">
                                <Badge pill bg="info">{opportunity.cidade}</Badge>
                            </Col> 
                            <Col xs="auto">
                                <Badge pill bg="info">{opportunity.estado}</Badge>
                            </Col>
                        </Card.Infos>
                        <Card.Description>{opportunity.descricao}</Card.Description>
                        <Button title="Candidatar-se para esta vaga">Candidatar-se</Button>
                    </Card.Root>
                ))}
            </ListCard>
        </Main>
    );
};