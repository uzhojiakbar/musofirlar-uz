import AboutBannerPage from "../Components/Abour-Banner-Page"
import Body from "../Components/Body"
import Header from "../Components/Header"
import IjBatafsil from "../Components/ijara-uy-batafsil/batafsil"
import IjaraUy from "../Components/Ijara-uy/ijara-uy"
import IshTopish from "../Components/ish-topish/ishtopish"

import Elchixona from '../Assets/imgs/elchixona-banner/banner.svg'
import Oshxona from '../Assets/imgs/oshxona-banner/banner2.svg'

const Pages = [
    {
        id: 1,
        name: 'Bosh sahifa',
        uz: 'Bosh sahifa',
        ru: 'Glavniy menyu',
        eng: 'Mian Page',
        path: '/bosh-sahifa',
        element: <><Header page='main' />  <Body /></>
    },
    {
        id: 2,
        name: 'Ijara uylar',
        uz: 'Ijara Uylar',
        ru: 'Arenda doma',
        eng: 'Ijara home',
        path: '/ijara-uylar',
        element: <> <Header page='ijara' />  <IjaraUy /></>
    },
    {
        id: 3,
        name: 'Ish topish',
        path: '/ish-topish',
        element: <><Header page='ish' /> <IshTopish /></>
    },
    {
        id: 4,
        name: 'Elchixonalar',
        path: '/elchixonalar',
        element: <>
            <Header page='elchi' />
            <AboutBannerPage
                main={{
                    title: 'O‘zbekistonning Rossiya Federatsiyasidagi Elchixonasi',
                    img: Elchixona
                }}
                tell={{
                    location: '119017, 12 Pogorelskiy tor ko‘chasi, Moskva, Rossiya.',
                    tel1: '+998 93 345 24 27',
                    tel2: '+998 99 639 29 82',
                    mail1: 'uzhojiakbar9@gmail.com',
                    mail2: 'AzizbekToxirov@gmail.com',
                    site: 'http://musofirlar.uz',
                    insta: 'UzEmbassRussia',
                    fb: 'UzEmbass.ru',
                    tgBot: 'UzEmbassbot',
                }}
                location={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.13364226248!2d69.21158751566824!3d41.284195810348315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b50922256f9%3A0xd4691d23b9d26b5c!2sWebBrain%20Academy!5e0!3m2!1suz!2s!4v1676975163485!5m2!1suz!2s'}/></>
    },
    {
        id: 5,
        name: 'O’zbek oshxonasi',
        path: '/ozbek-oshxonasi',
        element: <> <Header page='oshxona' /> 
            <AboutBannerPage
                main={{
                    title: 'O’zbekiston milliy taomlar oshxonasi',
                    img: Oshxona
                }}
                tell={{
                    location: '119017, 12 Pogorelskiy tor ko‘chasi, Moskva, Rossiya.',
                    tel1: '+998 93 345 24 27',
                    tel2: '+998 99 639 29 82',
                    mail1: 'uzhojiakbar9@gmail.com',
                    mail2: 'AzizbekToxirov@gmail.com',
                    site: 'http://musofirlar.uz',
                    insta: 'UzEmbassRussia',
                    fb: 'UzEmbass.ru',
                    tgBot: 'UzEmbassbot',
                }}
                // location={'<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}
                location={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6010.57733665393!2d72.08708685616928!3d41.12822390028751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcad919b5cbdf1%3A0x9e27fc15cd48f508!2s2-maktab!5e0!3m2!1suz!2s!4v1676976038968!5m2!1suz!2s'}
            />
        </>
    },
    {
        id: 6,
        name: 'Qo’shimcha xizmatlar',
        path: '/qoshimcha-xizmatlar',
        element: <> <Header page='xizmat' /> <h1>Qo’shimcha xizmatlar</h1></>
    },
    {
        id: 7,
        name: 'Biz haqimizda',
        path: '/biz-haqimizda',
        element: <> <Header page='about' /> <IjBatafsil /></>
    },
]

export { Pages }