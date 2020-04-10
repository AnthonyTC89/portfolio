import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import screen from '../Images/screen.jpg';
import './Slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  changeImage() {
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage === 1 ? 0 : 1,
    });
  }

  handleKeyUp(event) {
    if (event.keyCode === 37 || event.keyCode === 39) {
      this.changeImage();
    }
  }

  handleClick() {
    this.changeImage();
  }

  render() {
    const { currentImage } = this.state;
    const { images, mobile } = this.props;
    return (
      <TransitionGroup className="slide-container" onClick={this.handleClick}>
        <CSSTransition key={uuidv4()} timeout={1000} classNames="slide">
          <img
            className={mobile ? 'img-slide-mobile' : 'img-slide'}
            src={images[currentImage]}
            alt="img-screnshot"
          />
        </CSSTransition>
        {mobile ? null : <img className="img-screen" src={screen} alt="img-scren" />}
      </TransitionGroup>
    );
  }
}

Slider.propTypes = {
  images: PropTypes.array.isRequired,
  mobile: PropTypes.bool.isRequired,
};

export default Slider;
