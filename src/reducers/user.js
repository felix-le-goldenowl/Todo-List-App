import { LOGIN } from 'constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = action;
      if (email === `user@mail.com` && password === `123456`) {
        localStorage.setItem('accessToken', 'accessToken');
        return { loggedIn: true };
      }
      return { loggedIn: false };
    }
    default:
      return state;
  }
};

export default user;
