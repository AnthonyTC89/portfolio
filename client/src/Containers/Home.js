import React from 'react';
// import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import Navbar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap-grid.css';
import Profile from '../Components/Profile';

const Home = () => (
  <>
    <header><Navbar /></header>
    <main>
      <Profile />
    </main>
    <footer>footer</footer>
  </>
);


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
