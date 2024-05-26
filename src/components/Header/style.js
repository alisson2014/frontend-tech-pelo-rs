import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 100px;
  background-color: var(--blue);

  @media screen and (max-width: 960px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
    color: #fff;
    font-family: 700;
    font-size: 24px;
`;