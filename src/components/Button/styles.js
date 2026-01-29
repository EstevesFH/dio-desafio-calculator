import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 0;
    border-radius: 100%;
    background-color: ${props => {
        if (props.variant === 'operation') return '#f17d1d';
        if (props.variant === 'clear') return '#a1a1a1';
        if (props.variant === 'equals') return '#077179';
        return '#666666';
    }};
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    cursor: pointer;
    min-width: 60px;
    min-height: 60px;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.6;
    }

    &:active {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        font-size: 22px;
        min-width: 70px;
        min-height: 70px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        padding: 25px;
        min-width: 65px;
        min-height: 65px;
    }
`;