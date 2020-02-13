import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
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
    const { images } = this.props;
    return (
      <TransitionGroup className="slide-container" onClick={this.handleClick}>
        <CSSTransition key={uuidv4()} timeout={1000} classNames="slide">
          <img className="img-slide" src={images[currentImage]} alt="img-screnshot" />
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

Slider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Slider;
