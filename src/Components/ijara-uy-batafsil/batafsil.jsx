import React, { useState } from "react";
import { IjBatafsilSt, BatafsilSt, Korgazmalar, RasmFlex, JihozlarSt, QoshimchaMalumotBt } from "./style";
import UyTopish from '../../Mock/ijara-uy'

const IjBatafsil = () => {
    const [selectdUy] = useState(5)
    return (
        <IjBatafsilSt>

            {
                UyTopish.map((v) => v.id == selectdUy && (
                    <BatafsilSt>
                        <div>
                            {v.malumot}
                        </div>
                        <RasmFlex>

                            <div className="oshxonaimg">
                                <img src={v.img} alt="" />
                            </div>
                            <Korgazmalar>

                                <div>
                                    <img src={v.vanna} alt="" />
                                </div>
                                <div>
                                    <img src={v.stol} alt="" />
                                </div>
                                <div>
                                    <img src={v.divan} alt="" />
                                </div>
                                <div>
                                    <img src={v.oqfon} alt="" />
                                </div>
                                <div>
                                    <img src={v.oqfon} alt="" />
                                </div>
                                <div>
                                    <img src={v.oqfon} alt="" />
                                </div>

                            </Korgazmalar>
                        </RasmFlex>
                        <QoshimchaMalumotBt>
                            <div className="uynarxi">
                                {v.UyNarxi}
                            </div>
                            <div className="Batafsil">
                                Batafsil:
                            </div>
                            <JihozlarSt>
                                <div>
                                    Xonalar soni:       {v.xonalarsoni}
                                </div>
                                <div>
                                    Jihozlar:      {v.jihozlar}
                                </div>
                                <div>
                                    Qavat:    {v.qavat}
                                </div>
                                <div>
                                    Qulayliklar:       {v.qulayliklar}
                                </div>
                                <div>
                                    Sanuzel:        {v.sanuzel}
                                </div>

                            </JihozlarSt>
                            <div className="malumot">
                                <div>

                                Qo`shimcha:
                                </div>
                                <div className="vqoshimcha">
                                    {v.qoshimcha}
                                </div>
                            </div>
                        </QoshimchaMalumotBt>
                    </BatafsilSt>
                ))
            }

        </IjBatafsilSt>
    )
}

export default IjBatafsil;