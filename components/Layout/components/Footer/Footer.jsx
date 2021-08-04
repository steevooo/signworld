import React, { Component } from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const baseurl = process.env.bseurl;


class Footer extends React.Component {
  constructor(props){
     super(props);

     this.state = {
         fields: {},
         errors: {},
         name: '',
         email: '',
         
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
      if(!fields["name"]){
         formIsValid = false;
         errors["name"] = "Name is required.";
      }

      if(typeof fields["name"] !== "undefined"){
         if(!fields["name"].match("^[A-Za-z _]*[A-Za-z][A-Za-z _]*$")){
            formIsValid = false;
            errors["name"] = "Only letters";
         }        
      }
 
      //Email
      if(!fields["email"]){
         formIsValid = false;
         errors["email"] = "Email is required.";
      }

      if(typeof fields["email"] !== "undefined"){
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
     }  

      if(!fields["job"]){
         formIsValid = false;
         errors["job"] = "Job Title is required.";
      }

      if(!fields["message"]){
         formIsValid = false;
         errors["message"] = "Message is required.";
      }
     
      for (const property in errors) {
         toast.error(`${errors[property]}`);
      } 
      
     //this.setState({errors: errors});
     return formIsValid;
 }
  
 contactSubmit = async(event) => {
   
   event.preventDefault();

      if(this.handleValidation())
      {
         $('.cont-btn').hide();
         $('#spinner').show();
         let apiUrl;
         let fields = this.state.fields;
         
         let formData = new FormData();
         formData.append('inputName', fields['name']);
         formData.append('inputPhone', fields['phone']);
         formData.append('inputEmail', fields['email']);
         formData.append('inputjob', fields['job']);
         formData.append('inputmessage', fields['message']);
       
          const res = await fetch(bsurl+'api/Home', {
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
              $('.cont-btn').show();
              $('#spinner').hide();
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
        
     <section className="form-sec pt-0">
         <div className="container">

            <hr className="bot-top-hr" />
            <div className="row">
               <div className="col-12 mb-3 mb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                  <h2 className="main-title">Let’s talk.</h2>
               </div>
               <div className="col-12 col-md-5 info-sec">
                  <div className="col mb-3 mb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                     <p>Telephone</p>
                     <a href="tel:01244661919">01244 661919</a>
                  </div>
                  <div className="col mb-3 mb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                     <p>Email</p>
                     <a href="mailto:info@signworldgroup.com">info@signworldgroup.com</a>
                  </div>
                  <div className="col mb-3 mb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
                     <p>Addresss</p>
                     <h4>Newgate House <br />
                        Broughton Mills Road, <br />
                        Broughton <br />
                        Chester<br />
                        CH4 0BY
                     </h4>
                  </div>
               </div>
                <form name="contactform" id="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>

               <div className="col-12 col-md-7 form-block" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                  <div className="row row-cols-1 row-cols-md-2">
                     <div className="form-group mb-3 mb-lg-4">
                        <input type="text" className="form-control txt-input" name="name" id="name"  placeholder="Name*" onChange={this.handleChange.bind(this, "name")} />
                        <span style={{color: "red","font-size":"12px"}}>{this.state.errors["name"]}</span>
                     </div>
                     <div className="form-group  mb-3 mb-lg-4">
                        <input type="text" className="form-control txt-input"  name="phone" id="phone"  placeholder="Phone*" onChange={this.handleChange.bind(this, "phone")} />
                     </div>
                  </div>
                  <div className="row">
                     <div className="form-group  mb-3 mb-lg-4">
                        <input type="email" className="form-control txt-input" name="email" id="email"   placeholder="Email Address" onChange={this.handleChange.bind(this, "email")} />
                        <span style={{color: "red","font-size":"12px"}}>{this.state.errors["email"]}</span>
                     </div>
                  </div>
                  <div className="row">
                     <div className="form-group  mb-3 mb-lg-4">
                        <input type="text" className="form-control txt-input" name="job" id="job"  placeholder="Job Title*" onChange={this.handleChange.bind(this, "job")} />
                     </div>
                  </div>
                  <div className="row">
                     <div className="form-group  mb-3 mb-lg-4">
                        <textarea className="form-control" id="message" name="message" placeholder="Message" rows="4" onChange={this.handleChange.bind(this, "message")}></textarea>
                     </div>
                  </div>
                  <div className="row mt-4 mt-lg-5">
                     <div className="col mb-3 mb-lg-4">
                     <span id="spinner" style={{display: "none"}}><i className="fa fa-spin fa-spinner"></i></span>
                        <button type="submit" className="btn btn-primary home-contact-btn rounded-0 cont-btn">Send</button>
                     </div>
                  </div>

               </div>
               </form>

            </div>
         </div>
      </section>
      <section className="copy-right pb-3 pb-lg-4 pt-0">
         <div className="container">
           <hr className="bot-top-hr" />
            <div className="row">
               <div className="col-12 col-lg-9">
                  <p>ISO 9001-2015 Quality Accredited & Audited Company  |  Copyright Signworld Group 2021  |  Privacy Statement.</p>
               </div>
               <div className="col-12 col-lg-3">
                  <ul className="bot-foter-ul d-flex justify-content-center justify-content-lg-end">
                     <li><a href="https://www.facebook.com/signworldgroup/" className="" target="_blank" title="facebook"><img src={baseurl+"img/facebook.png"}/> </a></li>
                     <li><a href="https://www.instagram.com/signworld_group/" className="" target="_blank" title="instagram"><img src={baseurl+"img/instagram.png"}/></a> </li>
                     <li><a href="https://www.linkedin.com/company/71199547/" className="" target="_blank" title="linkedin"><img src={baseurl+"img/linkedin.png"}/></a> </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
      </>
     )
   }
   }
export default Footer