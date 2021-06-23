import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import firebasedb from './fire';

const Contacts = () => {
  const [fdata, setfData] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const addorEdit = obj => {
    if (currentId == '') {
      setfData([...fdata, obj]);
    } else {
      fdata[currentId] = obj;
      setCurrentId('');
    }
  };

  const deleteRecord = id => {
    if (confirm('Do you want to delete')) {
      setfData(
        fdata.filter((array, index) => {
          return index != id;
        })
      );
    }
  };

  return (
    <>
      <ContactForm {...{ addorEdit, currentId, fdata, setCurrentId }} />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">FatherName</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {Object.keys(fdata).map(index => {
          return (
            <tbody key={index}>
              <tr>
                <td scope="row">{fdata[index].fname}</td>
                <td scope="row">{fdata[index].lname}</td>
                <td scope="row">{fdata[index].fatherName}</td>
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
                  <a
                    href="#"
                    onClick={() => {
                      return deleteRecord(index);
                    }}
                  >
                    Delete
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
