import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {ref, onValue, push, update, remove} from 'firebase/database';
import {db} from './firebase-config.js';

const App = () => {
  useEffect(() => {
    onValue(ref(db, '/'), querySnapShot => {
      let data = querySnapShot.val() || {};
      console.log(data);
    });
  });

  return <Text>App</Text>;
};

export default App;
