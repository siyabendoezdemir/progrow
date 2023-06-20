import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export async function getUserXP(username): Promise<number> {
  let res = 0;

  try {
    const response = await fetch(`https://codestats.net/api/users/${username}`);

    if (response.ok) {
      const data = await response.json();
      // Process the data as needed
      res = data.total_xp;
    } else {
      console.error('Failed to fetch xp:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

  return res;
}

export async function getUserLevel(username): Promise<number> {
  const LEVEL_FACTOR = 0.025;

  const res = Math.floor(LEVEL_FACTOR * Math.sqrt(await getUserXP(username)));
  return res;
}

function getNextLevelXP(level: number): number {
  const LEVEL_FACTOR = 0.025;
  return Math.trunc(Math.pow(Math.ceil((level + 1) / LEVEL_FACTOR), 2));
}

export async function calculateLevelProgress(userName: String, currentXP: number): Promise<number> {
  const level: number = await getUserLevel(userName);
  const currentLevelXP: number = getNextLevelXP(level - 1);
  const nextLevelXP: number = getNextLevelXP(level);

  const haveXP: number = currentXP - currentLevelXP;
  const neededXP: number = nextLevelXP - currentLevelXP;

  return Math.trunc((haveXP / neededXP) * 100);
}

export function getUserStatus() {
  return localStorage.getItem('user') != null;
}

export function loginUser(username, token) {
  const firestore = firebase.firestore();
  const usersCollection = firestore.collection('users');

  // Check if a document with the same username and token exists
  const query = usersCollection.where('username', '==', `${username}`).where('token', '==', `${token}`);

  query
    .get()
    .then(querySnapshot => {
      if (querySnapshot.empty) {
        // No matching document found, proceed with creating a new document
        const newDocument = usersCollection.doc(); // Automatically generates a document ID

        // Define the data for the new document
        const data = {
          username: username,
          token: token,
        };

        // Set the data for the new document
        newDocument
          .set(data)
          .then(() => {
            const documentId = newDocument.id;
            localStorage.setItem('user', JSON.stringify({id: documentId, username: username, token: token}));
            console.log('New document created with ID:', documentId);
            window.location.reload();
          })
          .catch(error => {
            console.error('Error creating document:', error);
          });
      } else {
        // A matching document already exists
        querySnapshot.forEach((doc) => {
          const documentId = doc.id;
          localStorage.setItem('user', JSON.stringify({id: documentId, username: username, token: token}));
          window.location.reload();
        });
      }
    })
    .catch(error => {
      console.error('Error checking for existing documents:', error);
    });
}
