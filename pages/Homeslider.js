
import React, { Component } from "react";
import Link from 'next/link';
const bsurl = process.env.customurl;



 export default class Slider extends Component {
  constructor(props)
  {
    const bsurl = process.env.customurl;
    
    super(props);
    this.state = {
      items: [],
      url : bsurl+"api/Slider",
       // display:false
      
    };
    // this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
     // this.setState({display:true})
    fetch(this.state.url).then(
      res => res.json()
    ).then(res => {
      this.setState({
        items: res
       
      });
    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    });
  }
  render()
  {
    //const dta = this.state.items;
    const dta = [{"s_id":"8","s_title":"Your sign of success","s_img":"7706bannerbg1.jpg","s_status":"1","s_added":"2021-06-01 02:04:41","s_updated":"2021-06-05 05:13:55","s_desc":"<p>UK Recognised, Quality &amp; Safety Accredited Sign Production<br \/>\nCompany with over 25 years experience in business<\/p>","s_link":"www.google.in"},{"s_id":"9","s_title":"Your sign of success","s_img":"4650bannerbg1.jpg","s_status":"1","s_added":"2021-06-03 04:20:07","s_updated":"2021-06-05 05:14:51","s_desc":"<p>UK Recognised, Quality &amp; Safety Accredited Sign Production<br \/>\nCompany with over 25 years experience in business<\/p>","s_link":"www.google.in"},{"s_id":"10","s_title":"Your sign of success","s_img":"7616bannerbg1.jpg","s_status":"1","s_added":"2021-06-03 04:20:15","s_updated":"2021-06-05 05:15:30","s_desc":"<p>UK Recognised, Quality &amp; Safety Accredited Sign Production<br \/>\nCompany with over 25 years experience in business<\/p>","s_link":"www.google.in"}]
    console.log(dta);
      return (

             
     <div id="carouselBasicExample" className="carousel slide carousel-fade"data-mdb-ride="carousel">
             <div className="carousel-indicators">
             {dta.map((sldr, idx)=>{  
              
             return(        
               <>   
               <button type="button" data-mdb-target="#carouselBasicExample" className={ (idx=='0'?'active':'')} aria-current={ (idx=='0'?'true':'')}  data-mdb-slide-to={idx}   aria-label= {"Slide "+idx +1} ></button>
                </>
             )
               })}
               
               
            </div>
           <div className="carousel-inner">

                 {dta.map((sldr, idx)=>{  
              
             return(        
               <>   
              <div className={ (idx=='0'?"carousel-item active":"carousel-item")}>
                  <img src={ bsurl + "assets/content/assets/img/slider/"+ sldr.s_img }  className="d-block w-100" alt="..." />
                  <div className="carousel-caption vdo-carousel-caption mb-5">
                     <div className="animated fadeInDown position-absolute carousel-custome">
                        <div className="container">
                           <div className="row">
                              <div className="col-12 text-center">
                                 <h2><div dangerouslySetInnerHTML={{__html: sldr.s_title }} />
                                 </h2>
                                 <p className="my-2 my-md-4"><div dangerouslySetInnerHTML={{__html: sldr.s_desc }} />
                                 </p>
                                 <Link href="/Contact">
                                 <button className="btn btn-slider mt-2 mt-md-3">get a free quote</button>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               </>
             )
               })}
             
            </div>
            </div>
    
            
      
      );
    }
 }