import firebase from 'firebase/app';
import fetch from 'node-fetch';

export default async function initializeApp(): Promise<void> {
  try {
    firebase.app();
  } catch (error) {
    if (error.code !== 'app/no-app') throw error;
    const res = await fetch('http://localhost:5000/__/firebase/init.js');
    const text = await res.text();
    const m = text.match(/^firebase\.initializeApp\(((.|\n)*)\);\n?$/m);
    if (!m) throw new Error('Failed to load config');
    firebase.initializeApp(JSON.parse(m[1]));
  }
}
