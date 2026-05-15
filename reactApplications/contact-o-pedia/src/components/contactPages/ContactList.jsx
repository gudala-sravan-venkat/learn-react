import { useState } from "react";
import { FavoriteContacts } from "./FavoriteContact";
import GeneralContact from "./GeneralContact.jsx";
import AddContact from "./AddContact.jsx";
import {AddRandomContact} from "./AddRandomContact.jsx"

export const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: "Sravan Gudala",
      phone: "9876543210",
      email: "sravan@gmail.com",
      isFavourite: true,
    },
    {
      id: 2,
      name: "John Doe",
      phone: "9123456780",
      email: "john@example.com",
      isFavourite: false,
    },
    {
      id: 3,
      name: "Alice Smith",
      phone: "9988776655",
      email: "alice@example.com",
      isFavourite: true,
    },
    {
      id: 4,
      name: "Michael Johnson",
      phone: "9001122334",
      email: "michael@example.com",
      isFavourite: false,
    },
    {
      id: 5,
      name: "Emma Watson",
      phone: "9556677889",
      email: "emma@example.com",
      isFavourite: true,
    },
  ];
  const [contactList, setContactList] = useState(contacts);
  function handleFavouriteToggle(contact) {
    setContactList((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === contact.id) {
          return { ...obj, isFavourite: !obj.isFavourite };
        }
        return obj;
      });
    });
  }

  function addContact(newContact) {
    console.log("Inside addContact method/function");
    try {
      const duplicateRecordExists = contactList.filter((e) => {
        if (e.name === newContact.name && e.phone === newContact.phone) {
          return true;
        }
        return false;
      });
      if (duplicateRecordExists.length > 0) {
        return { status: "error", message: "Contact already exists!!" };
      }

      setContactList((prevList) => {
        return prevList.concat({
          id: prevList.length + 1,
          name: newContact.name,
          phone: newContact.phone,
          email: newContact.email,
          isFavourite: newContact.isFavourite,
        });
      });
      return { status: "success", message: "Contact is added Successfully!!" };
    } catch (error) {
      console.log(
        "Encountered error while trying to add the contact in addContact function: " +
          error,
      );
      return { status: "error", message: "Contact addition failed!!" };
    }
  }

  const [updatingContact, setUpdatingContact] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  //   useEffect(() => {

  //   }, [updatingContact, isUpdating]);

  function updateContact(contact) {
    console.log(contact);
    setIsUpdating(true);
    setUpdatingContact(contact);
    console.log(updatingContact);
    console.log(isUpdating);
  }

  function cancelUpdate() {
    console.log(cancelUpdate);

    setIsUpdating(false);
    setUpdatingContact(null);
  }

  function handleUpdateSubmit(contact) {
    console.log(contactList);
    console.log(contactList.length);
    if (contactList.length > 0) {
      try {
        setContactList(
          contactList.map((obj) => {
            if (contact.id === obj.id) {
              return {
                ...obj,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                isFavourite: contact.isFavourite,
              };
            }
            return obj;
          }),
        );
        setIsUpdating(false);
        setUpdatingContact(null);
        return {
          status: "success",
          message: "The contact is updated successfully!!",
        };
      } catch (error) {
        return {
          status: "error",
          message: `The contact updation failed due to ${error}!!`,
        };
      }
    } else {
      return {
        status: "error",
        message: "The contact list is empty!!",
      };
    }
  }

  function deleteContact(contact) {
    setContactList((prevState) => {
      return prevState.filter((obj) => obj.id != contact.id);
    });
  }

  function removeAll() {
    setContactList([]);
  }
  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="py-3">
        <div className="row py-2">
          <div className="col-6"><AddRandomContact addContact={addContact}/></div>

          <div className="col-6">
            <button
              onClick={removeAll}
              className="btn p-1 btn-danger form-control"
            >
              Remove All
            </button>
          </div>
        </div>

        <div className="py-2">
          <div className="col-12">
            <AddContact
              addContact={addContact}
              isUpdating={isUpdating}
              updateContact={updateContact}
              updatingContact={updatingContact}
              cancelUpdate={cancelUpdate}
              handleUpdateSubmit={handleUpdateSubmit}
            />
          </div>
        </div>

        <div className="py-2">
          <div className="col-12">
            <FavoriteContacts
              favoriteContactsList={contactList.filter(
                (e) => e.isFavourite === true,
              )}
              handleFavouriteToggle={handleFavouriteToggle}
              deleteContact={deleteContact}
              updateContact={updateContact}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <GeneralContact
              generalContactList={contactList.filter(
                (contact) => contact.isFavourite == false,
              )}
              handleFavouriteToggle={handleFavouriteToggle}
              deleteContact={deleteContact}
              updateContact={updateContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
