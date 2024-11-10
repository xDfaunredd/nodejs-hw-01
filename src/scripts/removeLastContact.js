import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    if (data.length > 0) {
      data.pop();
      await writeContacts(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
