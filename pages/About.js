import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
const bsurl = process.env.customurl;

export const getServerSideProps = async () => 
{
   const res = await fetch(bsurl+'api/About');
   const data = await res.json();
   return {
      props : { abtdata :  data }
   }
}
const About = ( { abtdata }) =>{
// export default function Solutions() {
    const tpicon = JSON.parse(abtdata.a_top_icon);
   
   console.log(tpicon[0]);
  return (
   <>
   <header className="slides position-relative">
     <Header/>
       <div className="col-12 inner-banner about">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center inner-banner-caption mb-4 mb-lg-5 pb-0 pb-lg-5">
                     <h2 className="mb-0 mb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                        <div dangerouslySetInnerHTML={{__html: abtdata.a_top_title}} />
                        
                    
                     </h2>
                  </div>
                  <div className="row row-cols-1 row-cols-lg-3 mt-5 mt-lg-0">
                     <div className="card" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
                        <img src="img/icons8-briefcase.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title my-4" align="center">{ tpicon[0].heading }</h5>
                           <p className="card-text">
                           
                          <div dangerouslySetInnerHTML={{__html: tpicon[0].desc}} />
                           </p>
                        </div>
                     </div>
                     <div className="card" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="600">
                        <img src="img/icons8-goal.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title my-4" align="center">{ tpicon[1].heading }</h5>
                           <p className="card-text">
                           <div dangerouslySetInnerHTML={{__html: tpicon[1].desc}} />
                           </p>
                        </div>
                     </div>
                     <div className="card" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                        <img src="img/icons8-good-quality.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title my-4" align="center">{ tpicon[2].heading }</h5>
                           <p className="card-text"> <div dangerouslySetInnerHTML={{__html: tpicon[2].desc}} />
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <section className="py-0 position-relative quality-accredited">
         <div className="container">
            <div className="card mb-3">
               <div className="row g-0">
                  <div className="col-md-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                     <img src={ bsurl + 'assets/content/assets/img/about/'+ abtdata.a_image } className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-7">
                     <div className="card-body px-3 px-lg-5 pb-0">
                        <h5 className="card-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                         { abtdata.a_sub_title }
                        </h5>
                        <h3 className="card-text mb-4 mb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
                       <div dangerouslySetInnerHTML={{__html: abtdata.a_title}} />
                        </h3>
                        <p className="card-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                        <div dangerouslySetInnerHTML={{__html: abtdata.a_desc}} />
                        </p>
                        <p className="card-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">Formed in 1995 by our current Director Allan Stephenson, Signworld Group has maintained an impressive trajectory of development and excellence. Originally housed in a small 3500 sq. ft. unit based on the Deeside Industrial park, Signworld now boast a 17000 sq. ft. site situated in Broughton on the outskirts of Chester.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="count-no py-0">
         <div className="container">
            <div className="row row-cols-1 row-cols-md-3 my-4 my-lg-5 pb-0 pb-lg-5 counter-no">
               <div className="col mb-4 mb-md-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                  <p>YEARS OF EXPERIENCE</p>
                  <h3 className="numbers">25+</h3>
               </div>
               <div className="col mb-4 mb-md-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                  <p>HAPPY CLIENTS</p>
                  <h3 className="numbers">14125+</h3>
               </div>
               <div className="col mb-4 mb-md-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <p>SERVICES OFFERED</p>
                  <h3 className="numbers">30+</h3>
               </div>
            </div>
         </div>
      </section>
      <section className="new-exp" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
         <div className="container">
            <p>
             { abtdata.a_footer_sub }
            </p>
            <h3 className="my-4 my-lg-5">
            { abtdata.a_footer_title }
            </h3>
            <Link href="/Contact"><a><button className="btn btn-abt">
            Let’s get to work
            </button>
            </a>
            </Link>
         </div>
      </section>
      <section className="logos-sec abt py-3 py-lg-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
         <div className="container">
            <div className="row">
               <figure className="mb-0">
                  <img src="img/logos.svg" className="w-100 img-fluid" alt="" />
               </figure>
            </div>
         </div>
      </section>
   </>
  )
}
export default About;
