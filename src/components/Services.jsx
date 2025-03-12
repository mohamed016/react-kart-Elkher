import { Ambulance, FirstAidKit, Tooth } from "@phosphor-icons/react";
import React from "react";
const serviceObj = [
  {
    icon: Ambulance,
    serviceName: "خدمه رقم 1",
    descriptionService:
      "لوريم إيبسوم دولور سيت أميت، كونسيكتتور أديبيسيتشينغ إليت. فوغا ماغني، فاسيلس كوربوريس راتيون كيا فيليت.",
  },
  {
    icon: Tooth,
    serviceName: "خدمه رقم 2",
    descriptionService:
      "لوريم إيبسوم دولور سيت أميت، كونسيكتتور أديبيسيتشينغ إليت. فوغا ماغني، فاسيلس كوربوريس راتيون كيا فيليت.",
  },
  {
    icon: FirstAidKit,
    serviceName: "خدمه رقم 3",
    descriptionService:
      "لوريم إيبسوم دولور سيت أميت، كونسيكتتور أديبيسيتشينغ إليت. فوغا ماغني، فاسيلس كوربوريس راتيون كيا فيليت.",
  },
];

function Services() {
    const newDate=serviceObj
  return (
    <section className="services">
      <h2>الخدمـــــات</h2>
      <div className="container">
        <div className="services-box">
          <div className="row">
           {newDate.map((service,i)=>{
           return <Service objService={service} key={i} />
           })}
          </div>
        </div>
      </div>
    </section>
  );
}





// service
function Service({objService}) {
  return (
    <>
      <div className="col-md-4 col-lg-4 col-12">
        <div className="service">
          <objService.icon size={50} />
          <h3>{objService.serviceName}</h3>
          <p>
            {objService.descriptionService}
          </p>
        </div>
      </div>
    </>
  );
}
export default Services;
