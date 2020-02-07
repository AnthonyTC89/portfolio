import React from 'react';
// import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import Navbar from '../Components/Navbar';
import defaultProfile from '../defaultProfile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }

  componentDidMount() {
    this.setState({
      profile: defaultProfile,
    });
  }

  render() {
    const { profile } = this.state;
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          {profile.name}
        </main>
        <footer>
          footer
        </footer>
      </>
    );
  }
}

// Home.propTypes = {
//   session: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   session: state.session,
// });

// const mapDispatchToProps = (dispatch) => ({
// });

// const HomeWrapper = connect(mapStateToProps, null)(Home);

// export default HomeWrapper;
export default Home;
