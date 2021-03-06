import {ScaledSheet} from 'react-native-size-matters';
import {Colors, Typography} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default ScaledSheet.create({
    abovekeyboardContainer: {
      padding:"20@ms",
      top:"10@ms",
    },
    socialBtnContainer:{
      padding:"20@ms",
    },
    socialBtn:{
        width:wp('90%'),
        padding:"18@ms",
        paddingLeft:"70@ms",
        borderBottomWidth:10,
        borderBottomColor:"#faf5ff"
    },
    socialBtnText:{
        ...Typography.FONT_BOLD,
      fontSize: '15@s',
      color:Colors.PRIMARY
    },
    heading: {
      ...Typography.FONT_BOLD,
      fontSize: '20@s',
      color: Colors.SECONDARY,
      alignSelf: 'center',
      marginTop: '18@s',
    },
    formContainer:{
      paddingBottom:"30@ms",
      paddingTop:"30@ms"
    },
    containerStyles:{
      marginBottom: "20@s",
      height:"60@ms"
    },
    error:{
      color:"#FF0000",
      fontSize:"15@ms",
      paddingBottom:"8@ms"
    },
    btn:{
      padding:"18@ms",
      backgroundColor:"black",
      borderRadius:"7@ms",
      alignItems:"center"
    },
    btnText:{
      ...Typography.FONT_BOLD,
      fontSize: '15@s',
      color: "#f7fafc",
      alignSelf: 'center',
    },
    terms:{
      fontSize:'15@s',
      textAlign:"center"
    },
    txt:{
      fontSize:"15@s",
      textAlign:"center"
    },
    altText:{
      paddingTop:"15@ms"
    },
    radioBtnContainer:{
        paddingTop:"15@ms",
    },
    radioBtn:{
        width:wp('90%'),
        padding:"8@ms",
        marginTop:"8@ms",
    },
    icon:{
        alignSelf:"center",
        marginTop:"-10@ms"
    },
    modalContent: {
      backgroundColor: 'white',
      width: wp('95%'),
      alignSelf:"center",
      borderRadius: "7@ms",
      padding:"15@ms",
      flex:1
    },
    modalContainer:{
        padding:"10@ms",
    },
  });
