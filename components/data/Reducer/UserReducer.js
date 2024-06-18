export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "GET_USER":
      return {
        user: payload,
      };
    case "SET_USER":
      return {
        user: payload,
      };
  }
};
