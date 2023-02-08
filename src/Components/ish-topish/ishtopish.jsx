import React from "react";
import IshTopishM from "../../Mock/ish-topish";
import location from '../../Assets/imgs/ish-topish/location.svg'
import yotoq from '../../Assets/imgs/ish-topish/yotoq.svg'
import soat from '../../Assets/imgs/ish-topish/soat.svg'
import ovqat from '../../Assets/imgs/ish-topish/ovqat.svg'
import { BtnIsh, InformationI, IshtopishCon, IshtopishSt } from "./style";

const IshTopish = () => {
   return (
      <IshtopishSt>
         {
            IshTopishM.map((v) =>
               <IshtopishCon>
                  <div className="ustaimg">
                     <img src={v.img} alt="" />
                  </div>

                  <div className="ichkicon">
                     <div>
                        {v.ustalar}
                     </div>
                     <div className="afzalliklar">
                        Afzalliklar:
                     </div>
                     <div className="options-job">
                        <InformationI>
                           <div> <img src={location} alt="" /> </div>
                           <div> {v.location} </div>
                        </InformationI>
                        <InformationI>
                           <div> <img src={yotoq} alt="" /> </div>
                           <div> {v.yotoq} </div>
                        </InformationI>
                        <InformationI>
                           <div> <img src={soat} alt="" /> </div>
                           <div> {v.soat} </div>
                        </InformationI>
                        <InformationI>
                           <div> <img src={ovqat} alt="" /> </div>
                           <div> {v.ovqat} </div>
                        </InformationI>
                      <BtnIsh>
                           <div className="btnI">Bog`lanish </div>
                           <div className="btnI">Batafsil </div>
                      </BtnIsh>
                     </div>
                  </div>
               </IshtopishCon>
            )
         }
      </IshtopishSt>
   )
}

export default IshTopish;