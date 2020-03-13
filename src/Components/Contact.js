import React from 'react';
import axios from 'axios';
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
      msg: '',
      status: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { to, text } = this.state;
    const params = { to, text };
    this.setState({
      btnLoading: true,
      msg: '',
      status: '',
    });

    await axios.post('sendEmail', { params }, { timeout: 5000 })
      .then((res) => {
        this.setState({
          to: '',
          text: '',
          btnLoading: false,
          msg: 'Email sent.',
          status: res.status,
        });
      })
      .catch(() => {
        this.setState({
          btnLoading: false,
          msg: 'Error, check your connection.',
        });
      });
  }

  render() {
    const { to, text, btnLoading, msg, status } = this.state;
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
              <small className={status === 200
                ? 'msg-contact text-success'
                : 'msg-contact text-danger'}
              >
                {msg}
              </small>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;
