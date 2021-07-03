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
    case 'delete':
      const newlist = state.newData.filter(elm => elm.id !== action.payload);

      return state;
    default:
      return state;
  }
};

export default formReducer;
