import styled from "styled-components";

const IjarauySt = styled.div`
 width: 1440px;
 display: grid;
 grid-template-columns: repeat(4,25%);
 gap: 50px 0;
`
const HomeInfor = styled.div`
   width: 300px;
   height: 410px;
   background: #FFFFFF;
   box-shadow: 0px 0px 3.48079px rgba(0, 0, 0, 0.25);
   border-radius: 15px 15px 13px 13px;
 .img{
          width: 300px;
     img{
         width: 100%;
     }
 }
 .btn{
    border: 1px solid #007FFF;
    padding: 5px;
    width: 120px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 14.9989px;
    line-height: 18px;
    text-align: center;
    color: #007FFF;
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;
    :hover{
        background: #007FFF;
        color: #fff;
    }
 }

 .more{
    padding-left: 150px;
    padding-top: 20px;
 }
 
`
const Information = styled.div`
   display: flex;
   align-items: center;
   padding: 5px 20px;
   gap: 10px;
   font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    .titlel{
        font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
    color: #000000;
}
 .logo{
    img{
        width: 20px;
    }
 }
`
export { IjarauySt, HomeInfor, Information };