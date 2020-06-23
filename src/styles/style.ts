import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: ${(props) => props.theme.font.family.montserrat};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const Container = styled.div`
    width: 30%;
    background: ${(props) => props.theme.colors.primary};
    height: 400px;
`;
