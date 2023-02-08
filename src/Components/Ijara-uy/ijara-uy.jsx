import React from "react";
import { HomeInfor, IjarauySt, Information } from './style'
import UyTopish from '../../Mock/ijara-uy'
import location from '../../Assets/imgs/ijara-uy/location.svg'
import money from '../../Assets/imgs/ijara-uy/pull.svg'
import home from '../../Assets/imgs/ijara-uy/home.svg'
import etaj from '../../Assets/imgs/ijara-uy/pilapoya.svg'

const IjaraUy = () => {
    return (
        <IjarauySt>
            {
                UyTopish.map((v) =>
                    <HomeInfor>
                        <div className="img">
                            <img src={v.img} alt="" />
                        </div>
                        <div className="information">
                            <Information>
                                <div className="logo"> <img src={location} alt="" /> </div>
                                <div className="titlel"> {v.location} </div>
                            </Information>
                            <Information>
                                <div className="logo"> <img src={money} alt="" /> </div>
                                <div className="title"> {v.pul} </div>
                            </Information>
                            <Information>
                                <div className="logo"> <img src={home} alt="" /> </div>
                                <div className="title"> {v.xonalar} </div>
                            </Information>
                            <Information>
                                <div className="logo"> <img src={etaj} alt="" /> </div>
                                <div className="title"> {v.qavat} </div>
                            </Information>
                            <div className="more">
                                <div className="btn">Batafsil  </div>
                            </div>
                        </div>
                    </HomeInfor>
                )
            }
        </IjarauySt>
    )
}
export default IjaraUy;