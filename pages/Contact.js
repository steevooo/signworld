import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const bsurl = process.env.customurl;


class Contact extends React.Component {
  constructor(props){
     super(props);

     this.state = {
         fields: {},
         errors: {},
         cname: '',
         cemail: '',
         
     }
  
  }
  toggleChange = (e) => {
    
   this.setState({
     isChecked: !this.state.isChecked,
     options: e.currentTarget.value
   });
 }

  handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Name
      if(!fields["cname"]){
         formIsValid = false;
         errors["cname"] = "Name is Required.";
      }

      if(typeof fields["cname"] !== "undefined"){
         if(!fields["cname"].match("^[A-Za-z _]*[A-Za-z][A-Za-z _]*$")){
            formIsValid = false;
            errors["cname"] = "Only letters";
         }        
      }
 
      //Email
      if(!fields["cemail"]){
         formIsValid = false;
         errors["cemail"] = "Email is Required.";
      }

      if(typeof fields["cemail"] !== "undefined"){
         let lastAtPos = fields["cemail"].lastIndexOf('@');
         let lastDotPos = fields["cemail"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["cemail"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["cemail"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["cemail"] = "Email is not valid";
          }
     }  

     if(!fields["cmessage"]){
         formIsValid = false;
         errors["cmessage"] = "Message is Required.";
      }
      
      //toast.error(errors);
      console.log(errors);
      for (const property in errors) {
         toast.error(`${errors[property]}`);
      }
    // this.setState({errors: errors});
     return formIsValid;
 }
  
 cSubmit = async(event) => {
   event.preventDefault();

      if(this.handleValidation())
      {
         $('.cnt-btn').hide();
         $('#spinner1').show();
         let apiUrl;
         let fields = this.state.fields;
         
         let formData = new FormData();
         formData.append('cnName', fields['cname']);
         formData.append('cnPhone', fields['cphone']);
         formData.append('cnEmail', fields['cemail']);
         formData.append('cnMessage', fields['cmessage']);
       
          const res = await fetch(bsurl+'api/Contact', {
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
              $('.cnt-btn').show();
              $('#spinner1').hide();
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
     <header className="slides position-relative">
     <Header/>
     <div className="col-12 news-banner">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center inner-banner-caption news-inner-title">
                  <h2 className="mb-0 aos-init aos-animate" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">Have an <br />enquiry?</h2>

                 
                  </div>
               </div>
            </div>
         </div>
      </header>
 
         <div className="contact_form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form_container">
                            <div className="contact_form_title">Fill out the form below to to contact our team.</div>
                            <form  name="cform" id="cform" onSubmit= {this.cSubmit.bind(this)} >
                                <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                               
                                 <input type="text" id="cname" name="cname" className="contact_form_name input_field" placeholder="Your name"  onChange={this.handleChange.bind(this, "cname")}  /> 
                                 <span style={{color: "red","font-size":"12px"}}>{this.state.errors["cname"]}</span>
                               
                                
                                 <input type="text" id="cemail" name="cemail" className="contact_form_email input_field" placeholder="Email"  onChange={this.handleChange.bind(this, "cemail")}  /> 
                                 <span style={{color: "red","font-size":"12px"}}>{this.state.errors["cemail"]}</span>
                                
                                 <input type="text" id="cphone" name="cphone" className="contact_form_phone input_field" placeholder="Phone number" onChange={this.handleChange.bind(this, "cphone")} /> </div>
                                <div className="contact_form_text"> 
                                <textarea id="contact_form_message" className="text_field contact_form_message" id="cmessage" name="cmessage" rows="4" placeholder="Message"  onChange={this.handleChange.bind(this, "cmessage")} ></textarea> </div>
                                <div className="contact_form_button">
                                 <span id="spinner1" style={{display: "none"}}><i class="fa fa-spin fa-spinner"></i></span>
                                 <button type="submit" className="btn btn-primary home-contact-btn cnt-btn" >Send Message</button>
                                  </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-20">
               <div className="row">
                   <div className="col-lg-10 offset-lg-1">
                       <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                          
                           <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                               <div className="contact_info_image"><img src="img/call.gif" alt="" /></div>
                               <div className="contact_info_content">
                                   <div className="contact_info_title">Phone</div>
                                   <div className="contact_info_text"><a href="tel:01244 661919">01244 661919</a> </div>
                               </div>
                           </div> 
                           <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                               <div className="contact_info_image"><img src="img/message-.gif" alt="" /></div>
                               <div className="contact_info_content">
                                   <div className="contact_info_title">Email</div>
                                   <div className="contact_info_text"><a href="mailto:info@signworldgroup.com">info@signworldgroup.com</a> </div>
                               </div>
                           </div> 
                           <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                               <div className="contact_info_image"><img src="img/map.gif" alt="" /></div>
                               <div className="contact_info_content">
                                   <div className="contact_info_title">Address</div>
                                   <div className="contact_info_text">Newgate House<br/>
                                    Broughton Mills Road<br/>
                                    Broughton, Chester, CH4 0BY
                             
                                    </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
         
        </div>
         
         <div className="contact_info">
         
        </div> 

   </>
  )
}
}
export default Contact
