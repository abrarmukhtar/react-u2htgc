const initState = 0;

const AddReducer = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    default:
      return state;
  }
};

export default AddReducer;
