import { useEffect, useState, useCallback } from "react";
import { Card } from "../../components/Card";
import { Title } from "../../styles/utils";
import { ListCard, Main } from "./style";
import { Badge, Button, Col, Form, Row } from "react-bootstrap";
const { REACT_APP_API_URL } = process.env;

export default function Home() {
    const [opportunities, setOpportunities] = useState([]);
    const [cityFilter, setCityFilter] = useState("cidade");
    const [stateFilter, setStateFilter] = useState("estado");
    const [filteredOpportunities, setFilteredOpportunities] = useState([]);

    const getOpportunities = useCallback(async () => {
        try {
            const response = await fetch(REACT_APP_API_URL + "/oportunidade");
            const result = await response.json();
            setOpportunities(result);
            setFilteredOpportunities(result);
        } catch (error) {
            console.error("Erro ao buscar vagas");
        }
    }, [setOpportunities]);

    useEffect(() => {
        if(cityFilter === "todos") {
            setFilteredOpportunities(opportunities);
            return;
        }

        const newFilteredOpportunities = opportunities.filter(opportunity => opportunity.cidade === cityFilter);
        setFilteredOpportunities(newFilteredOpportunities);
    }, [cityFilter]);

    useEffect(() => {
        if(stateFilter === "todos") {
            setFilteredOpportunities(opportunities);
            return;
        }

        const newFilteredOpportunities = opportunities.filter(opportunity => opportunity.estado === stateFilter);
        setFilteredOpportunities(newFilteredOpportunities);
    }, [stateFilter]);

    useEffect(() => {
        getOpportunities();
    }, [getOpportunities]);

    return (
        <Main>
            <Title>Vagas disponiveis</Title>
            <Row style={{ marginBottom: 16 }}>
                <Col xs="auto">
                    <Form.Group>
                        <Form.Label htmlFor="filtroEstado">Filtrar por estado</Form.Label>
                        <Form.Select 
                            defaultValue="todos" 
                            id="filtroEstado" 
                            onChange={e => setStateFilter(e.target.value)}
                        >
                            <option value="todos">Selecione</option>
                            {opportunities.length > 0 && opportunities.map((opportunity, index) => (
                                <option value={opportunity.estado} key={index}>{opportunity.estado}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <Form.Group>
                        <Form.Label htmlFor="filtroCidade">Filtrar por cidade</Form.Label>
                        <Form.Select 
                            defaultValue="todos" 
                            id="filtroCidade" 
                            onChange={e => setCityFilter(e.target.value)}
                        >
                            <option value="todos">Selecione</option>
                            {opportunities.length > 0 && opportunities.map((opportunity, index) => (
                                <option value={opportunity.cidade} key={index}>{opportunity.cidade}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <ListCard>
                {filteredOpportunities.length > 0 && filteredOpportunities.map((opportunity, index) => (
                    <Card.Root key={index}>
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