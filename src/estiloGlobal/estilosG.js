import styled from "styled-components";

export const ContainerGeral = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0px;
    padding: 0px;
    position: relative;

    .containerModal {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 100;
        display: flex;
        justify-content: center;
    }
    .modal {
        width: 60%;
        height: 300px;
        overflow-y: auto;
        overflow-x: auto;
        margin-top: 100px;
        background-color: #cab300;
        color: #000;
        z-index: 120;
        box-shadow: 0px 0px 20px #888;
    }
    .containerBotoesModal {
        width: 100%;
        padding: 1px;
        display: flex;
        justify-content: flex-end;
    }
    .containerBotoesModal button {
        margin-left: 2px;
        margin-bottom: 2px;
    }
    .titu {
        width: 100%;
        margin: 2px 0px;
        font-weight: 600;
        text-align: center;
        outline: none;
        background-color:#ffe205;
    }
    .conteudo {
        width: 100%;
        min-height: 100px;
        margin-top: 5px;
        outline: none;
        background-color:#ffe205;
    }
`;

export const SubContainerGeral = styled.div`
    width: 100%;
    margin: 0px;
    padding: 15px;
    position: relative;
    .sbtitulo {
        width: 100%;
        padding: 5px;
        text-align: center;
        font-weight: 600;
        font-size: 24px;
    }
`;

export const BarraFerramentaHori = styled.div`
    width: 100%;
    height: 50px;
    margin: 5px;
    padding: 5px;
    background-color:#444;
    position: relative; 
    border-radius: 10px;
    .bfhtitulo {
        text-align: center;
        font-size: 18px;
        font-weight: 900;
    }
    .icd {
        position: absolute;
        padding: 2px;
        background-color: #444;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .itemdireita1 {
        right: 5px;
        bottom: -20px;
        z-index: 1px;
    }
    .itemdireita2 {
        right: 45px;
        bottom: -20px;
        z-index: 1px;
    }
    .itemdireita3 {
        right: 85px;
        bottom: -20px;
        z-index: 1px;
    }
    .icone {
        position: absolute;
        left: 5px;
        top: 5px;
        z-index: 1px;
        width: 40px;
        height: 40px;
        background-color:#cab300;
        border-radius: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icone img {
        width: 39px;
        height: 39px;
        padding: 5px;
    }
`;

export const NotasContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
`;

export const NotaCartao = styled.div`
    width: 300px;
    min-height: 100x;
    background-color: #cab300;
    color: #000;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;

    .conteudo {
        height: 200px;
        overflow: auto;
    }
`;