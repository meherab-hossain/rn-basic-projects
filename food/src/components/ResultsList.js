import React from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ResultsList=({title,priceResults})=>{
    return(
        <View>
            <Text styles={styles.titleStyle}>{title}</Text>
            <Text styles={styles.titleStyle}>{priceResults.length}</Text>
            <FlatList
                horizontal={true}
                data={priceResults}
                keyExtractor={result=>result.id}
                renderItem={({item})=>{
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    }
});
export default ResultsList;
