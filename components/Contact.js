import React from 'react'
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';

function Contact() {
function sendEmail(e) {
e.preventDefault();

emailjs.sendForm('service_uk6ave7', 'template_gg0zkac', e.target, 'user_1EK9vSimilqCrZ1Ic4JsY')
.then((result) => {
alert("email sent Our HR Lizzy will contact you soon ,Thank You");
}, (error) => {
console.log(error.text);
});
e.target.reset()

}
return (
<div className="contact">

<div className="contact__background">   
<div className="contact_content">
<h5>CONTACT OUR TEAM</h5>
<div className="contact__head">
<div className="contact__head1">
<p>App Development</p>
<p>Custom Development</p>
</div>
<div className="contact__head1">
<p>Workshop</p>
<p>E-commerce</p>
</div>
<div className="contact__head1">
<p>Partnership</p>
<p>Others</p>
</div>
</div>
<div >
<form  onSubmit={sendEmail}>
<div className="contact__inputs">
<TextField
required
id="outlined-required"
label="First Name"
name="f_name"
fullWidth
variant="outlined"
size="small"
/>
<TextField
required
id="outlined-required"
label="Last Name"
name="L_name"
fullWidth
variant="outlined"
size="small"
/>
<TextField
required
id="outlined-required"
label=" Email"
fullWidth
variant="outlined"
name="email"
size="small"
/>
<TextField
required
id="outlined-required"
label="Phone"
name="contact"
fullWidth
variant="outlined"
size="small"
/>
<TextField
required
id="outlined-required"
label="Country"
name="country"
fullWidth
variant="outlined"
size="small"
/>
<TextField
required
id="outlined-required"
label="How can we help you?"
fullWidth
variant="outlined"
name="message"
size="medium"
/>

</div>

<div className="contact__footer">
<p>By sending this form I confirm that I have read and understand PBL </p>
<h6>Pivacy Policy</h6>
</div>
<div className="contact__btn">
    <h3></h3>
<input type="submit"value="SEND"/>
</div>
</form>
</div>
<div className="contact__fottercontent">
<div className="contact__fottercontent_head">
<p>What Happens Next?</p>
</div>     
<div className="contact__fottercontent_con">
<div className="contact__fottercontent_con_1">
<h5>1</h5>
<p>Our sales manager reaches out to you within a few seconds</p>
</div> 
<div className="contact__fottercontent_con_1">
<h5>2</h5>
<p>Our sales manager reaches out to you within a few seconds</p>
</div> 
<div className="contact__fottercontent_con_1">
<h5>3</h5>
<p>Our sales manager reaches out to you within a few seconds</p>
</div>     
</div>      
</div>
</div>   
</div>
</div>
)
}

export default Contact
