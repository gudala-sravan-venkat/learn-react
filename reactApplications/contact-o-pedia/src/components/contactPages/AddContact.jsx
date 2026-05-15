import { useState, useEffect } from "react";
export default function AddContact(props) {
  const failedMessage = "Contact addition failed in AddContact.jsx";
  const nullMessageObject = {
    status: undefined,
    errorMessage: undefined,
    successMessage: undefined,
  };
  const emptyformDataObject = {
    name: "",
    email: "",
    phone: "",
    isFavourite: false,
  };
  function handleAddContactSubmit(formData) {
    // const formData = new FormData(e.target);

    const formDataInJSON = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      isFavourite:
        formData.get("favouriteRadioButton") === "true" ? true : false,
    };
    try {
      let contactUpsertResponse;
      console.log(formDataInJSON);
      // add some functionality later
      // call the parent i.e.., ContactList fucntion to add the contact using props.
      if (props.isUpdating) {
        contactUpsertResponse = props.handleUpdateSubmit({
          ...formDataInJSON,
          id: props.updatingContact.id,
        });
      } else {
        contactUpsertResponse = props.addContact(formDataInJSON);
      }
      setSubmitMessageState(contactUpsertResponse);
      setTimeout(() => {
        setSubmitMessage(nullMessageObject);
      }, 1000);
    } catch (error) {
      setSubmitMessageState({
        errorMessage: failedMessage,
        successMessage: undefined,
      });

      setTimeout(() => {
        setSubmitMessage(nullMessageObject);
      }, 1000);
      console.log(
        "Error occured while adding the contact: formDataInJSON: " + error,
      );
    }

    function setSubmitMessageState(contactAdditionResponse) {
      if (!contactAdditionResponse || !contactAdditionResponse.status) {
        setSubmitMessage(nullMessageObject);
      } else if (contactAdditionResponse.status === "error") {
        setSubmitMessage({
          status: "error",
          errorMessage: contactAdditionResponse.message,
          successMessage: undefined,
        });
      } else {
        setSubmitMessage({
          status: "success",
          errorMessage: undefined,
          successMessage: contactAdditionResponse.message,
        });
      }
    }
  }
  const [submitMessage, setSubmitMessage] = useState(nullMessageObject);
  const [formData, setFormData] = useState(emptyformDataObject);

  useEffect(() => {
    if (props.isUpdating && props.updatingContact) {
      setFormData(props.updatingContact);
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        isFavourite: false,
      });
    }
  }, [props.isUpdating, props.updatingContact]);

  return (
    <div className="border col-12 text-black p-2">
      <form action={handleAddContactSubmit}>
        <div className="row p-2">
          <div className="col-12 text-black-50 text-center h5">
            {props.isUpdating == true ? "Update Contact" : "Add a new Contact"}
          </div>

          <div className="col-12 col-md-4 p-1">
            <input
              name="name"
              placeholder="Name..."
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="form-control form-control-sm"
            />
          </div>

          <div className="col-12 col-md-4 p-1">
            <input
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="form-control form-control-sm"
            />
          </div>

          <div className="col-12 col-md-4 p-1">
            <input
              name="phone"
              placeholder="Phone..."
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 p-1">
            Favorite ? Yes or No
            <div>
              <label>
                <input
                  type="radio"
                  name="favouriteRadioButton"
                  value={true}
                  defaultChecked={
                    formData && null != formData.isFavourite
                      ? formData.isFavourite
                      : false
                  }
                />{" "}
                Yes
              </label>
              {"   "}
              <label>
                <input
                  type="radio"
                  name="favouriteRadioButton"
                  value={false}
                  defaultChecked={
                    formData && null != formData.isFavourite
                      ? formData.isFavourite
                      : true
                  }
                />{" "}
                No
              </label>
              {"   "}
            </div>
          </div>
          <div
            className={`col-12 text-center 
                ${
                  submitMessage.status === "success"
                    ? "text-success"
                    : "text-danger"
                }`}
          >
            {/* <div>{setSubmitMessageOntoTheScreen()}</div> */}
            <div>
              {submitMessage.errorMessage || submitMessage.successMessage}
            </div>
          </div>

          {/* <div className="col-12 text-center text-danger">Error Message</div> */}

          <div className={props.isUpdating == true ? "col-6" : "col-12"}>
            <button
              // type="button"
              className="btn btn-primary btn-sm form-control"
            >
              {props.isUpdating == true ? "Update" : "Create"}
            </button>
          </div>
          {props.isUpdating && (
            <div className="col-6">
              {
                <button
                  type="button"
                  onClick={() => {
                    props.cancelUpdate();
                  }}
                  className="btn btn-primary btn-sm text-danger form-control"
                >
                  Cancel
                </button>
              }
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
