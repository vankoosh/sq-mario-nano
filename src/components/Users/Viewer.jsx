import User from "../User/User";
import Portfolios from "../Portfolios/Portfolios";
import "./Viewer.css";
import { useState } from "react";
import userListJson from "../../data.json";

export default function Viewer() {
  const res = JSON.stringify(userListJson);
  const arr = JSON.parse(res);

  const [selectedRadioBtn, setSelectedRadioBtn] = useState("name");
  const [selectedUser, setSelectedUser] = useState();

  const handleRadioClick = (e) => {
    setSelectedRadioBtn(e.currentTarget.value);
  };

  const handleUserClick = (selectedUser) => {
    setSelectedUser(selectedUser);
  };

  // const selectedUserJson = arr.find((customer) => {
  //   return customer.clientId === selectedUser;
  // });

  return (
    <div className="container">
      <main className="users-sort">
        <form action="/">
          <input
            type="radio"
            name="sort"
            value="name"
            checked={selectedRadioBtn === "name" ? true : false}
            onChange={handleRadioClick}
          />
          Name
          <input
            type="radio"
            name="sort"
            value="risk"
            checked={selectedRadioBtn === "risk" ? true : false}
            onChange={handleRadioClick}
          />
          Risk Profile
          <input
            type="radio"
            name="sort"
            value="worth"
            checked={selectedRadioBtn === "worth" ? true : false}
            onChange={handleRadioClick}
          />
          Net Worth
          <input
            type="radio"
            name="sort"
            value="restriction"
            checked={selectedRadioBtn === "restriction" ? true : false}
            onChange={handleRadioClick}
          />
          Restriction Status
          <input
            type="radio"
            name="sort"
            value="gain"
            checked={selectedRadioBtn === "gain" ? true : false}
            onChange={handleRadioClick}
          />
          Capital Gain
        </form>

        {arr.map((user) => {
          return (
            <User
              props={user}
              key={user.clientId}
              handleUserClick={handleUserClick}
            />
          );
        })}
      </main>

      <aside>
        <h1>CUSTOMER PORTFOLIOS:</h1>
        <Portfolios props={selectedUser} />
      </aside>
      <aside>

      </aside>
    </div>
  );
}
