import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUsers, retrieveUsersLocal } from "../actions/userAction";
import { Link } from "react-router-dom";

const UserList = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(users);

    dispatch(retrieveUsers());
  }, []);
  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  };

  return (
    <div className='list row'>
      <div className='col-md-6'>
        <h4>Users List</h4>

        <ul className='list-group'>
          {users &&
            users.map((user, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveUser(user, index)}
                key={index}
              >
                {user.name}
              </li>
            ))}
        </ul>
      </div>
      <div className='col-md-6'>
        {currentUser ? (
          <div>
            <h4>Name</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentUser.name}
            </div>
            <div>
              <label>
                <strong>Username:</strong>
              </label>{" "}
              {currentUser.username}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentUser.email}
            </div>

            <Link
              to={"/tutorials/" + currentUser.id}
              className='badge badge-warning'
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
