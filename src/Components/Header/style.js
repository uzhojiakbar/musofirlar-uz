import styled, { keyframes } from "styled-components";
import headerImg from '../../Assets/imgs/header.png'
import { ReactComponent as Bottom } from '../../Assets/imgs/icons/bottom.svg'

const Container = styled.div`
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    height: 750px;
    width: 100%;
    margin: 0 auto;
    background-image: linear-gradient(rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.9)), url(${headerImg});
    background-image:  url(${headerImg});
    background-repeat: no-repeat;
    background-size: cover;
`
const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    .headerTitle{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
`
const Title = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    font-size: ${({size})=>size?`${size}px`:'70px'};
    color: #000000;
    text-transform: uppercase;
`
const TitleSmall = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 40.4377px;
    color: #000000;
`
const Info = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #000000;
    span{
        font-weight: 700;
    }
`
const Line = styled.div`
    width: ${({ size }) => size ? `${size}px` : '850px'};
    height: 8px;
    background-color: #000000;
    border-radius: 9px;
`
const StartBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 283px;
    height: 74px;
   

    background: #007FFF;
    border-radius: 38px;

    margin: 0 auto;
    margin-top: 60px;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-align: center;

    color: #FFFFFF;

    transition: .5s;

    cursor: pointer;
    :hover{
        background: #0080ffca;
    }
`

const GoBottomAnim = keyframes`
    0% {
        top: 0;
    }
    100% {
        top: 30px;
    }

`

const GoBottom = styled(Bottom)`
    position: relative;
    margin: 0 auto;
    animation: ${GoBottomAnim} 1s infinite linear;
    transition: ease-in-out;
    :hover{
        opacity: .8;
    }
`


export { Title, Container, StartBtn, Info, Header, Main, TitleSmall, Line, GoBottom }