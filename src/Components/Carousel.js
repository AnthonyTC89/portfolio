import React from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

class Carousel extends React.Component {
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
      <div
        className="slider"
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex={0}
      >
        <img className="img-project" src={images[currentImage]} alt="img-screnshot" />
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
