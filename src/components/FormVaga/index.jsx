import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
const { REACT_APP_API_URL } = process.env;


export default function FormVaga() {
    const [titulo, setTitulo] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [resposavel, setResponsavel] = useState("");
    const [contato, setContato] = useState("");
    const [email, setEmail] = useState("");
    const [auxilioInicial, setAuxilioInicial] = useState("selecione");
    const [descricao, setDescricao] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            cidade,
            estado,
            resposavel,
            auxilio: auxilioInicial === "s",
            contato,
            email
        };

        try {
            const response = await fetch(REACT_APP_API_URL + "/oportunidade", {
                method: "POST",
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.error("Erro ao buscar vagas");
        }
    };

    return (
        <Container as="form" id="formAnunciarVaga" onSubmit={submitForm}>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="titulo">Titulo da Vaga</Form.Label>
                    <Form.Control 
                        id="titulo"
                        required
                        maxLength={30}
                        minLength={5}
                        placeholder="Titulo da vaga"
                        onChange={e => setTitulo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="cidade">Cidade</Form.Label>
                    <Form.Control 
                        required
                        id="cidade"
                        placeholder="Cidade"
                        onChange={e => setCidade(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="estado">Estado</Form.Label>
                    <Form.Control 
                        required
                        id="estado"
                        placeholder="Estado"
                        onChange={e => setEstado(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="nomeResponsavel">Nome Responsável/ Empresa</Form.Label>
                    <Form.Control 
                        required
                        id="nomeResponsavel"
                        placeholder="Nome"
                        onChange={e => setResponsavel(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="contato">Contato</Form.Label>
                    <Form.Control 
                        required
                        id="contato"
                        placeholder="Contato"
                        onChange={e => setContato(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="email">E-mail</Form.Label>
                    <Form.Control 
                        required
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="auxilioInicial">Tem auxilio inicial?</Form.Label>
                    <Form.Select defaultValue="selecione" id="auxilioInicial" onChange={e => setAuxilioInicial(e.target.value)}>
                        <option value="selecione" disabled>Selecione</option>
                        <option value="s">Sim</option>
                        <option value="n">Não</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label htmlFor="descricao">Descrição</Form.Label>
                    <Form.Control 
                        as="textarea"
                        id="descricao"
                        rows={3}
                        placeholder="Descrição da vaga"
                        onChange={e => setDescricao(e.target.value)}
                    />
                </Form.Group>

            </Row>
        </Container>
    );
};