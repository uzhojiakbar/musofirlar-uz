import styled from "styled-components";

const Container = styled.div`
    width: 370px;
    height: 410px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
        box-sizing: content-box;
        width: 66px;
        height: 66px;
        border-radius: 51%;
        background-color: #FFB800;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
           
           /* border: 5px solid #FFB800; */
           box-sizing: content-box;
       }
    }
    .info-pf{
        .name-pf{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 600;
            font-size: 21.0078px;
            line-height: 23px;
            color: #000000;
        }
        .aboutme-pf{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 500;
            font-size: 21.0078px;
            line-height: 22px;

            color: #A6A6A6;
}
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .head{
        display: grid;
        gap: 10px;
        .title{
            display: flex;
            align-items: center;
            justify-content: space-between;

            font-weight: 500;
            font-size: 30.2534px;
            line-height: 36px;
            color: #000000;
        }
        .price{
            font-weight: 600;
            font-size: 25.7197px;
            line-height: 38px;
            color: #000000;
            .valyuta{
                font-size: 15.7197px;
            }
            .discount{
                font-size: 19.3843px;
                line-height: 23px;
                text-decoration: line-through;
                color: #000000;
            }
        }
    }
    .options{
        display: grid;
        gap: 11px;
        grid-template-columns: repeat(2,50%);
        .opt{
            display: flex;
            align-items: center;
            gap: 5px;
            /* FONT */
            font-weight: 500;
            font-size: 19.3659px;
            line-height: 25px;
            color: #A5A5A5;
        }
    }
    .buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .button{
            border: 2px solid #007FFF;
            border-radius: 24.5px;
            padding: 15px 30px;
            font-weight: 500;
            font-size: 17.24px;
            line-height: 20px;

            color: #007FFF;
            text-decoration: none;
            transition: .5s;
            :hover{
                background: #007FFF;
                color: white;
            }
        }
    }
`



export {Container,Title,Info}