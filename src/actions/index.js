export const initState = {
  fname: '',
  lname: '',
  fatherName: ''
};

export const addRecord = data => {
  return {
    type: 'add',
    payload: { id: new Date().getTime().toString(), data: data }
  };
};
