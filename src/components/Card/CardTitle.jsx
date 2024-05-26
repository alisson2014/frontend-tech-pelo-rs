import { Col } from "react-bootstrap";
import { SubTitle } from "../../styles/utils";

export default function CardTitle({ children }) {
    return (
        <Col>
            <SubTitle>{children}</SubTitle>
        </Col>
    );
};