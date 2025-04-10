import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contactsData, onDeleteContact }) => {
  return (
    <ul className={s.ContactList}>
      {contactsData.map(({ id, ...item }) => {
        return (
          <li key={id}>
            <Contact id={id} {...item} onDelete={onDeleteContact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
