import { Row } from "react-bootstrap";

export default function CardTop({ children }) {
    return (
        <Row className="align-items-center justify-content-between">{children}</Row>
    );
};