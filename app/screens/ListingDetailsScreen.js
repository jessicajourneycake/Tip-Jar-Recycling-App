import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import AppText from "../components/AppText";
import ListItem from '../components/ListItem';
import ListingsScreen from './ReceiptScreen';

function ListingDetailsScreen({route}) {
    const listing = route.params;

    return (
       <View>
           <Image style={styles.image} source={listing.image}/>
           <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.pricetag}>${listing.price}</AppText>
                    <View style={styles.userContainer}>
                        <ListItem
                            image={require("../assets/mosh.jpg")}
                            title="Mosh Hamedani"
                            subTitle="5 Listings"
                            subTitleColor="grey"
                        />
                    </View>
            </View>
       </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    pricetag: {
        color: "green",
        fontWeight: "bold",
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: "black",
    },
    userContainer: {
        marginVertical: 40,
    },
   
})
export default ListingDetailsScreen;