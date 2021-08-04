import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
const bsurl = process.env.customurl;


export const getServerSideProps = async () => 
{
   const res = await fetch(bsurl+'api/Testimonial');
   const data = await res.json();
   return {
      props : { tstdata :  data }
   }
}
const Testimonial = ( { tstdata }) =>{
// export default function Solutions() {
   console.log(tstdata);
  return (
   <>
   <header className="slides position-relative">
     <Header/>
         <div className="col-12 news-banner">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center inner-banner-caption">
                     <h2 className="mb-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">Our clients
                        <br />
                    says
                      
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <section className="news-wrapper pt-20">
         <div className="container">
            
     {tstdata.map((tst, idx)=>(  
            <figure className="snip1533">
               <figcaption>
                  <div className="icon"><img src="img/quate.svg" /></div>
                 <blockquote>
                  <div dangerouslySetInnerHTML={{__html: tst.content}} />
                  
                 </blockquote>
           
                 <h4>{ tst.title}  </h4>
                 <h3>{ tst.subtitle}</h3>
              
               </figcaption>
             </figure>    
       ))}       

            
             
           
        </div>
      </section>
   </>
  )
}
export default Testimonial;
