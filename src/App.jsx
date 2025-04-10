import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const INITIAL_CONTACTS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contactsData, setContacts] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("contacts-data")) || INITIAL_CONTACTS
      );
    } catch (error) {
      console.log(error);
      return INITIAL_CONTACTS;
    }
  });

  useEffect(() => {
    localStorage.setItem("contacts-data", JSON.stringify(contactsData));
  }, [contactsData]);
  const [searchData, setSearchData] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleSearchInput = (event) => {
    setSearchData(event.target.value);
  };

  const findContact = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(searchData.toLowerCase())
  );

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchData={searchData} onSearchInput={handleSearchInput} />
      <ContactList contactsData={findContact} onDeleteContact={deleteContact} />
    </Container>
  );
};

export default App;
