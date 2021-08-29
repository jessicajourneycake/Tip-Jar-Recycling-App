import React, {Component} from "react";
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView, Button } from 'react-native';





export default class GreenScreen extends Component {
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
    fetch('https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/66588c677e52fcdad4215271baa6da14d9cf59984c8b24e91c2318465f391743/j7yIzm/Green', {
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
        <Text style={{fontFamily: "Menlo", width: 83, height:20}}>{item.DATE}</Text>
        <Text style={styles.text}>{item.RECEIPTID}</Text>
        </View>
        <View style={{width: 170}}>
        <Text style={{fontFamily: "Menlo",left: 25, width: 140, height: 60}}numberOfLines={2}>{item.NAME}</Text>
        </View>
        <View style={{width: 60}}>
        <Image source={{uri: item.IMAGE}} style={{left: 10, resizeMode: "contain", height: 50, width: 50 }}/>
        </View>
        <View style={{width: 60}}>
        <Text style={{fontFamily: "Menlo",left: 25, width: 140, height: 60}}numberOfLines={2}>$ {item.TIP}</Text>
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

         <View style={{height: 70, backgroundColor: "green", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white", fontFamily: "Menlo", fontSize: 22}}>Green Bin: Proctor & Gamble</Text>
        </View>
      
        <View>
        <ImageBackground style={{width: 500, height: 170, right: 50, resizeMode: "contain"}}source={require('../assets/back.png')}>
        <Image style={{width: 130, height: 130, left: 190, top: 20, resizeMode: "contain"}} source={require('../assets/redqr.png')} />
  
        </ImageBackground>
        </View>
      
        <View style={{width: "100%", height: 45, backgroundColor: "honeydew", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 108, fontSize: 14, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}} numberOfLines={2}>Date/Receipt ID</Text>
                    </View>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 225, fontSize: 14, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}} numberOfLines={2}>Product</Text>
                    </View>
                    <View>
                    <Text style={{top: -5, marginLeft: 15, fontSize: 14, right: 7, height: 32, fontFamily: "Menlo", fontWeight: '600' }}>Tip $</Text>
                    </View>
                    </View>
  
    
     
           <ScrollView style={container} onScrollToTop={this.forceUpdateHandler}>
       <FlatList 
       data={dataSource.Green}
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
  left: 5,
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
