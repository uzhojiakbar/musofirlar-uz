import BoshSahifa from "../Components/Bosh-sahifa"
import Header from "../Components/Header"

const Pages = [
    { id: 1, name: 'Bosh sahifa', path: '/bosh-sahifa', element: <><Header title='bosh'/> <BoshSahifa/></>},
    { id: 2, name: 'Ijara uylar', path: '/ijara-uylar', element: <h1> <Header  /> Ijara uylar</h1> },
    { id: 3, name: 'Ish topish', path: '/ish-topish', element: <h1>Ish topish</h1> },
    { id: 4, name: 'Elchixonalar', path: '/elchixonalar', element: <h1>Elchixonalar'</h1>},
    { id: 5, name: 'O’zbek oshxonasi', path: '/ozbek-oshxonasi', element: <h1>O’zbek oshxonasi</h1> },
    { id: 6, name: 'Qo’shimcha xizmatlar', path: '/qoshimcha-xizmatlar', element: <h1>Qo’shimcha xizmatlar</h1> },
    { id: 7, name: 'Biz haqimizda', path: '/biz-haqimizda', element: <h1>Biz haqimizda</h1> },
]

export { Pages }