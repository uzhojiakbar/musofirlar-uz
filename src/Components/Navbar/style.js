import styled from "styled-components";
import { ReactComponent as Musofir } from '../../Assets/logo/logo.svg'

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    background-color: white;
    z-index: 999;
    box-shadow:
        0 0 10px white,
        0 0 40px white,
        0 0 50px white;
    padding: 0 10px;
`

const Tohome = styled.div`
    width:  110px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled(Musofir)`
    width: 100%;
    height:100%;
    cursor: pointer;
    :hover{
        opacity: .8;
        && path{
        }
    }
`
const Link = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    height: 100%;
   .link{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        font-size: 14px;
        position: relative;
        top: 5px;
        
        color: #000;

        padding-bottom: 2px;
        transition: .3s;
        border: none;
        border-bottom: 5px dashed transparent;
        text-decoration: none;
        .tdn{
            width: 0;
            border-bottom: 5px solid #007FFF;
            transition: .3s;
            margin-top: 2px;
        }
         :hover{
            /* color: #007FFF; */
            .tdn{
                width: 100%;
            }
        }
    }
   
`
const Options = styled.div`
    .langs{
        .selected{
            padding: 5px;
            
        }
        .langs-list{
            position: absolute;
        }
    }
`

export { NavContainer, Tohome, Logo, Link, Options }