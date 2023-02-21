import React from 'react'
import { Container, Title, Info } from './style'
import UserLogo from '../../Assets/logo/profile.svg'
import Heart from '../../Assets/logo/heart.svg'
import Discount from '../../Assets/logo/discount.svg'
import User from '../../Assets/logo/user.svg'
import Furniture from '../../Assets/logo/furniture.svg'
import Location from '../../Assets/logo/location.svg'
import { NavLink } from 'react-router-dom'
const ProfileIjara = () => {
  return (
    <Container>
      <Title>
        <div className="logo">
          <img src={UserLogo} alt="" />
        </div>
        <div className="info-pf">
          <div className="name-pf">Abdusalom Abdusalomov</div>
          <div className="aboutme-pf">
            OOO Birbalo corporation
          </div>
        </div>
      </Title>
      <Info>
        <div className="head">
          <div className="title">2 Xonali / 80m2  <div className="heart"> <img src={Heart} alt="" /> </div> </div>
          <div className="price">100.000<span className='valyuta'>so’m</span> <span className='discount'>750.000</span> </div>
        </div>
        <div className="options">
          <div className="opt"> <img className='icon' src={Location} alt="Location" /> London </div>
          <div className="opt"> <img className='icon' src={User} alt="User" /> Yakkalik </div>
          <div className="opt"> <img className='icon' src={Furniture} alt="Furniture" /> Mebellar </div>
          <div className="opt"> <img className='icon' src={Discount} alt="Discount" /> Arzon </div>
        </div>
        <div className="buttons">
          <NavLink className={'button'} to={'/biz-haqimizda'}>
            Bog'lanish
          </NavLink>
          <NavLink className={'button'} to={'/biz-haqimizda'}>
            Ma’lumotlar
          </NavLink>
        </div>
      </Info>
    </Container>
  )
}

export default ProfileIjara