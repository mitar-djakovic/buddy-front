const initialState = {
  loading: false,
  error: false,
  message: '',
  token: '',
  adminId: '',
  lastActiveProject: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
