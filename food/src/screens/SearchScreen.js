import React, {useState,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import useSearchResults from "../hooks/useSearchResults";
const SearchScreen=()=>{
    const [term,setTerm]=useState('');
    const [searchApi,apiResults,errorMessage]=useSearchResults();

    return(
        <View>
            <SearchBar
                term={term}
                onChangeTerm={setTerm}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage?<Text>{setErrorMessage}</Text>:null}
            <Text>we have found {apiResults.length}</Text>
        </View>
    );
};
const styles = StyleSheet.create({});

export default SearchScreen;
