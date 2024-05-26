import { Col } from "react-bootstrap";

export default function CardTime({ time }) {
    return (
        <Col xs="auto">
            <time dateTime={time}>{time}</time> 
        </Col>
    );
}