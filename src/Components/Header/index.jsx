import React from 'react'
import { Header as Head, Container, Main, Title, TitleSmall, Line, Info, StartBtn, GoBottom } from './style'


const Header = ({ page }) => {
    return (
        <Container>
            <Main>
                {
                    page === 'main' && <Head>
                        <div className="headerTitle">
                            <Title size='116'>
                                DOIM
                            </Title>
                            <TitleSmall>
                                biz bilan bo’ling! <br />
                                o’zbeklar bilan bo’ling!
                            </TitleSmall>
                        </div>
                        <Line  />
                        <Info>
                            <span>MUSOFIRLAR.UZ</span> yordamida dunyoning <br />
                            istalgan joyida najot topasiz!
                        </Info>
                        <StartBtn>
                            Boshlash
                        </StartBtn>
                        <GoBottom/>
                    </Head>
                }
                {
                    page === 'ijara' && <Head>

                        <Title>
                        Ijara uylar 
                        </Title>
                        <Line size={550}/>
                        <Info>
                            <span>MUSOFIRLAR.UZ</span> yordamida dunyoning <br />
                            istalgan joyida najot topasiz!
                        </Info>

                    </Head>
                }
                {
                    page === 'ish' && <Head>

                        <Title>
                        ISH TOPISH
                        </Title>
                        <Line size={550}/>
                        <Info>
                            <span>MUSOFIRLAR.UZ</span> yordamida dunyoning <br />
                            istalgan joyida najot topasiz!
                        </Info>

                    </Head>
                }
                {
                    page === 'elchi' && <Head>

                        <Title>
                        ELCHIXONALAR
                        </Title>
                        <Line size={550}/>
                        <Info>
                            <span>MUSOFIRLAR.UZ</span> yordamida dunyoning <br />
                            istalgan joyida najot topasiz!
                        </Info>

                    </Head>
                }
                {
                    page === 'oshxona' && <Head>

                        <Title>
                        O’zbek oshxonalari
                        </Title>
                        <Line size={550}/>
                        <Info>
                            <span>MUSOFIRLAR.UZ</span> yordamida dunyoning <br />
                            istalgan joyida najot topasiz!
                        </Info>

                    </Head>
                }
                {
                    page === 'xizmat' && <Head>

                        <Title>
                        Qo’shimcha xizmatlar
                        </Title>
                        <Line size={550}/>
                        <Info>
                            <span>MUSOFIRLAR.UZ</span> yordamida dunyoning <br />
                            istalgan joyida najot topasiz!
                        </Info>

                    </Head>
                }
            </Main>
        </Container>
    )
}

export default Header