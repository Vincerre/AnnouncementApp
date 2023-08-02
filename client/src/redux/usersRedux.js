// selectors
export const getUser = ({ users }) => users.user;

// actions
const createActionName = (name) => `app/user/${name}`;
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

// action creators
export const logIn = (payload) => ({
  payload,
  type: LOG_IN,
});

export const logOut = (payload) => ({
  payload,
  type: LOG_OUT,
});

const initialState = {
  user: {
    _id: '64c8cbe153e3c9bd7475ebaa',
    login: 'johndoe',
    password: 'testtest',
  },
};

// reducer
const usersReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case LOG_IN:
      return { user: { ...action.payload } };
    case LOG_OUT:
      return { ...statePart, user: null };
    default:
      return statePart;
  }
};

export default usersReducer;
