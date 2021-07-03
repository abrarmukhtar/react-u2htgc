export const initState = {
  newData: []
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      const { id, data } = action.payload;
      return {
        ...state,
        newData: [
          ...state.newData,
          {
            id: id,
            data: data
          }
        ]
      };
    default:
      return state;
  }
};

export default formReducer;
