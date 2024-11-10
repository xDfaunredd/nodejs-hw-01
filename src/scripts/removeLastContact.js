import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    const newArray = data.pop();

    await writeContacts(newArray);
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
