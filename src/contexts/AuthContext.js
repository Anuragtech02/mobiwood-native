import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = React.useState({});
  const [uid, setUid] = React.useState('');

  const onAuthStateChanged = (u) => {
    if (u && u.uid) {
      setUser(u);
      setUid(u.uid);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        uid,
        setUid,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
