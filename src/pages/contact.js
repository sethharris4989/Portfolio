import React, { useState } from "react"
import axios from "axios";
import { Link } from "gatsby"

const ContactPage = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/d89386a9-8984-4d5b-9549-7e6495a2b445",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <section className="contact-section">
      <h1 className="headline">Contact</h1>
      <div className="container">
        <form onSubmit={handleOnSubmit}>
          <input type="text" name="name" placeholder="Name" required="required" />
          <input type="email" name="email" aria-describedby="emailHelp" placeholder="Email Address" />

          <textarea type="text" name="message" placeholder="Your Message" required="required" />
          <div className="submit">
            <button type="submit" className="btn" disabled={serverState.submitting}>Submit</button>
          </div>

          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;