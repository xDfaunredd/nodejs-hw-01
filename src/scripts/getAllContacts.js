import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(await getAllContacts());
