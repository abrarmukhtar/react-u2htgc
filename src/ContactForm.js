import React, { useState, useEffect } from 'react';

const ContactForm = props => {
  const initData = {
    fname: '',
    lname: '',
    fatherName: ''
  };
  const [inputData, setInputData] = useState(initData);

  const inputEvent = e => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value
    });
  };

  useEffect(() => {
    if (props.currentId == '') {
      setInputData({ ...initData });
    } else {
      setInputData({ ...props.fdata[props.currentId] });
    }
  }, [props.currentId, props.fdata]);

  const submitEvent = e => {
    e.preventDefault();
    if (inputData.lname == '' || inputData.fname == '') {
    } else {
      props.addorEdit(inputData);
      setInputData(initData);
    }
    document.getElementById('fname').focus();
  };

  const UpdateRecord = e => {
    e.preventDefault();
    if (confirm('Do you want to update')) {
      props.addorEdit(inputData);
      document.getElementById('fname').focus();
    } else {
    }
  };

  const clearContant = () => {
    setInputData(initData);
    props.setCurrentId('');
  };
  return (
    <form onSubmit={props.currentId == '' ? submitEvent : UpdateRecord}>
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
        {props.currentId == '' ? (
          <input
            type="submit"
            className="btn btn-primary"
            value={props.currentId == '' ? 'Save' : 'Update'}
          />
        ) : (
          <div>
            <input
              type="submit"
              className="btn btn-primary"
              value={props.currentId == '' ? 'Save' : 'Update'}
            />
          </div>
        )}
        <button className="btn btn-primary" onClick={clearContant}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
