import { writeContacts } from '../utils/writeContacts';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (error) {
    console.log(error.message);
  }
};

removeAllContacts();
