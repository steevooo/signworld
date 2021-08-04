import Head from 'next/head'
import Link from 'next/link'
const bsurl = process.env.customurl;
import Header from './Header';
import Hslider from './Homeslider';
import Subscription from './Subscription';

export const getServerSideProps = async () => 
{
   const res = await fetch(bsurl+'api/Home');
   const data = await res.json();
   return {
      props : { hmdata :  data }
   }
   
 
}
function remHtml(str)
{
  var strg;
  
  if(str)
  {
   strg = str.replace("<p>","");
   strg = strg.replace("</p>","");
   strg = strg.replace(/<(.|\n)*?>/g, '')
   strg = strg.replace('\n', '')
  }
    
   
    return strg;
}  
 

const Home = ( { hmdata }) =>{
// export default function Solutions() {
   console.log(hmdata);
   const tpimg = JSON.parse(hmdata.h_image);
   //console.log(tpimg);
  return (
     
   <>
     <header className="slides position-relative">
     <Header/>
     <Hslider />
     </header>
      <section className="we-able pb-4 pb-lg-0">
         <div className="container">
            <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
           <div dangerouslySetInnerHTML={{__html: hmdata.h_title }} />    
            </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 g-lg-5 my-3 my-lg-5 hover14">
               <div className="position-relative" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                  <div className="col after-line">
                     <div className="card">
                        <img src={ bsurl + 'assets/content/assets/img/home/'+ tpimg[0].image } className="card-img-top" alt="..." />
                        <div className="card-body px-0">
                           <h5 className="card-title">{ tpimg[0].heading }</h5>
                           <Link href="/Service">
                           <a  className="btn btn-primary bg-transp-btn">Explore more <i><img src="img/right-arrow-arrow.svg" alt="" /></i></a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="position-relative" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                  <div className="col after-line">
                     <div className="card">
                        <img src={ bsurl + 'assets/content/assets/img/home/'+ tpimg[1].image } className="card-img-top" alt="..." />
                        <div className="card-body px-0">
                           <h5 className="card-title">{ tpimg[1].heading }</h5>
                           <Link href="/Service">
                           <a  className="btn btn-primary bg-transp-btn">Explore more <i><img src="img/right-arrow-arrow.svg" alt="" /></i></a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div className="position-relative">
                     <div className="after-line">
                        <div className="card">
                           <img src={ bsurl + 'assets/content/assets/img/home/'+ tpimg[2].image } className="card-img-top" alt="..." />
                           <div className="card-body px-0">
                              <h5 className="card-title">{ tpimg[2].heading }</h5>
                              <Link href="/Service">
                              <a  className="btn btn-primary bg-transp-btn">Explore more <i><img src="img/right-arrow-arrow.svg" alt="" /></i></a>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row g-4 g-lg-5 my-3 my-lg-5 hover14">
               <div className="col-12 col-md-3 position-relative" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
                  <div className="after-line">
                     <div className="card">
                        <img src={ bsurl + 'assets/content/assets/img/home/'+ tpimg[3].image }  className="card-img-top" alt="..." />
                        <div className="card-body px-0">
                           <h5 className="card-title">{ tpimg[3].heading }</h5>
                           <Link href="/Service">
                           <a href="#" className="btn btn-primary bg-transp-btn">Explore more <i><img src="img/right-arrow-arrow.svg" alt="" /></i></a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-3 position-relative" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div className="after-line">
                     <div className="card">
                        <img src={ bsurl + 'assets/content/assets/img/home/'+ tpimg[4].image }  className="card-img-top" alt="..." />
                        <div className="card-body px-0">
                           <h5 className="card-title">{ tpimg[4].heading }</h5>
                           <Link href="/Service">
                           <a  className="btn btn-primary bg-transp-btn">Explore more <i><img src="img/right-arrow-arrow.svg" alt="" /></i></a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                  <div className="card">
                     <img src={ bsurl + 'assets/content/assets/img/home/'+ tpimg[5].image }  className="card-img-top" alt="..." />
                     <div className="card-body px-0">
                        <h5 className="card-title">{ tpimg[5].heading }</h5>
                        <Link href="/Service">
                        <a href="#" className="btn btn-primary bg-transp-btn">Explore more <i><img src="img/right-arrow-arrow.svg" alt="" /></i></a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="logos-sec py-3 py-lg-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
         <div className="container">
            <div className="row">
               <figure className="mb-0">
                  <img src="img/logos.svg" className="w-100 img-fluid" alt="" />
               </figure>
            </div>
         </div>
      </section>
      <section className="portfolio-space">
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-5 gx-4 gx-lg-5">
                  <div className="card l-card-title">
                     <div className="card-body" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                        <h5 className="card-title mb-3 mb-lg-4">{ hmdata.h_sub_title }</h5>
                        <h2 className="mb-3 mb-lg-4">
                         <div dangerouslySetInnerHTML={{__html: hmdata.h_main_title }} />    
                         </h2>
                         <Link href="/Portfolio">
                        <a  className="btn btn-primary bg-transp-btn mb-4 mb-xl-5">Explore more <i><img src="img/right-arrow-arrow.svg" alt="" /></i></a>
                        </Link>
                     </div>

                     <Subscription/>

                  </div>
               </div>
               <div className="col-12 col-md-7" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                  <figure className="mb-0">
                     <img src={ bsurl + 'assets/content/assets/img/home/'+ hmdata.h_bottom_image } className="w-100 img-fluid" alt="" />
                  </figure>
               </div>
            </div>
         </div>
      </section>
   </>
   )
}
export default Home;
