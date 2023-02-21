import React from 'react'
import { Container, Title, Main, Text, InfoCon, Info, Button, LocationStyled } from './style'
import LocationLogo from '../../Assets/logo/icons/location.svg'
import Tell from '../../Assets/logo/icons/tell.svg'
import Web from '../../Assets/logo/icons/web.svg'
import Mail from '../../Assets/logo/icons/mail.svg'
import Insta from '../../Assets/logo/icons/insta.svg'
import Fb from '../../Assets/logo/icons/fb.svg'
import Tg from '../../Assets/logo/icons/tg.svg'

const AboutBannerPage = ({ main, tell,location }) => {
    return (
        <Container>
            <Title>
                {main.title}
            </Title>
            <Main>
                <div className="main">
                    <div className="section lefts">
                        <img src={main.img} alt="" />
                    </div>
                    <div className="section rights">
                        <div className="card">
                            <Text fw={'600'}>
                                {main.title}
                            </Text>
                            <div className="aloqa">
                                <Text fw={'600'}>
                                    Aloqa uchun:
                                </Text>
                                <InfoCon>
                                    <Info margin={20}>
                                        <img src={LocationLogo} alt="" />
                                        {tell.location}
                                    </Info>
                                    <Info>
                                        <img src={Tell} alt="" />
                                        {tell.tel1}
                                    </Info>
                                    <Info>
                                        <img src={Tell} alt="" />
                                        {tell.tel2}
                                    </Info>
                                    <Info margin={20}>
                                        <img src={Web} alt="" />
                                        {tell.site}
                                    </Info>
                                    <Info>
                                        <img src={Mail} alt="" />
                                        {tell.mail1}
                                    </Info>
                                    <Info>
                                        <img src={Mail} alt="" />
                                        {tell.mail2}
                                    </Info>
                                    <Info margin={15}>
                                        <img src={Insta} alt="" />
                                        {tell.insta}
                                    </Info>
                                    <Info>
                                        <img src={Fb} alt="" />
                                        {tell.fb}
                                    </Info>

                                </InfoCon>
                            </div>
                            <a href={`https://t.me/${tell.tgBot}`} className="button">
                                <Button>
                                    <Text color='#fff' fw='900'>
                                        Telegram bot
                                    </Text>
                                    <img src={Tg} alt="" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Main>
            <LocationStyled
                src={location}
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></LocationStyled>
        </Container>
    )
}

export default AboutBannerPage