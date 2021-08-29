import React, {Component} from "react";
import { StyleSheet, RefreshControl, Text, View, FlatList, Image, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView, Button } from 'react-native';





export default class TipJarFlatList extends Component {
  constructor(props){
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

    this.state = {
      isLoading: true,
      dataSource: ['']
    }

  }
  forceUpdateHandler(){
    this.forceUpdate();
  };


  componentDidMount() {
    fetch('https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/66588c677e52fcdad4215271baa6da14d9cf59984c8b24e91c2318465f391743/j7yIzm/TipJar', {
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
        <Text style={{fontFamily: "Menlo", fontSize: 14, width: 83, top: 10, height: 25}}>{item.DATE}</Text>
        </View>
        <View style={{width: 170}}>
        <Text style={{fontFamily: "Menlo", fontSize: 14, fontWeight: "bold", left: 60, top: 10, width: 140, height: 60}}numberOfLines={2}>{item.COUNT}</Text>
        </View>
        <View style={{width: 60}}>
        <Image source={{uri: item.COLOR}} style={{left: -35, top: -5, resizeMode: "contain", height: 40, width: 40 }}/>
        </View>
        <View style={{width: 60}}>
        <Text style={{fontFamily: "Menlo", fontSize: 14,left: 10, resizeMode: "contain", top: 10, height: 40, width: 40 }}>{item.TIP}</Text>
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
    <View style={{backgroundColor: "aliceblue", width: '100%', height: 210}}>
       
       <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={{ marginTop: 20, alignContent: "center", marginLeft: 290, width: 100, height: 30, backgroundColor: "peachpuff", borderWidth: 1, borderRadius: 15, borderColor: "white" }}><Text style={{fontFamily: "Menlo", fontSize: 14, fontWeight: "bold", marginTop: 5, marginLeft: 25}}>Logout</Text></TouchableOpacity>
       <View style={{flexDirection: "row"}}>
       <View style={{marginLeft: 140, marginTop: 8, width: 200}}>
      
       <Image source={require("../assets/logo.png")} style={{marginTop: -15, marginLeft: -70,height: 140, width: 95, resizeMode: "contain"}}/>
       </View>
       <Text style={{fontSize: 60, fontFamily: "Menlo", top: 20, right: 170}}>$</Text>
       
     
       </View>
     
   </View>
   <View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", paddingTop: 5, flexDirection: "row"}}>
       <View style={{borderRightWidth: 2, width: 120}}>
        <Text style={{fontSize: 16, paddingLeft: 30, height: 30, fontFamily: "Menlo", fontWeight: '600'}}>Date</Text>
        </View>
        <View style={{borderRightWidth: 2, width: 90}}>
        <Text style={{fontSize: 16, paddingLeft: 20, height: 30, fontFamily: "Menlo", fontWeight: '600'}}>Count</Text>
        </View>
        <View style={{borderRightWidth: 2, width: 90}}>
        <Text style={{paddingLeft: 20, fontSize: 16, height: 30, fontFamily: "Menlo", fontWeight: '600' }}>Color</Text>
        </View>
        <Text style={{marginLeft: 25, fontSize: 16, height: 30, fontFamily: "Menlo", fontWeight: '600' }}>Tip $</Text>
        </View>
     <ScrollView style={container}  onScrollToTop={this.forceUpdateHandler} >
       <FlatList 
       data={dataSource.TipJar}
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
  
