import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
const bsurl = process.env.customurl;


export const getServerSideProps = async () => 
{
   const res = await fetch(bsurl+"api/Portfolio");
   const data = await res.json();
   return {
      props : { prtdata :  data }
   }
}
const Portfolio = ( { prtdata }) =>{
// export default function Solutions() {
   console.log(prtdata);
  return (
   <>
   <header className="slides position-relative">
     <Header/>
        <div className="col-12 portfolio-banner">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center inner-banner-caption">
                     <h2 className="mb-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">Take a look <br />
                        through <br />
                        our portfolio<br />
                      
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <section className="portfolio pt-20">
         <div className="container">


 <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
            >
             <Masonry className="row" columnsCount={2}>
            
               {prtdata.map((prt, idx)=>(  
                  <div className="card">
                     <img src={ bsurl + 'assets/content/img/portfolio/'+ prt.p_image } className="card-img-top" alt="..." />
                     <div className="card-body">
                       <h5 className="card-title">{ prt.p_title}
                     </h5>
                       <div dangerouslySetInnerHTML={{__html: prt.p_content}} />
                   
                     </div>
                   </div>
                 ))}
                
                 
               
           
                </Masonry>
             </ResponsiveMasonry>
        </div>
      </section>
   </>
  )
}
export default Portfolio;
