import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRecord } from './actions/index';
import firebasedb from './fire';

const Contacts = () => {
  const [currentId, setCurrentId] = useState('');

  const formData = useSelector(state => state.formReducer.newData);

  const dispatch = useDispatch();

  console.log(formData);
  const addorEdit = obj => {};

  return (
    <>
      <ContactForm />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">FatherName</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {formData.map((elm, index) => {
          return (
            <tbody key={elm.id}>
              <tr>
                <td scope="row">{elm.data.fname}</td>
                <td scope="row">{elm.data.lname}</td>
                <td scope="row">{elm.data.fatherName}</td>
                <td>
                  <a
                    href="#"
                    onClick={() => {
                      return setCurrentId(index);
                    }}
                  >
                    Edit
                  </a>

                  <br />
                  <a href="#" onClick={() => dispatch(deleteRecord(elm.id))}>
                    Delete {elm.id}
                  </a>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Contacts;
