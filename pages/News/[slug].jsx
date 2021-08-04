import Link from 'next/link';
import Header from '../Header';
const bsurl = process.env.customurl;

function getdtestring(dte,tp)
{
   var formattedDate;
  var date = new Date(dte);

var year = date.getFullYear();
var month = date.toLocaleString('default', { month: 'long' });
var day = date.getDate();

if (day < 10) {
  day = '0' + day;
}
if (month < 10) {
  month = '0' + month;
}
if(tp=='M')
  return month;
else if(tp=='D')
  return day;
else if(tp=='Y')
  return year;
else
return formattedDate = month + ' '+ day + ' | ' + year
}
 
 export const getServerSideProps = async(context) =>{
    
 const slug = context.params.slug;
 console.log(slug);
 const  res = await fetch(bsurl+'api/News/'+slug); 
 const data = await res.json();

 const  res1 = await fetch(bsurl+'api/Common/getRelativeNews/'+slug); 
 const data1 = await res1.json();

 
      return {
         props : { nws :data[0], relnws : data1 }
      }

   }

   export const getServerPaths = async () => {
      const res = await fetch(bsurl+'api/News')
      const data = await res.json();
    
      const paths = data.map((comment) => {
         return {
           params: {
             slug: comment.b_slug
           }
         }
       });
     
       console.log(paths);
     
       return {
         paths,
         fallback: false
       }

  
    }

const Details = ({ nws,relnws }) =>{

  console.log(relnws);
   
  return (
    <>
    <header className="slides position-relative">
     <Header/>
         <div className="col-12 news-banner">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center inner-banner-caption news-inner-title">
                     <h2 className="mb-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                     { nws.heading }
                                           
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <section className="news-wrapper pt-20">
         <div className="container">
            <div className="position-relative"><img className="img-fluid" src="../img/news1.jpg" alt="..." /></div>
            <div className="row">
               <div className="col-md-12">
                  <div className="card-body pl-0">
                 
              <div dangerouslySetInnerHTML={{__html: nws.description}} />
                    
                  </div>
                </div>
            </div>
           
        </div>
        <div className="container pt-50">
           <div className="row ">
  {relnws.slice(0,2).map((rnw, idx)=>(            
<div className="col-md-6">
   <div className="card mb-3">
         <div className="row">
           <div className="col-md-5">
             <img className="img-fluid" src={ bsurl + 'assets/content/img/news/'+ rnw.image } alt="..." />
           </div>
           <div className="col-md-7">
             <div className="card-body">
                <div className="date-block"><span>{ getdtestring(rnw.b_date,'D')}</span><span>{ getdtestring(rnw.b_date,'M')}</span></div>
               <h5 className="card-title">
               { rnw.heading }
               </h5>
               <Link href={{  pathname: '/News/[slug]', query: { slug: rnw.b_slug },}}>
                   <a  className=" bg-transp-btn ripple-surface">Read More<i>
                   <img src="../img/right-arrow-arrow.svg" alt="" /></i></a>
                </Link>   
             </div>
           </div>
         </div>
       </div>
   </div>
   ))}
   
   

           </div>
        </div>
      </section>
       
    </>
  )
}
export default Details;

