import React from 'react';
import Cardcontent from '../component/cardcontent';
export default function Card() {
  return (
    <div>
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                     <Cardcontent type="FREE" rate="0" usersize="Single User" storage="5GB Storage"
                     class1="text-muted" class2="text-muted" class3="text-muted" class4="text-muted" icon1="fa fa-times"  icon2="fa fa-times"> </Cardcontent>
                     
                     <Cardcontent type="PRO" rate="9" usersize="5 Users" storage="50GB Storage"
                     class4="text-muted" icon1="fa fa-check" icon2="fa fa-times" > </Cardcontent>
                     <Cardcontent type="PREMIUM" rate="49" usersize="Unlimited Users" storage="150GB Storage"
                     icon1="fa fa-check" icon2="fa fa-check"> </Cardcontent>
                </div>
            </div>
        </section>
    </div>
  )
  
}


