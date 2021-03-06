import React from 'react'
import {View,Text,Image} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { ScaledSheet } from 'react-native-size-matters';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DrawerContent(props){
   return(
       <View style={{flex:1}}>
         <DrawerContentScrollView {...props} style={styles.container}> 
           <View style={styles.logoContainer}>
              <Image 
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                />
               <TouchableOpacity onPress={() => props.navigation.closeDrawer()}> 
                   <Icon name="close-outline" size={30} color="white" style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View>
            <DrawerItem 
               label="Home"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
             <DrawerItem 
               label="Contests"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Contest')}}
            />
             <DrawerItem 
               label="Profile"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
             <DrawerItem 
               label="Dashboard"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
             <DrawerItem 
               label="Notifications"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
             <DrawerItem 
               label="Invite Friends"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
             <DrawerItem 
               label="Setting & Privacy"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
             <DrawerItem 
               label="Help & Support"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
             <DrawerItem 
               label="Feedback"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
             <DrawerItem 
               label="Near by Mobiwood user"
               labelStyle={styles.labelStyle}
               style={styles.drawerItemStyle}
               onPress={() => {props.navigation.navigate('Home')}}
            />
            
            </View>
         </DrawerContentScrollView>
       </View>
   );
}

const styles = ScaledSheet.create({
    container:{
        padding:"10@ms"
    },
    logoContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingBottom:"30@ms"
    },
    logo:{
        width:wp('40%'),
        height:hp('10%'),
        resizeMode: 'contain',
    },
    icon:{
        paddingTop:"25@ms"
    },
    labelStyle:{
        color:"white",
        fontSize:"16@ms",
    },
    drawerItemStyle:{
       borderBottomColor:"gray",
       borderBottomWidth:1,
       paddingBottom:"5@ms",
    }
})