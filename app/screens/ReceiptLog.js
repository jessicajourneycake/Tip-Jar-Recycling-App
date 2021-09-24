import React, {Component} from "react";
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView, Button } from 'react-native';





export default class ReceiptLog extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      dataSource: ['']
    }
  }


  componentDidMount() {
    fetch('https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/66588c677e52fcdad4215271baa6da14d9cf59984c8b24e91c2318465f391743/j7yIzm/ReceiptLog', {
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
       <Text style={styles.text}>{item.RECEIPTID}</Text>
        </View>
        <View>
        <Text style={{fontFamily: "Menlo", fontSize: 14, width: 84, height:20, left: 30}}>{item.DATE}</Text>
        </View>
        <View>
        <Text style={{fontFamily: "Menlo", fontSize: 14, height: 28, width: 100, left: 65}} numberOfLines={2}>{item.LOCATION}</Text>
        </View>
        <View style={{width: 170}}>
        <Text style={{fontFamily: "Menlo", fontSize: 14, left: 110, width: 140, height: 60}}>{item.INUSE}</Text>
        </View>
      
      </View>
    )
  }

  render() {
    let {dataSource, isLoading} = this.state
    let {container} = styles

   
   return (
<>
   
   <View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", flexDirection: "row"}}>
            <View style={{width: 85,borderRightWidth: 2, paddingRight: 5}}>
        <Text style={{top: 3, fontSize: 15, paddingLeft: 10, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={2}>Receipt ID</Text>
        </View>
        <View style={{width: 110,borderRightWidth: 2, paddingRight: 5}}>
        <Text style={{top: 10, left: 3, fontSize: 15, paddingLeft: 10, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={1}>Date</Text>
        </View>
        <View style={{width: 130,borderRightWidth: 2, paddingRight: 5, }}>
        <Text style={{fontSize: 15, top: 10, left: 10, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={1}>Location</Text>
        </View>
        <View style={{width: 80, height: 60}}>
        <Text style={{fontSize: 15, left: 13, top: 13, height: 60, fontFamily: "Menlo", fontWeight: '600',}} numberOfLines={2}>Product Qty.</Text>
        </View>
        </View>
     <ScrollView style={container}>
       <FlatList 
       data={dataSource.ReceiptLog}
       renderItem={this._renderItem}
       keyExtractor={(item, index) => String(index)}
       />
     </ScrollView>
     </>
  
   )
}
}
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
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Menlo",
  
  }
})
