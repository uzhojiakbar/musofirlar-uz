import IjBatafsil from "../Components/ijara-uy-batafsil/batafsil"
import IjaraUy from "../Components/Ijara-uy/ijara-uy"
import IshTopish from "../Components/ish-topish/ishtopish"

const Pages = [
    {
        id: 1,
        name:'Bosh sahifa',
        uz: 'Bosh sahifa',
        ru: 'Glavniy menyu',
        eng: 'Mian Page',
        path: '/bosh-sahifa',
        element: <h1>Bosh sahifa</h1>
    },
    {
        id: 2,
        name: 'Ijara uylar',
        uz: 'Ijara Uylar',
        ru: 'Arenda doma',
        eng: 'Ijara home',
        path: '/ijara-uylar',
        element: <IjaraUy/>
    },
    {
        id: 3,
        name: 'Ish topish',
        path: '/ish-topish',
        element: <IshTopish/>,
    },
    {
        id: 4,
        name: 'Elchixonalar',
        path: '/elchixonalar',
        element: <h1>Elchixonalar'</h1>
    },
    {
        id: 5,
        name: 'O’zbek oshxonasi',
        path: '/ozbek-oshxonasi',
        element: <h1>O’zbek oshxonasi</h1>
    },
    {
        id: 6,
        name: 'Qo’shimcha xizmatlar',
        path: '/qoshimcha-xizmatlar',
        element: <h1>Qo’shimcha xizmatlar</h1>
    },
    {
        id: 7,
        name: 'Biz haqimizda',
        path: '/biz-haqimizda',
        element: <IjBatafsil/>
    },
]

export { Pages }