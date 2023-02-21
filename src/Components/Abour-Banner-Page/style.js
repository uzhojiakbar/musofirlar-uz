import styled from "styled-components";

const Container = styled.div`
    margin-top: 50px;
    width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
`
const Title = styled.div`
    font-weight: 600;
    font-size: 34px;
    line-height: 44px;
    color: #000000;
`
const Main = styled.div`
    .main{
        display: flex;
        height: 600px;
        justify-content: center;
        .lefts{
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 90%;
            }
        }
        .rights{
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            .card{
                width: 80%;
                background: #FFFFFF;
                box-shadow: 0px 1.35054px 2.70108px 0.675271px rgba(0, 0, 0, 0.25);
                border-radius: 16.8788px;
                height: 100%;
                padding: 35px 18px 0 18px ;
                
                display: grid;
                grid-template-rows: 10% 70% 20%;
                justify-content: space-between;
                gap: 5px;
                .right{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
`
const Text = styled.div`
    font-weight: ${({ fw }) => fw ? fw : 400};
    font-size: 15px;
    line-height: 19px;
    color: ${({ color }) => color ? color : '#000000'};
    display: flex;
    align-items: center;
`

const InfoCon = styled.div`
    padding-left:25px;
    display: flex;
    flex-direction: column;
`
const Info = styled.div`
    display: flex;
    gap: 15px;

    margin-top:    ${({margin})=>margin?margin:'0'}px;
    margin-bottom: ${({margin})=>margin?margin:'0'}px;

    padding-top: 5px;
    padding-bottom: 5px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
`

const Button = styled.div`
    background: #007FFF;
    border-radius: 31.5px;
    padding: 20px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const LocationStyled = styled.iframe`
    width: 94%;
    height: 270px;
    margin: 0 auto;
    margin-bottom: 50px;
`

export { Container, Title, Main, Text,InfoCon,Info,Button,LocationStyled }