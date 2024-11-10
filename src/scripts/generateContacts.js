import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact';
import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  if (number === 0) return;

  try {
    const data = await readContacts();

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      data.push(newContact);
    }
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
