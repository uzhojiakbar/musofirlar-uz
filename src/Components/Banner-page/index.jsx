import React from 'react'
import { NavLink } from 'react-router-dom'
import { BannerMain, Container, Title, CoruselMain, Option, ImageCorusel, MasjidImg, Taxi, TaxiCon } from './style'
import left from '../../Assets/imgs/icons/left.svg'
import ProfileIjara from '../Profile-Ijara'
import { useState } from 'react'
import Map from '../../Assets/imgs/elchixona-banner/map-demo.svg'


const BannerPage = ({ title = {}, type = {}, data = [], extra = [] }) => {


  const [selectedOpt, setSelectedOpt] = useState(data[0]?.img)
  return (
    <Container>
      <Title>
        <div className="main left">
          <div className="title">{title.title}</div>
          <div className="info">
            {title.info}
          </div>
        </div>
        <div className="btn right">
          <NavLink className={'button'} to={title.navigate}>
            Barchasi  <img src={left} alt="" />
          </NavLink>
        </div>
      </Title>
      {type?.type === 'banner' ?
        <BannerMain background={type?.background}>
          <div className="banner left" >
            {extra.count ? <div className="count">12/dona </div> : <div></div>}
            {extra.info}
          </div>
          <div className="banner right">
            {
              extra?.key === 'ijara' ? <ProfileIjara /> : ''
            }
            {
              extra?.key === 'exlchixona' ? <img src={Map} alt="Map" /> : ''
            }
            {
              extra?.key === 'taxi' ? <>
                <TaxiCon>
                  {data.map((v) =>
                    <Taxi>
                      <div className="title">{v.type}</div>
                      <div className="relax">
                        {
                          v.relax.map((e) => <p className='opt'> - {e.value}</p>)
                        }
                      </div>
                      <div className="price">
                        <div className="now">{v.price.now}</div>
                        <div className="disc">{v.price.old}</div>
                      </div>
                      <div className="order">
                        Buyurtma berish
                      </div>
                    </Taxi>
                  )}
                </TaxiCon>
              </> : ''
            }
          </div>
        </BannerMain>
        : null}
      {type?.type === 'corusel' ?
        <CoruselMain view={type.view}>
          <div className="corusel left">
            {
              data.map((option) => <Option view={type.view} onClick={() => setSelectedOpt(data[option.id - 1]?.img)} key={option?.id}>
                <div className="opt-main">
                  <div className="title">
                    <img src={option.icon} alt="" />
                    <div className="tit">
                      {option.title}
                    </div>
                  </div>
                  <div className="infor">
                    {option.info}
                  </div>
                </div>
                <div className="line">
                </div>
              </Option>)
            }
          </div>
          <div className="corusel right">
            <div className="addver">
            </div>
            <img src={selectedOpt} alt="" />
          </div>
        </CoruselMain>
        :
        null}
      {
        type?.type === 'image-corusel' ? <ImageCorusel>
          {
            extra.map((v) => <MasjidImg src={v.img} key={v.id}>

            </MasjidImg>)
          }
        </ImageCorusel> : ''
      }
    </Container>
  )
}

export default BannerPage