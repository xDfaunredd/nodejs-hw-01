import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    const parsedFileData = JSON.parse(fileData);

    return parsedFileData;
  } catch (error) {
    console.log(error.message);
  }
};
