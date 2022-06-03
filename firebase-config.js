import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCk59UR8pv-Bx11WHwTNQTh4X7zRgei5TQ',
  authDomain: 'buyngon-mobile.firebaseapp.com',
  databaseURL:
    'https://buyngon-mobile-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'buyngon-mobile',
  storageBucket: 'buyngon-mobile.appspot.com',
  messagingSenderId: '668583906127',
  appId: '1:668583906127:web:768451cb752cac1639533a',
  measurementId: 'G-ENYRYRY2GL',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};
