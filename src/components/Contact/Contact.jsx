import React from "react";
import s from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={s.contactWrapper}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
