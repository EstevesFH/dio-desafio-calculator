import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #282c34;
    border-radius: 10px;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 5px;
        align-items: flex-start;
    }
`;

export const Content = styled.div`
    width: 60%;
    max-width: 400px;
    min-width: 300px;
    height: auto;
    min-height: 500px;
    background-color: #000000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 5px;
    gap: 5px;

    @media (max-width: 768px) {
        width: 95%;
        max-width: 100%;
        min-height: 600px;
    }

    @media (max-width: 480px) {
        width: 98%;
        padding: 8px;
        gap: 8px;
        justify-content: flex-start;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    @media (max-width: 480px) {
        gap: 8px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;