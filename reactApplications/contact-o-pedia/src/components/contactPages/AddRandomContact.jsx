import { getRandomUser } from "../utility/AddRandomContactAPI";

export const AddRandomContact = (props) => {
  const getRandomContact = async () => {
    try {
      const response = await getRandomUser();
      console.log(
        "returnFormattedUser(response): " + returnFormattedUser(response),
      );
      const formattedContact = returnFormattedUser(response);
      console.log(formattedContact);
      const addContactResponse = props.addContact(formattedContact);
      console.log(addContactResponse);
    } catch (error) {
      console.log(error);
    }
  };

  // const returnFormattedUser = (responseJson) => {
  function returnFormattedUser(responseJson) {
    console.log("Results array in json: " + responseJson.results.length);
    let result = null;

    responseJson.results.map((obj) => {
      console.log(obj.name);
      const formattedName = `${obj.name.title} ${obj.name.first} ${obj.name.last}`;
      console.log(formattedName);
      console.log(obj.email);

      console.log(obj.phone);
      result = {
        name: formattedName,
        email: obj.email,
        phone: obj.phone,
        isFavourite: false,
      };
      console.log(result);
    });
    return result;
  }

  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={getRandomContact}
      >
        Add Random Contact
      </button>
    </div>
  );
};
