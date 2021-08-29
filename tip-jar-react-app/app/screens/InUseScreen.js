import React, {Component} from "react";
import { StyleSheet, RefreshControl, Text, View, FlatList, Image, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView, Button } from 'react-native';





export default class InUseScreen extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      isLoading: true,
      dataSource: ['']
    }
  }
  


  componentDidMount() {
    fetch('https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/66588c677e52fcdad4215271baa6da14d9cf59984c8b24e91c2318465f391743/j7yIzm/InUse', {
      method: 'GET',
      headers: {"Content-Type": "application/json"}
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
  }
  _renderItem = ({item, index}) => {


    return (
      <View style={styles.item}>
       <View>
        <Text style={{width: 77, height:20}}>{item.DATE}</Text>
        <Text style={styles.text}>{item.RECEIPTID}</Text>
        </View>
        <View style={{width: 170}}>
        <Text style={{left: 30, width: 140, height: 60}}numberOfLines={2}>{item.NAME}</Text>
        </View>
        <View style={{width: 60}}>
        <Image source={{uri: item.IMAGE}} style={{resizeMode: "contain", height: 50, width: 50 }}/>
        </View>
        <View style={{width: 60}}>
        <Image source={{uri: item.COLOR}} style={{left: 30, resizeMode: "contain", height: 40, width: 40 }}/>
        </View>
        
      </View>
    )
  }

  render() {

   
    let {dataSource, isLoading} = this.state
    let {container} = styles
    let {navigation} = this.props


   
   return (
     
<>
    <View style={{width: '100%', height: 220}}>
       <ImageBackground source={require('../assets/back.png')} style={{marginRight: 50, width: 600, height: 220, opacity: 0.95}}>
       <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={{ marginTop: 35, alignContent: "center", marginLeft: 30, width: 100, height: 30, backgroundColor: "peachpuff", borderWidth: 1, borderRadius: 15, borderColor: "white" }}><Text style={{fontFamily: "Menlo", fontSize: 14, fontWeight: "bold", marginTop: 5, marginLeft: 25}}>Logout</Text></TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.reset({index: 0,  routes: [{ name: 'InUseScreen' }],})} style={{ top: -30, alignContent: "center", marginLeft: 340, width: 100, height: 30,}}><Image source={require('../assets/refresh.png')} style={{width: 40, height: 40}}/></TouchableOpacity>
       <View style={{flexDirection: "row"}}>
       <View style={{marginLeft: 140, top: -10, width: 200}}>
       <Text style={{top: -10, fontSize: 35, fontFamily: "Menlo", }} numberOfLines={2}>Products In Use</Text>
       </View>
       
       <View style={{top: 70, right: 80,backgroundColor: "lightsteelblue", height: 30, width: 140, borderRadius: 15, justifyContent: "center", alignItems: "center"}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Receipt Log')}><Text style={{fontSize: 14, fontFamily: "Menlo", fontWeight: "bold", color: "black"}}>Receipt Log</Text></TouchableOpacity>
      </View>
     
       </View>
       </ImageBackground>
   </View>
   <View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", flexDirection: "row"}}>
            <View style={{width: 120,borderRightWidth: 2, paddingRight: 5}}>
        <Text style={{fontSize: 15, paddingLeft: 10, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={2}>Date/Receipt ID</Text>
        </View>
        <View style={{width: 190,borderRightWidth: 2, paddingRight: 5, left: 15}}>
        <Text style={{fontSize: 15, top: 5, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={2}>Product</Text>
        </View>
        <View style={{width: 90, height: 60}}>
        <Text style={{left: 2, fontSize: 15, left: 30, top: 10, right: 7, height: 60, fontFamily: "Menlo", fontWeight: '600',}} numberOfLines={2}>Golden Bin</Text>
        </View>
        </View>
     <ScrollView style={container} >
       <FlatList 
       data={dataSource.InUse}
       renderItem={this._renderItem}
       keyExtractor={(item, index) => String(index)}
       
        
       />
     </ScrollView>
    
     </>
  
   )
}}

const styles = StyleSheet.create({
  container: {
  left: 10,
  },
  item: {
    height: 60,
    top: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: "row"
  },
  text: {
    color: "black"
  }
})
  
