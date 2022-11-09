import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View ,TextInput, Button} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      
 
 <Image source = {{uri:'https://tse4.mm.bing.net/th?id=OIP.uDMCW_1IznXiFGscE2Cy7gHaEK&pid=Api&P=0' }}
   style = {{ width: 200, height: 170,top:5 ,margin:10,right:150}}
   />

<Text style={styles.txt}> Loign Page React Native  </Text>
      <TextInput style={styles.input} 
      placeholder = 'UserName'
      ></TextInput>
<TextInput style={styles.input} placeholder = 'Password'></TextInput>
      <View style={{height:200,width:200,top:70}}>
    <Button  title="Pressed"  color="blue" onPress={()=>aler("Hey Alert")}>  </Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:600,
    width:500,
    alignSelf:'center',
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    
    borderWidth : 5,
    borderColor : 'skyblue',
    backgroundColor:'blue',
    textShadowColor:'black',
    borderRadius : 3,
    bottom:200,
    width : 300,
    height : 10,
    padding : 10,
    margin : 10,
    color: 'white',
  },
  txt:
  {
  flex:1,
  color:'black',
  textAlign:'center',
  top:40,
  fontSize:30,
  alignItems:'center', 
  fontWeight: 'bold',width:250}
});