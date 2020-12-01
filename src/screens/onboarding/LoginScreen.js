import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import Separator from '../../components/Separator';
import {InputField} from '../../components/InputField';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../contexts/AuthContext';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import TNC from '../../components/TNC';
import IconClose from 'react-native-vector-icons/Ionicons';

const loginValidationSchema = yup.object().shape({
  username: yup.string().required('Username is Required'),
  password: yup.string().required('Password is required'),
});

const LoginScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const toggleTnc = (val) => {
    setModalVisible(val);
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView style={styles.abovekeyboardContainer}>
          <Text style={styles.heading}>Log In to Your Account</Text>
          {/* <View style={styles.socialBtnContainer}>
           <Icon.Button
            name="google"
            backgroundColor="#dc4e41"
            style={styles.socialBtn}
            onPress={() => signIn()}>
            <Text style={styles.socialBtnText}>
               Login with Google
             </Text>
          </Icon.Button>

          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            style={styles.socialBtn}
            onPress={() => alert('Login with Facebook')}>
            <Text style={styles.socialBtnText}>
              Login with Facebook
            </Text>
          </Icon.Button>

          <Icon.Button
            name="twitter"
            backgroundColor="#00a0dc"
            style={styles.socialBtn}
            onPress={() => alert('Login with Twitter')}>
            <Text style={styles.socialBtnText}>
              Login with Twitter
            </Text>
          </Icon.Button>
          </View> */}

          {/* <Separator text="Or Log In Using Username"/> */}

          <View style={styles.formContainer}>
            <Formik
              initialValues={{username: '', password: ''}}
              onSubmit={(values) => {
                setLoading(true);
                firestore()
                  .collection('username')
                  .doc(values.username)
                  .get()
                  .then(function (details) {
                    if (details.exists) {
                      firestore()
                        .collection('user')
                        .doc(details.data().uid)
                        .get()
                        .then(function (userVals) {
                          console.log(
                            'Values: ',
                            details.data().uid,
                            userVals.data(),
                            values,
                          );
                          auth()
                            .signInWithEmailAndPassword(
                              userVals.data().email,
                              values.password,
                            )
                            .then(async function () {
                              //storeData(value.username)
                              await AsyncStorage.setItem(
                                'username',
                                values.username,
                              );
                              firestore()
                                .collection('user')
                                .doc(details.data().uid)
                                .set(
                                  {last_login_datetime: new Date()},
                                  {merge: true},
                                );
                              navigation.navigate('Home');
                            })
                            .catch(function (e) {
                              console.log('Signin Error: ', e.message);
                              setLoading(false);
                              alert('Invalid Credentials');
                            });
                        });
                    } else {
                      setLoading(false);
                      alert('Invalid Credentials');
                    }
                  })
                  .catch(function (error) {
                    setLoading(false);
                    console.log('others', error.message);
                  });
              }}
              validationSchema={loginValidationSchema}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  {errors.username && (
                    <Text style={styles.error}>{errors.username}</Text>
                  )}
                  <InputField
                    placeholder="Username"
                    placeholderTextColor="#a0aec0"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    containerStyles={styles.containerStyles}
                  />
                  {errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                  <InputField
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="#a0aec0"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    containerStyles={styles.containerStyles}
                  />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    <Text style={styles.btnText}>
                      Log In
                      <ActivityIndicator animating={isLoading} color="white" />
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
          <View
            style={{flexDirection: 'row', marginBottom: 15, flexWrap: 'wrap'}}>
            <Text>By logging, you agree to our</Text>
            <TouchableOpacity onPress={() => toggleTnc(true)}>
              <Text style={{color: '#4299e1'}}> Terms & Conditions</Text>
            </TouchableOpacity>
            <Text> and</Text>
            <TouchableOpacity>
              <Text style={{color: '#4299e1'}}> Privacy Policy</Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              toggleTnc(false);
            }}>
            <View style={styles.modalContent}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.heading}>Terms & Conditions</Text>
                <IconClose.Button
                  name="close-outline"
                  size={25}
                  color="black"
                  backgroundColor="white"
                  onPress={() => toggleTnc(false)}
                />
              </View>
              <ScrollView>
                <TNC />
              </ScrollView>
            </View>
          </Modal>

          <View style={styles.altText}>
            <Text style={styles.txt}>New to this place?</Text>
            <Text
              onPress={() => navigation.navigate('Signup')}
              style={[styles.txt, {fontWeight: 'bold'}]}>
              {' '}
              Sign Up!
            </Text>
            <Text
              onPress={() => navigation.navigate('ResetPassword')}
              style={[styles.txt, {fontWeight: 'bold', marginTop: 10}]}>
              Forgot Password?
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {LoginScreen};
