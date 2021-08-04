import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
const bsurl = process.env.customurl;


export const getServerSideProps = async () => 
{
   const res = await fetch(bsurl+"api/Service");
   const data = await res.json();
   return {
      props : { servdata :  data }
   }
}
const Service = ( { servdata }) =>{
// export default function Solutions() {
   console.log(servdata);
  return (
   <>
   <header className="slides position-relative">
     <Header/>
       <div className="col-12 services-banner">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center inner-banner-caption">
                     <h2 className="mb-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">TRULY DIFFERENT <br />
                     SERVICE
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <section className="services-signs pt-0">
         <div className="container">
            <div className="row row-cols-1 row-cols-md-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
               <div className="col d-flex card-padding mt-0 r-border">
                  <div className="card custom-card-li">
                     <img src={ bsurl + 'assets/content/assets/img/service/'+ servdata[0].sr_img } className="card-img-top" alt="..." />
                     <div className="card-body px-3 px-md-0">
                       <div dangerouslySetInnerHTML={{__html: servdata[0].third_content_desc}} />
                     </div>
                  </div>
               </div>
               <div className="col d-flex card-padding mt-0">
                  <div className="card custom-card-li">
                     <div className="card-body p-3 p-md-0 d-flex align-content-between flex-wrap">
                        <div>
                           <h5>{ servdata[0].content_head_title}</h5>
                           <h2>{ servdata[0].content_main_title}</h2>
                          <div dangerouslySetInnerHTML={{__html: servdata[0].content_desc}} />
                        </div>
                        <div className="mt-auto">
                         <div dangerouslySetInnerHTML={{__html: servdata[0].second_content_desc}} />
                          <Link href="/Contact">
                           <button className="btn button-service mt-3 mt-lg-5">Contact us </button>
                          </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <hr className="border-line" />
            <div className="row row-cols-1 row-cols-md-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
               <div className="col d-flex card-padding mt-0 r-border">
                  <div className="card custom-card-li">
                     <div className="card-body p-3 p-md-0 d-flex align-content-between flex-wrap">
                        <div>
                           <h5>{ servdata[1].content_head_title}</h5>
                           <h2>{ servdata[1].content_main_title}</h2>
                            <div dangerouslySetInnerHTML={{__html: servdata[1].content_desc}} />
                        </div>
                        <div className="mt-auto">
                           <div dangerouslySetInnerHTML={{__html: servdata[1].second_content_desc}} />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col d-flex card-padding mt-0">
                  <div className="card custom-card-li">
                     <img src={ bsurl + 'assets/content/assets/img/service/'+ servdata[1].sr_img } className="card-img-top" alt="..." />
                     <div className="card-body px-3 px-md-0">
                        <div dangerouslySetInnerHTML={{__html: servdata[1].third_content_desc}} />
                        <Link href="/Contact">
                        <button className="btn button-service mt-3 mt-lg-5">Contact us </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <hr className="border-line" />
            <div className="row row-cols-1 row-cols-md-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
               <div className="col d-flex card-padding mt-0 r-border">
                  <div className="card custom-card-li">
                     <img src={ bsurl + 'assets/content/assets/img/service/'+ servdata[2].sr_img } className="card-img-top" alt="..." />
                     <div className="card-body px-3 px-md-0">
                        <div dangerouslySetInnerHTML={{__html: servdata[2].third_content_desc}} />
                     </div>
                  </div>
               </div>
               <div className="col d-flex card-padding mt-0">
                  <div className="card custom-card-li">
                     <div className="card-body p-3 p-md-0 d-flex align-content-between flex-wrap">
                        <div>
                           <h5>{ servdata[2].content_head_title}</h5>
                           <h2>{ servdata[2].content_main_title}</h2>
                           <div dangerouslySetInnerHTML={{__html: servdata[2].content_desc}} />
                        </div>
                        <div className="mt-auto">
                            <div dangerouslySetInnerHTML={{__html: servdata[2].second_content_desc}} />
                            <Link href="/Contact">
                           <button className="btn button-service mt-3 mt-lg-5">Contact us </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <hr className="border-line" />
            <div className="row row-cols-1 row-cols-md-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
               <div className="col d-flex card-padding mt-0 r-border">
                  <div className="card custom-card-li">
                     <div className="card-body p-0 d-flex align-content-between flex-wrap">
                        <div>
                           <h5>{ servdata[3].content_head_title}</h5>
                           <h2>{ servdata[3].content_main_title}
                           </h2>
                           <div dangerouslySetInnerHTML={{__html: servdata[3].content_desc}} />
                        </div>
                        <div className="mt-auto">
                          <div dangerouslySetInnerHTML={{__html: servdata[3].second_content_desc}} />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col d-flex card-padding mt-0">
                  <div className="card custom-card-li">
                     <img src={ bsurl + 'assets/content/assets/img/service/'+ servdata[3].sr_img } className="card-img-top" alt="..." />
                     <div className="card-body px-3 px-md-0">
                        <p className="mt-3">
                        <div dangerouslySetInnerHTML={{__html: servdata[3].third_content_desc}} />
                        </p>
                        <Link href="/Contact">
                        <button className="btn button-service mt-3 mt-lg-5">Contact us </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </>
  )
}
export default Service;
