import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({term,onChangeTerm, onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="search"
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={()=>onTermSubmit(term)}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    backgroundStyle:{
        flexDirection:'row',
        backgroundColor:'gray',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginTop:10
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize: 40,
        alignSelf:'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
