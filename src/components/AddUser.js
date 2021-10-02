import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/userAction";

const AddTutorial = () => {
  const initialUserState = {
    id: null,
    name: "",
    username: "",
    email: "",
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    const { name, username, email } = user;

    dispatch(createUser(name, username, email))
      .then((data) => {
        setUser({
          id: data.id,
          name: data.name,
          username: data.username,
          email: data.email,
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
    <div className='submit-form'>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group'>
            <label htmlFor='title'>Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              required
              value={user.name}
              onChange={handleInputChange}
              name='name'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              required
              value={user.username}
              onChange={handleInputChange}
              name='username'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Email</label>
            <input
              type='text'
              className='form-control'
              id='email'
              required
              value={user.email}
              onChange={handleInputChange}
              name='email'
            />
          </div>
          <button onClick={saveUser} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
