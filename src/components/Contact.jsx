import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqeyqjv");
  if (state.succeeded) {
    return alert("message send successfully") 
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
    <h1 id="contacti">CONTACT-US</h1>
     <div className="whole-form">  <div> 
      </div> 
     <div className="f"> 
     <div className="form-group">
     <label htmlFor="email">Email Address</label>
     <input
       id="email"
       type="email"
       name="email"
       placeholder="Your email address"
       required
     />
     <ValidationError prefix="Email" field="email" errors={state.errors} />
   </div>
   <div className="form-group">
     <label htmlFor="message">Message</label>
     <textarea
       id="message"
       name="message"
       placeholder="Your message"
       required
     />
     <ValidationError
       prefix="Message"
       field="message"
       errors={state.errors}
     />
   </div>
   <button type="submit" disabled={state.submitting}>
     Submit
   </button> </div>
  
  </div>
    </form>
  );
}

function App() {
  return (
  
      <ContactForm />
    
  );
}

export default App;
