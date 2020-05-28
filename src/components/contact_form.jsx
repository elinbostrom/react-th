import React from "react";

const defaultState = {
  sendStatus: "",
  name: "",
  email: "",
  message: "",
  nameErr: "",
  emailErr: "",
  messageErr: "",
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  setInputs(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let nameErr = "";
    let emailErr = "";
    let messageErr = "";

    // Valid letters
    const validLetters = /^[a-zA-ZäöåÄÖÅ\s-é]+$/;

    if (
      !this.state.name ||
      (this.state.name.length < 2 && this.state.name.length < 50) ||
      !this.state.name.match(validLetters)
    ) {
      nameErr = "Namnet måste vara mellan 2-50 bokstäver";
    }

    if (!this.state.email.includes("@")) {
      emailErr = "Felaktig e-postadress";
    }

    if (!this.state.message) {
      messageErr = "Du måste skriva ett meddelande";
    }

    if (emailErr || nameErr || messageErr) {
      this.setState({ emailErr, nameErr, messageErr });
      return false;
    }

    return true;
  };

  noteMessage = () => {
    return '<strong className="note__thankyou">Tack för ditt meddelande</strong>';
  };

  sendMessage(e) {
    e.preventDefault();
    const isValidated = this.validate();

    if (isValidated) {
      const formEl = e.target;
      const xhr = new XMLHttpRequest();
      const formInfo = new FormData(formEl);

      xhr.open(formEl.method, formEl.action);
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          this.setState(defaultState);
          this.setState({ sendStatus: "send" });
        } else {
          this.setState({ sendStatus: "error" });
        }
      };

      xhr.send(formInfo);
    }
  }

  render() {
    const { sendStatus } = this.state;
    return (
      <form
        action="https://formspree.io/mdoodqpy"
        method="POST"
        onSubmit={this.sendMessage.bind(this)}
      >
        <label htmlFor="name">
          Namn
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.setInputs.bind(this)}
          />
          <strong className="error__msg">{this.state.nameErr}</strong>
        </label>
        <label htmlFor="email">
          E-post
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.setInputs.bind(this)}
          />
          <strong className="error__msg">{this.state.emailErr}</strong>
        </label>
        <label htmlFor="name">
          Meddelande
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={this.state.message}
            onChange={this.setInputs.bind(this)}
          ></textarea>
          <strong className="error__msg">{this.state.messageErr}</strong>
        </label>
        <button>Skicka meddelande</button>
        {sendStatus === "send" && (
          <strong className="note__thankyou">Tack för ditt meddelande</strong>
        )}
        {sendStatus === "error" && (
          <strong className="note__error">Oj, nu blev det fel!</strong>
        )}
      </form>
    );
  }
}

export default ContactForm;
