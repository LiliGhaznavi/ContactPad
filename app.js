// Get Input Functions
const readlineSync = require("readline-sync");

function getContactFirstName() {
  return readlineSync
    .question("Please enter your contact's first name: ")
    .toLowerCase();
}

function getContactLastName() {
  return readlineSync
    .question("Please enter your contact's last name: ")
    .toLowerCase();
}

function getContactNumber() {
  return readlineSync.question("Please enter your contact's phone number: ");
}

function getRemovalConfirmation() {
  return readlineSync
    .question("Are you sure you want to delete this contact? ")
    .toLowerCase();
}

function getRemovalInformation() {
  return readlineSync
    .question(
      "Which contact do you want to delete? (Please enter the number between 1 to n.) "
    )
    .toLowerCase();
}

function getMenuOptions() {
  return readlineSync
    .question(
      "Please enter your choice from the following options:👇\n- Add Contact\n- Remove Contact\n- Search Contact\n- Contacts List\n- Repetitive Contacts List\n- Number of Contacts\n- Exit the contact manager\n"
    )
    .toLowerCase();
}

function getSearchOptions() {
  return readlineSync
    .question(
      "How would you like to search for a contact? (Please enter your choice from the following options:👇)\n- Search by First Name\n- Search by Last Name\n- Search by Number\n- Exit the Search Option\n"
    )
    .toLowerCase();
}

function getSearchByNameValue() {
  return readlineSync
    .question("Please enter the first name you want to search for: ")
    .toLowerCase();
}

function getSearchByFamilyValue() {
  return readlineSync
    .question("Please enter the last name you want to search for: ")
    .toLowerCase();
}

function getSearchByNumberValue() {
  return readlineSync.question(
    "Please enter the number you want to search for: "
  );
}

// Feature Functions
function addContact() {
  let firstName = getContactFirstName();
  let lastName = getContactLastName();
  let number = getContactNumber();
  let contact = { name: firstName, family: lastName, number: number };
  contacts.push(contact);
  console.log("The contact was added successfully!🙌");
}

