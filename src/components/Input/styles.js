import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #000000;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #000000;
        border: 0;
        padding: 0 10px;
        
        font-size: 40px;
        font-family: 'Roboto';
        text-align: right;
        color: #FFFFFF;
        outline: none;
    }

    @media (max-width: 768px) {
        height: 85px;
        
        input {
            height: 85px;
            font-size: 36px;
        }
    }

    @media (max-width: 480px) {
        height: 100px;
        
        input {
            height: 100px;
            font-size: 32px;
            padding: 0 15px;
        }
    }
`;