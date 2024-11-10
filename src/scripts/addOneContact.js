import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();

  try {
    const data = await readContacts();
    data.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');
  } catch (error) {
    console.log(error.message);
  }
};

addOneContact();
