import axios from "axios";
import React, { useEffect, useState, } from "react";
import { Link } from 'react-router-dom';  
import MyCard from "./MyCard";

const Exitance = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.0.15:5000/users").then((resp) => {
      const data = resp.data;
      console.log(data);
      setUsers(data);
    });
  }, []);
  return (
    <>
      <Link to={"/"} className={"btn btn-danger mt-2 m-1"}>
        Back
      </Link>
      <div className="card-container">
        {users.length > 0 ? (
          users.map((user) => <MyCard user={user} key={user.id}/>)
        ) : (
          <>
            <p>No Record Found</p>
          </>
        )}
      </div>
    </>
  );
};

export default Exitance;
