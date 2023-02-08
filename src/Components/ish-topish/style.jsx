import styled from "styled-components";

const IshtopishSt = styled.div`
    width: 1440px;
    display: grid;
    grid-template-columns: repeat(4,24%);
    gap: 50px 0px;
`

const IshtopishCon = styled.div`
height: 420px;
width: 280px;
border-radius: 10px;
background: #FFFFFF;
box-shadow: 0px 0px 5.87891px 1.46973px rgba(0, 0, 0, 0.25);
border-radius: 13px 13px 14.6973px 14.6973px;
    .ustaimg{
        width: 280px;
        img{
            width: 100%;
        }
    }
    .ichkicon{
        padding-left: 20px;
        padding-top: 10px;

        .options-job{
            display: grid;
            grid-template-columns: repeat(2,50%);
            margin-top: 10px;
        }
        .afzalliklar{
            margin-top: 20px;
        }
    }


`

const InformationI = styled.div`
    display: flex;
    
`
const BtnIsh = styled.div`
    display: flex;
    gap: 30px;
    padding-top: 20px;
    width: 250px;
    text-align: center;

.btnI{
    width: 300px;
    padding: 5px;
    color: #007FFF;
    border: 1px solid #007FFF;
    border-radius: 5px;
    transition: all .3s;
    :hover{
        background-color: #007FFF;
        color: #fff;
    }
}

`

export {IshtopishSt, IshtopishCon, InformationI, BtnIsh};