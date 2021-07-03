import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initState, addRecord } from './actions/index';
const ContactForm = props => {
  // const initData = {
  //   fname: '',
  //   lname: '',
  //   fatherName: ''
  // };

  const dispatch = useDispatch();
  const [inputData, setInputData] = useState(initState);

  const inputEvent = e => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value
    });
  };

  // useEffect(() => {
  //   if (props.currentId == '') {
  //     setInputData({ ...initData });
  //   } else {
  //     setInputData({ ...props.fdata[props.currentId] });
  //   }
  // }, [props.currentId, props.fdata]);

  const submitEvent = e => {
    e.preventDefault();
    dispatch(addRecord(inputData));
    // if (inputData.lname == '' || inputData.fname == '') {
    // } else {
    //   props.addorEdit(inputData);
    //   setInputData(initData);
    // }
    // document.getElementById('fname').focus();
  };

  const UpdateRecord = e => {
    e.preventDefault();

    // if (confirm('Do you want to update')) {
    //   props.addorEdit(inputData);
    //   document.getElementById('fname').focus();
    // } else {
    // }
  };

  const clearContant = () => {
    // setInputData(initData);
    // props.setCurrentId('');
  };
  return (
    <form onSubmit={submitEvent} autoComplete="off">
      <div className="col-md-6">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="fname"
          className="form-control"
          id="fname"
          onChange={inputEvent}
          value={inputData.fname}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lname"
          className="form-control"
          id="lname"
          onChange={inputEvent}
          value={inputData.lname}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Father Name</label>
        <input
          type="text"
          name="fatherName"
          className="form-control"
          id="fatherName"
          onChange={inputEvent}
          value={inputData.fatherName}
        />
      </div>

      <div className="col-12">
        <div>
          <input type="submit" className="btn btn-primary" value={'Save'} />
        </div>

        {/* <button className="btn btn-primary" onClick={clearContant}>
          Clear
        </button> */}
      </div>
    </form>
  );
};

export default ContactForm;
