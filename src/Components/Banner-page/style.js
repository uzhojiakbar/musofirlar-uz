import styled from "styled-components";
import ijara from '../../Assets/imgs/header/ijara.png'

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin: 50px 0;
    gap: 30px;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    .main{
        display: flex;
        flex-direction: column;
        gap: 10px;
        .title{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 40.3083px;
            line-height: 60px;
            color: #000000;
        }
        .info{
            font-family: 'Gilroy';
            width: 450px;
            font-style: normal;
            font-weight: 500;
            font-size: 18.1623px;
            line-height: 21px;

            color: #000000;
        }
    }
    .btn{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        .button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            
            background: #007FFF;
            border-radius: 38px;
            padding: 20px 50px;
            
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 26px;
            text-decoration: none;


            color: #FFFFFF;

            :hover{
                opacity: .8;
            }
        }
    }
`

// BANNER

const BannerMain = styled.div`
    width: 100%;
    height: 560px;
    background-image:
        linear-gradient(360deg, #000000 -5.79%, rgba(196, 196, 196, 0) 42.44%),
        url(${({ background }) => background ? background : ijara});
    background-size:cover ;
    background-repeat: no-repeat;
    border-radius: 35px;
    display: flex;
    padding: 30px;
    .banner{
        .count{
            background: #FFFFFF;
            border-radius: 11.7708px;

            width: 190px;
            height: 60px;

            font-weight: 600;
            font-size: 33.6923px;
            line-height: 40px;
            color: #000000;

            display: flex;
            align-items: center;
            justify-content: center;
        }
        .info{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 45.5955px;
            line-height: 65px;
            color: #FFFFFF;
        }
    }
    .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: right;
        margin-right:50px;
    }
`

// CORUSEL
const CoruselMain = styled.div`
    display: flex;
    flex-direction: ${({ view }) => view ? view : ''};
    .corusel{

    }
    .left{
        width: 100%;
        display: flex;
        gap: 20px;
        flex-direction: column;
    }
    .right{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: ${({ view }) => view ? view : ''};
        .addver{
            border: 2px solid #007FFF;
            border-radius: 20px;
            width:  452px;
            height: 452px;
            position: absolute;
            left: ${({ view }) => view === 'row-reverse' ? 0 : 127}px;
            top: ${({ view }) => view === 'row-reverse' ? 50 : 93}px;
        }
        img{
            width:  450px;
            height: 450px;
            border-radius: 20px;
            position: absolute;
            top: ${({ view }) => view === 'row-reverse' ? 120 : 150}px;
            left: ${({ view }) => view === 'row-reverse' ? 50 : 40}px;
        }
        :hover{
            img{
                top: ${({ view }) => view === 'row-reverse' ? 50 : 95}px;
                left: ${({ view }) => view === 'row-reverse' ? 0 : 127.5}px;
            }
        }
    }
`
const Option = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ view }) => view ? view : ''};
    .opt-main{
        width: 70%;
        height: 100%;
        display: grid;
        gap: 20px;
        border: 2px solid transparent;
        box-shadow: 0px 0px 4px 3px transparent;
        border-radius: 20px;
        padding: 20px 35px;
        .title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: ${({ view }) => view ? view : ''};
            img{
                width: 12%;
            }
            .tit{
                font-weight: 600;
                font-size: 23.6391px;
                color: #007FFF;
                text-align: center;
                margin: 0 auto;
            }
        }
        .infor{
            font-weight: 500;
            font-size: 20px;
            color: #646464;
        }
    }
    .line{
        border: 3px solid #A9A9A9;
        border-radius:4px;
        height: 100%;
    }
    :hover{
        .opt-main{
            border: 2px solid #007FFF;
            box-shadow: 0px 0px 4px 3px rgba(0, 127, 255, 0.25);
            border-radius: 20px;
            transform: scale(1.07);
            position: relative;
            /* left: 50px; */
            padding: 20px 35px;
        }
        .line{
            border: 3px solid #007FFF;
            border-radius:4px;
        }
    }
`
// IMAGE CARUSEL

const ImageCorusel = styled.div`
    display: flex;
    justify-content: space-between;
`
const MasjidImg = styled.img`
    width:  440.8px;
    height: 440.63px;
    :hover{
        transform: scale(1.1);
    }
`
// TAXI
const TaxiCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
    left: 50px;
`

const Taxi = styled.div`
    width:  220px;
    height: 350px;
    background-color: white;
    border-radius: 12.2106px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 25px;
    .title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 26.0499px;
        line-height: 32px;
        color: #000000;
    }
    .relax{
        .opt{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18.3989px;
            line-height: 22px;
            color: #5F5F5F;
            margin: 10px;
        }
    }
    .price{
        display: flex;
        align-items: flex-end;
        gap: 9px;
        .now{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 40.056px;
            color: #007FFF;
        }
        .disc{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 600;
            font-size: 25.3087px;
            color: #000000;
        }
    }
    .order{
        transition: .5s;
        background: #007FFF;
        border-radius: 6.5123px;
        color: white;
        padding: 15px 25px;
        cursor: pointer;
        :active{
            background: linear-gradient( #0000002c 1% ,#00000041 50% ),#007FFF;
        }
    }
`
export { Container, Title, BannerMain, CoruselMain, Option, ImageCorusel, MasjidImg, TaxiCon, Taxi }