function removeContact(removingContact) {
  let foundedContactValue = [];
  if (selectedSearchOption === "search by first name") {
    let foundContacts = findContactbyName(removingContact);
    console.log(foundContacts);
    if (foundContacts.length === 1) {
      let resultOfRemovalConfirmation = getRemovalConfirmation();
      if (resultOfRemovalConfirmation === "yes") {
        for (let i = 0; i < contacts.length; i++) {
          if (
            contacts[i].name === foundContacts[0].name &&
            contacts[i].family === foundContacts[0].family &&
            contacts[i].number === foundContacts[0].number
          ) {
            contacts.splice(i, 1);
          }
        }
        foundedContactValue.push("The contact was removed successfully!🙌");
      } else if (resultOfRemovalConfirmation === "no") {
        foundedContactValue.push(
          "We will not remove this contact at this time. Please return when you’re certain you want to proceed with its removal."
        );
        return;
      }
    } else if (
      foundContacts.length > 1 &&
      foundContacts !==
        "No contacts were found with the first name you searched for."
    ) {
      let resultOfRemovalInformation = getRemovalInformation();
      console.log(foundContacts[resultOfRemovalInformation - 1]);
      let resultOfRemovalConfirmation = getRemovalConfirmation();
      if (resultOfRemovalConfirmation === "yes") {
        for (let i = 0; i < contacts.length; i++) {
          if (
            contacts[i].name ===
              foundContacts[resultOfRemovalInformation - 1].name &&
            contacts[i].family ===
              foundContacts[resultOfRemovalInformation - 1].family &&
            contacts[i].number ===
              foundContacts[resultOfRemovalInformation - 1].number
          ) {
            contacts.splice(i, 1);
          }
        }
        foundedContactValue.push("The contact was removed successfully!🙌");
      } else if (resultOfRemovalConfirmation === "no") {
        foundedContactValue.push(
          "We will not remove this contact at this time. Please returen when you're certain you want to proceed with its removal."
        );
      }
    } else if (
      foundContacts.length === 0 ||
      foundContacts ===
        "No contacts were found with the first name you searched for."
    ) {
      foundedContactValue.push(
        "There are no contacts found to delete in the list."
      );
    }
  } else if (selectedSearchOption === "search by last name") {
    let foundContacts = findContactbyFamily(removingContact);
    console.log(foundContacts);
    if (foundContacts.length === 1) {
      let resultOfRemovalConfirmation = getRemovalConfirmation();
      if (resultOfRemovalConfirmation === "yes") {
        for (let i = 0; i < contacts.length; i++) {
          if (
            contacts[i].name === foundContacts[0].name &&
            contacts[i].family === foundContacts[0].family &&
            contacts[i].number === foundContacts[0].number
          ) {
            contacts.splice(i, 1);
          }
        }
        foundedContactValue.push("The contact was removed successfully!🙌");
      } else if (resultOfRemovalConfirmation === "no") {
        foundedContactValue.push(
          "We will not remove this contact at this time. Please return when you’re certain you want to proceed with its removal."
        );
        return;
      }
    } else if (
      foundContacts.length > 1 &&
      foundContacts !==
        "No contacts were found with the last name you searched for."
    ) {
      let resultOfRemovalInformation = getRemovalInformation();
      console.log(foundContacts[resultOfRemovalInformation - 1]);
      let resultOfRemovalConfirmation = getRemovalConfirmation();
      if (resultOfRemovalConfirmation === "yes") {
        for (let i = 0; i < contacts.length; i++) {
          if (
            contacts[i].name ===
              foundContacts[resultOfRemovalInformation - 1].name &&
            contacts[i].family ===
              foundContacts[resultOfRemovalInformation - 1].family &&
            contacts[i].number ===
              foundContacts[resultOfRemovalInformation - 1].number
          ) {
            contacts.splice(i, 1);
          }
        }
        foundedContactValue.push("The contact was removed successfully!🙌");
      } else if (resultOfRemovalConfirmation === "no") {
        foundedContactValue.push(
          "We will not remove this contact at this time. Please returen when you're certain you want to proceed with its removal."
        );
      }
    } else if (
      foundContacts.length === 0 ||
      foundContacts ===
        "No contacts were found with the last name you searched for."
    ) {
      foundedContactValue.push(
        "There are no contacts found to delete in the list."
      );
    }
  }
  if (selectedSearchOption === "search by number") {
    let foundContacts = findContactbyNumber(removingContact);
    console.log(foundContacts);
    if (foundContacts.length === 1) {
      let resultOfRemovalConfirmation = getRemovalConfirmation();
      if (resultOfRemovalConfirmation === "yes") {
        for (let i = 0; i < contacts.length; i++) {
          if (
            contacts[i].name === foundContacts[0].name &&
            contacts[i].family === foundContacts[0].family &&
            contacts[i].number === foundContacts[0].number
          ) {
            contacts.splice(i, 1);
          }
        }
        foundedContactValue.push("The contact was removed successfully!🙌");
      } else if (resultOfRemovalConfirmation === "no") {
        foundedContactValue.push(
          "We will not remove this contact at this time. Please return when you’re certain you want to proceed with its removal."
        );
        return;
      }
    } else if (
      foundContacts.length > 1 &&
      foundContacts !== "No contact was found with the number you searched for."
    ) {
      let resultOfRemovalInformation = getRemovalInformation();
      console.log(foundContacts[resultOfRemovalInformation - 1]);
      let resultOfRemovalConfirmation = getRemovalConfirmation();
      if (resultOfRemovalConfirmation === "yes") {
        for (let i = 0; i < contacts.length; i++) {
          if (
            contacts[i].name ===
              foundContacts[resultOfRemovalInformation - 1].name &&
            contacts[i].family ===
              foundContacts[resultOfRemovalInformation - 1].family &&
            contacts[i].number ===
              foundContacts[resultOfRemovalInformation - 1].number
          ) {
            contacts.splice(i, 1);
          }
        }
        foundedContactValue.push("The contact was removed successfully!🙌");
      } else if (resultOfRemovalConfirmation === "no") {
        foundedContactValue.push(
          "We will not remove this contact at this time. Please returen when you're certain you want to proceed with its removal."
        );
      }
    } else if (
      foundContacts.length === 0 ||
      foundContacts === "No contact was found with the number you searched for."
    ) {
      foundedContactValue.push(
        "There are no contacts found to delete in the list."
      );
    }
  }
  return foundedContactValue;
}

