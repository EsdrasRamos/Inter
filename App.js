import React,{Component} from 'react';
import{
  StyleSheet,View,Text,StatusBar}from 'react-native';
import Routes from './src/Routes';


export default class App extends Component
{
  render()
  {
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor='#1c313a' barStyle="light-content"/>
        <Text style={{color:'#ffffff', fontSize:20, flexGrow:5}}>Welcome to Inter.</Text>
        <Routes/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    backgroundcolor:'#455a64',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }


});