import React from 'react'
import BannerPage from '../Banner-page'
import { Container } from './style'

// ICONS
import Group from '../../Assets/logo/group.svg'
import Dollar from '../../Assets/logo/dollar.svg'
import Coffee from '../../Assets/logo/coffee.svg'

import Food from '../../Assets/logo/food.svg'
import Check from '../../Assets/logo/check.svg'
import FoodService from '../../Assets/logo/food-service.svg'
// BACKGROUNDS
import Flag from '../../Assets/imgs/elchixona-banner/flag.svg'
import Ijara from '../../Assets/imgs/header/ijara.png'
import Taxi from '../../Assets/imgs/taxi-banner/back.svg'
import UZ from '../../Assets/imgs/taxi-banner/uz.png'
// BANNERS
import Banner1 from '../../Assets/imgs/ish-topish-banner/banner-1.svg'
import oshxonaBanner1 from '../../Assets/imgs/oshxona-banner/banner1.svg'
// EXTRA IMAGES
import Masjid1 from '../../Assets/imgs/masjidlar/masjid1.svg'
import Masjid2 from '../../Assets/imgs/masjidlar/masjid2.svg'
import Masjid3 from '../../Assets/imgs/masjidlar/masjid3.svg'

const Body = () => {
    const Data = [
        {
            id: 1,
            icon: Group,
            title: 'Bag’ri keng jamoa',
            info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
            img: Banner1
        },
        {
            id: 2,
            icon: Dollar,
            title: 'Yuqori maosh va yingil mehnat',
            info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
            img: oshxonaBanner1
        },
        {
            id: 3,
            icon: Coffee,
            title: 'Coffeebreak ham mavjud',
            info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
            img: Banner1
        },
    ]
    const Data2 = [
        {
            id: 1,
            icon: Food,
            title: 'O’zbek milliy taomlar',
            info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
            img: oshxonaBanner1
        },
        {
            id: 2,
            icon: Check,
            title: 'Halol mahsulotlar',
            info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
            img: Banner1
        },
        {
            id: 3,
            icon: FoodService,
            title: 'O’zbekona xizmat',
            info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
            img: oshxonaBanner1
        },
    ]
    const DataTaxi = [
        {
            id: 1,
            type: 'Biznis Klas',
            relax: [{ id: 1, value: 'Tekin Wifi' }, { id: 2, value: 'Tekin Wifi' }, { id: 3, value: 'Tekin Wifi' }, { id: 4, value: 'Tekin Wifi' },],
            price: { now: '19.9$', old: '49.9$' },
        },
        {
            id: 2,
            type: 'Biznis Klas',
            relax: [{ id: 1, value: 'Tekin Wifi' }, { id: 2, value: 'Tekin Wifi' }, { id: 3, value: 'Tekin Wifi' }, { id: 4, value: 'Tekin Wifi' },],
            price: { now: '19.9$', old: '49.9$' },
        },
        {
            id: 3,
            type: 'Biznis Klas',
            relax: [{ id: 1, value: 'Tekin Wifi' }, { id: 2, value: 'Tekin Wifi' }, { id: 3, value: 'Tekin Wifi' }, { id: 4, value: 'Tekin Wifi' },],
            price: { now: '19.9$', old: '49.9$' },
        },
    ]
    return (
        <Container>
            {/* Ijara Uylar */}
            <BannerPage
                title={{
                    title: 'Ijara uylar',
                    info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
                    navigate: '../ijara-uylar',
                }}
                type={{
                    type: 'banner',
                    background: Ijara
                }}
                extra={{
                    count: '12/dona',
                    info: <div className="info">
                        Arzon narxda <br />
                        shinam va keng uy
                    </div>,
                    key: 'ijara',
                }}
            >

            </BannerPage>
            {/* Ish topish */}
            <BannerPage
                title={{
                    title: 'Ish topish',
                    info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
                    navigate: '../ish-topish'
                }}
                type={{
                    type: 'corusel',
                    view: 'row',
                }}
                data={Data}
            >
            </BannerPage>
            {/* Elchixonalar */}
            <BannerPage
                title={{
                    title: 'Elchixonalar',
                    info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
                    navigate: '../elchixonalar'
                }}
                type={{
                    type: 'banner',
                    view: 'row',
                    background: Flag
                }}
                data={Data}
                extra={{
                    key: 'exlchixona',
                    info: <div className="info">
                        Eng yaqin <br />
                        elchixonalarni oson toping
                    </div>,
                }}
            >

            </BannerPage>
            {/* O’zbek - oshxonasi va restoranlar */}
            <BannerPage
                title={{
                    title: 'O’zbek - oshxonasi va restoranlar',
                    info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
                    navigate: '../ozbek-oshxonasi'
                }}
                type={{
                    type: 'corusel',
                    view: 'row-reverse',
                }}
                data={Data2}
            >

            </BannerPage>
            {/* Masjidlar */}
            <BannerPage
                title={{
                    title: 'Masjidlar',
                    info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
                    navigate: '../masjidlar'
                }}
                type={{
                    type: 'image-corusel',
                }}
                extra={[
                    { id: 1, img: Masjid1 },
                    { id: 2, img: Masjid2 },
                    { id: 3, img: Masjid3 },
                ]}
            >

            </BannerPage>
            {/* Taxi */}
            <BannerPage
                title={{
                    title: 'Taxi xizmatlari',
                    info: 'MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!',
                    navigate: '../taxi'
                }}
                type={{
                    type: 'banner',
                    view: 'row',
                    background: Taxi
                }}
                data={DataTaxi}
                extra={{
                    key: 'taxi',
                    info: <div className="info">
                        Hududingizdagi <br />
                        eng yaxshi taxi xizmatlari
                    </div>,
                }}
            >
            </BannerPage>
        </Container>
    )
}

export default Body