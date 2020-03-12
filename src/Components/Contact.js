import React from 'react';
import sgMail from '@sendgrid/mail';
import { Social } from '../Icons.json';
import { contact } from '../Profile.json';
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      text: '',
      btnLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { to, text } = this.state;
    const msg = {
      to,
      from: 'ptonyptc@gmail.com',
      subject: 'Portfolio Reply',
      text,
    };
    this.setState({
      btnLoading: true,
    });
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgMail.send(msg)
      .then(() => {
        this.setState({
          to: '',
          text: '',
        });
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('Error');
      })
      .finally(() => {
        this.setState({
          btnLoading: false,
        });
      });
  }

  render() {
    const { to, text, btnLoading } = this.state;
    return (
      <div className="container">
        <div className="row row-contact">
          <section className="col-12 col-sm-6">
            <h2>{contact.title}</h2>
            <img src={Social.bigEmail} alt="bigEmail-icon" />
            <h6>{contact.subTitle}</h6>
            <p>{contact.text}</p>
          </section>
          <section className="col-12 col-sm-6 form-section">
            <form onSubmit={!btnLoading ? this.handleSubmit : null}>
              <input
                className="form-control"
                onChange={this.handleChange}
                type="email"
                placeholder="your email here"
                value={to}
                name="to"
                required
              />
              <textarea
                className="form-control"
                onChange={this.handleChange}
                placeholder="your message here"
                value={text}
                name="text"
                minLength="4"
                rows="4"
                required
              />
              <button className="btn btn-primary" type="submit">
                {btnLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;
