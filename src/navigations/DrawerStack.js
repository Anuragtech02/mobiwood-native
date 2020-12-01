import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
const Stack = createStackNavigator();
import {AppHeader} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors, Typography} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../screens/DrawerContent';
import Home from '../screens/Home/HomeScreen';
import ContestRegistration from '../screens/Contests/ContestRegistration';
import Upload from '../screens/Contests/Upload';
import UnderAge from '../screens/Contests/UnderAge';

const Drawer = createDrawerNavigator();

const logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: '#000000',
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Contest" component={ContestStack} />
    </Drawer.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={({navigation}) => ({
        title: '',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerRight: () => (
          <TouchableOpacity style={styles.btn} onPress={() => logout()}>
            <Text style={styles.txt}>Logout</Text>
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={32} color={Colors.PRIMARY} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function ContestStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={({navigation}) => ({
        title: '',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerRight: () => (
          <TouchableOpacity style={styles.btn} onPress={() => logout()}>
            <Text style={styles.txt}>Logout</Text>
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={32} color={Colors.PRIMARY} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen
        name="ContestRegistration"
        component={ContestRegistration}
      />
      <Stack.Screen name="Upload" component={Upload} />
      <Stack.Screen name="UnderAge" component={UnderAge} />
    </Stack.Navigator>
  );
}

const styles = ScaledSheet.create({
  txt: {
    color: Colors.PRIMARY,
    textAlign: 'center',
    ...Typography.FONT_BOLD,
  },
  btn: {
    width: wp('20%'),
    backgroundColor: '#f91111',
    padding: '8@ms',
    marginRight: '15@ms',
    borderRadius: '5@s',
  },
  menu: {
    marginLeft: '15@ms',
  },
});
