import React from "react";
import axios from "axios";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: "",
        email: "",
        message: "",
      },
      isSubmitting: false,
      isError: false,
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });
    try {
      const { data } = await axios.post("https://formspree.io/mdoodqpy", {
        ...this.state.values,
      });
    } catch (err) {
      console.log(err);
    }

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: { email: "", name: "", message: "" },
        }),
      1600
    );
  };

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="name">
            Namn
            <input
              type="name"
              name="name"
              id="name"
              value={this.state.values.name}
              onChange={this.handleInputChange}
              title="Name"
              required
            />
          </label>
          <label htmlFor="email">
            E-post
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.values.email}
              onChange={this.handleInputChange}
              title="Email"
              required
            />
          </label>
          <label htmlFor="message">
            Meddelande
            <textarea
              name="message"
              rows="10"
              cols="30"
              id="message"
              value={this.state.values.message}
              onChange={this.handleInputChange}
              title="password"
              required
            >
              {this.state.values.message}
            </textarea>
          </label>
          <button type="submit">Skicka meddelande</button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
        </div>
      </div>
    );
  }
}

export default ContactForm;
