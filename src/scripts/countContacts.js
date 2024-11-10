import { readContacts } from '../utils/readContacts';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    return data.length;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(await countContacts());
