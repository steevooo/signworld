import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
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
export const getServerSideProps = async () => 
{
   const res = await fetch(bsurl+'api/News');
   const data = await res.json();
   return {
      props : { nws :  data }
   }
}
const News = ( { nws }) =>{
// export default function Solutions() {
   console.log(nws);
  return (
   <>
   <header className="slides position-relative">
     <Header/>
         <div className="col-12 news-banner">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center inner-banner-caption">
                     <h2 className="mb-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">knowledge of
                        <br />
                        current affairs
                      
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <section className="news-wrapper pt-20">
         <div className="container">
            <div className="row">
{nws.map((nw, idx)=>(   
<div className="col-md-6">
<div className="card mb-3">
      <div className="row">
        <div className="col-md-5 col-12">
          <img className="img-fluid" src={ bsurl + 'assets/content/img/news/'+ nw.image } alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
             <div className="date-block"><span>{ getdtestring(nw.b_date,'D') }</span><span>{ getdtestring(nw.b_date,'M') }</span></div>
            <h5 className="card-title"><a href="#"> { nw.heading }</a></h5>
            <Link href={{  pathname: '/News/[slug]', query: { slug: nw.b_slug },}}>
                <a  className="bg-transp-btn ripple-surface">Read More<i><img src="img/right-arrow-arrow.svg" alt="" /></i></a>
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
export default News;
