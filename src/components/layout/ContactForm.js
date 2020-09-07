import React from "react";

function ContactForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="fullname">Full Name (required)</label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address (required)</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="issue">Explain your issue</label>
        <textarea
          className="form-control"
          id="issue"
          rows={3}
          defaultValue={""}
        />
      </div>
      <div className="form-group">
        <a className="btn btn-primary" href="#" role="button">
          Send
        </a>
      </div>
    </form>
  );
}

export default ContactForm;
