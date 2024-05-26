import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    width: 384px;
    height: 362px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 15px;
`;

export default function CardRoot({ children }) {
    return (
        <StyledCard>{children}</StyledCard>
    );
};