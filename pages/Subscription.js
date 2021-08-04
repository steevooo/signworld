import React, { Component } from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const bsurl = process.env.customurl;


class Subscription extends React.Component {
  constructor(props){
     super(props);

     this.state = {
         fields: {},
         errors: {},
         semail: '',
         
     }
  
  }


  handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

     
 
      //Email
      if(!fields["semail"]){
         formIsValid = false;
         errors["semail"] = "Email is required.";
      }

      if(typeof fields["semail"] !== "undefined"){
         let lastAtPos = fields["semail"].lastIndexOf('@');
         let lastDotPos = fields["semail"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["semail"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["semail"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["semail"] = "Email is not valid";
          }
     }  

     
      for (const property in errors) {
         toast.error(`${errors[property]}`);
      } 
      
     //this.setState({errors: errors});
     return formIsValid;
 }
  
 subscriptionSubmit = async(event) => {
   event.preventDefault();

      if(this.handleValidation())
      {
         $('.subs-btn').hide();
         $('#spinner2').show();
         let apiUrl;
         let fields = this.state.fields;
         
         let formData = new FormData();
         formData.append('inputSemail', fields['semail']);
        
          const res = await fetch(bsurl+'api/News', {
            method: 'POST',
            headers: {
                   'Accept': 'application/json'
            },
            body: formData,
          })  
                   
          const result = await res.json()
          console.log(result.sts);
            if(result.sts=='1')
            {
              
              toast.success(result.msg);
              $('.subs-btn').show();
              $('#spinner2').hide();
              document.getElementById("contactform").reset();
            }
            else if(result.sts=='2')
            {
              toast.error(result.msg)
                
            }
      

      }else{

       //  alert("Form has errors.")
      }

  }

  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }
  render(){
      return (
      <>
      <ToastContainer />
        
     <div className="card bg-dark text-white img-card" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
                        <img src="img/Portfolio-bg.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay p-3 p-lg-4 d-flex justify-content-center align-items-center">
                          
                           <div className="w-100">
                              <p className="card-text mb-3 mb-xl-5 mb-lg-4">Sign up for our Newsletter <br/>
                                 and get all the latest offers
                              </p>
                              <form name="contactform" id="contactform" className="contactform" onSubmit= {this.subscriptionSubmit.bind(this)}>
                              <div className="input-group mt-3">
                                 <input type="text" className="form-control custom-send d-flex" name="semail" id="semail" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange.bind(this, "semail")} />
                                 
                                 <button className="btn input-group-append d-flex justify-content-center align-items-center">
                                 <span id="spinner2" style={{display: "none"}}><i className="fa fa-spin fa-spinner"></i></span>
                                 <span className="input-group-text" id="basic-addon2"><img src="img/send-email-ico.svg" className="subs-btn" alt="" /></span>
                                 </button>
                              </div>
                              </form>

                           </div>

                        </div>
                     </div>
      </>
     )
   }
   }
export default Subscription