function listContacts() {
  contacts.sort(function (a, b) {
    let x = a.family;
    let y = b.family;
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  let contactsList = [];
  for (let i = 0; i < contacts.length; i++) {
    contactsList.push(
      `${i + 1}- name: ${contacts[i].name}, family: ${
        contacts[i].family
      }, Phone number: ${contacts[i].number}`
    );
  }
  return contactsList;
}

function findDuplicate() {
  const duplicates = [];

  for (let i = 0; i < contacts.length; i++)
    for (let j = i + 1; j < contacts.length; j++) {
      if (
        contacts[i].name === contacts[j].name &&
        contacts[i].family === contacts[j].family &&
        contacts[i].number === contacts[j].number
      ) {
        duplicates.push(contacts[i]);
      }
    }
  if (duplicates.length !== 0) {
    return duplicates;
  } else {
    return "No duplicate contacts found.";
  }
}

function findContactbyName(searchingName) {
  const result = [];
  for (const contact of contacts) {
    if (contact.name === searchingName) {
      result.push(contact);
    }
  }

  if (result.length !== 0) {
    return result;
  } else {
    return "No contacts were found with the first name you searched for.";
  }
}

function findContactbyFamily(searchingFamily) {
  const result = [];
  for (const contact of contacts) {
    if (contact.family === searchingFamily) {
      result.push(contact);
    }
  }

  if (result.length !== 0) {
    return result;
  } else {
    return "No contacts were found with the last name you searched for.";
  }
}

function findContactbyNumber(searchingNumber) {
  const result = [];
  for (const contact of contacts) {
    if (contact.number === searchingNumber) {
      let copyContact = contact;
      result.push(copyContact);
    }
  }

  if (result.length !== 0) {
    return result;
  } else {
    return "No contact was found with the number you searched for.";
  }
}

function getNumberofContacts() {
  let countContacts = 0;
  if (contacts.length > 2) {
    for (let i = 0; i < contacts.length; i++)
      for (let j = i + 1; j < contacts.length; j++) {
        if (
          contacts[i].name !== contacts[j].name &&
          contacts[i].family !== contacts[j].family &&
          contacts[i].number !== contacts[j].number
        ) {
          countContacts++;
        }
      }
  } else if (contacts.length === 2) {
    if (
      contacts[0].name !== contacts[1].name &&
      contacts[0].family !== contacts[1].family &&
      contacts[0].number !== contacts[1].number
    ) {
      countContacts = 2;
    } else {
      countContacts = 1;
    }
  } else {
    countContacts = 1;
  }

  return `The total number of contacts in this list is: ${countContacts}`;
}

function displayMenuOptions() {
  selectedMenuOption = getMenuOptions();
  return selectedMenuOption;
}

function displaySearchOptions() {
  selectedSearchOption = getSearchOptions();
  return selectedSearchOption;
}

// Connecting Functions
let contacts = [];
let selectedMenuOption = "";
let selectedSearchOption = "";
console.log("Hi!👋\nWelcome to Your Contact Pad!");
console.log("Please add your first contact!");
addContact();
displayMenuOptions();
while (selectedMenuOption !== "exit the contact manager") {
  if (selectedMenuOption === "add contact") {
    addContact();
    displayMenuOptions();
  } else if (selectedMenuOption === "remove contact") {
    console.log("First, you must search for the contact you want to remove.");
    displaySearchOptions();
    if (selectedSearchOption === "search by first name") {
      let searchValue = getSearchByNameValue();
      console.log(removeContact(searchValue));
    } else if (selectedSearchOption === "search by last name") {
      let searchValue = getSearchByFamilyValue();
      console.log(removeContact(searchValue));
    } else if (selectedSearchOption === "search by number") {
      let searchValue = getSearchByNumberValue();
      console.log(removeContact(searchValue));
    } else if (selectedSearchOption === "exit the search option") {
      console.log(
        "Please come back when you are sure about the data before removing your contact."
      );
      displayMenuOptions();
    } else {
      console.log("Please enter a valid option!");
      displaySearchOptions();
    }
    removeContact();
    displayMenuOptions();
  } else if (selectedMenuOption === "search contact") {
    displaySearchOptions();
    if (selectedSearchOption === "search by first name") {
      let searchValue = getSearchByNameValue();
      console.log("Contacts found with the first name you searched for:");
      console.log(findContactbyName(searchValue));
      displayMenuOptions();
    } else if (selectedSearchOption === "search by last name") {
      let searchValue = getSearchByFamilyValue();
      console.log("Contacts found with the last name you searched for:");
      console.log(findContactbyFamily(searchValue));
      displayMenuOptions();
    } else if (selectedSearchOption === "search by number") {
      let searchValue = getSearchByNumberValue();
      console.log("Contact found with the number you searched for:");
      console.log(findContactbyNumber(searchValue));
      displayMenuOptions();
    } else if (selectedSearchOption === "exit the search option") {
      displayMenuOptions();
    } else {
      console.log("Please enter a valid option!");
      displaySearchOptions();
    }
  } else if (selectedMenuOption === "contacts list") {
    console.log(listContacts());
    displayMenuOptions();
  } else if (selectedMenuOption === "repetitive contacts list") {
    console.log("Duplicate Contacts Found:");
    console.log(findDuplicate());
    displayMenuOptions();
  } else if (selectedMenuOption === "number of contacts") {
    console.log(getNumberofContacts());
    displayMenuOptions();
  } else if (selectedMenuOption === "exit the contact manager") {
    break;
  } else {
    console.log("Please enter a valid option!");
    displayMenuOptions();
  }
}
