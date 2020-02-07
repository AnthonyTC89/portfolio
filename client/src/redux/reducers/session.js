const defaultSession = {
  isLoggedIn: false,
};

const session = (state = defaultSession, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: true };
    case 'LOGOUT':
      return { isLoggedIn: false };
    default:
      return state;
  }
};

export default session;
