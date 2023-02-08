import styled from "styled-components";

const IjBatafsilSt = styled.div`
 width: 1440px;
`

const BatafsilSt = styled.div`
  
 .oshxonaimg{
    width: 800px;
    img{
        width: 100%;
    }
 }
`

const Korgazmalar = styled.div`
 display: grid;
 grid-template-columns: repeat(2,55%);
 grid-template-rows: repeat(3,35%);
 img{
    width: 210px;
 }
`

const RasmFlex = styled.div`
 display: flex;
 gap: 20px;
`

const JihozlarSt = styled.div`
  display: grid;
  grid-template-columns: repeat(2,25%);
  gap: 8px;
`

const QoshimchaMalumotBt = styled.div`
   padding-top: 30px;
.uynarxi{
    border-bottom: 2px solid #007FFF;
    width: 830px;
}

.Batafsil{
    padding-top: 20px;
    padding-bottom: 5px;
}
.malumot{
    padding-top: 15px;
}
.vqoshimcha{
    padding-top: 8px;
}
`

export {IjBatafsilSt, BatafsilSt , Korgazmalar, RasmFlex, JihozlarSt, QoshimchaMalumotBt};