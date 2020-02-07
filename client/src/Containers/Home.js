import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import defaultProfile from '../defaultProfile.json';

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
    const { session } = this.props;
    return (
      <body>
        <header>
          {session.isLoggedIn ? 'Logged' : 'no Logged'}
        </header>
        <main>
          {profile.name}
        </main>
        <footer>
          footer
        </footer>
      </body>
    );
  }
}

Home.propTypes = {
  session: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  session: state.session,
});

// const mapDispatchToProps = (dispatch) => ({
// });

const HomeWrapper = connect(mapStateToProps, null)(Home);

export default HomeWrapper;
