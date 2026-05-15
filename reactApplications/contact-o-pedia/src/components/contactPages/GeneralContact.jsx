import { Contact } from "./Contact.jsx";
const GeneralContact = (props) => {
  return (
    <div
      className="col-12 p-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">General Contact</div>

      <div className="p-2">
        {props.generalContactList.map((contact, index) => (
          <Contact
            contactProp={contact}
            key={index}
            handleFavouriteToggle={props.handleFavouriteToggle}
            deleteContact={props.deleteContact}
            updateContact={props.updateContact}
          ></Contact>
        ))}
      </div>
    </div>
  );
};

export default GeneralContact;
