import { Contact } from "./Contact.jsx";
export function FavoriteContacts(props) {
  return (
    <div
      className="col-12 p-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">Favorites</div>

      <div className="p-2">
        {props.favoriteContactsList.map((contact, index) => (
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
}

{
  /* <button class="btn btn-primary btn-sm m-1"><i class="bi bi-star-fill"></i></button> */
}
