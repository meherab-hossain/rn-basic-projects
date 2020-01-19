import React, {useState,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import useSearchResults from "../hooks/useSearchResults";
import ResultsList from "../components/ResultsList";
const SearchScreen=()=>{
    const [term,setTerm]=useState('');
    const [searchApi,apiResults,errorMessage]=useSearchResults();
    console.log(apiResults);
    const filterResultsByPrice=(price)=>{
        //price==='$' || '$$' || '$$$'
        return apiResults.filter(apiResult=>{
            return apiResult.price===price;
        })
    };
    return(
        <View>
            <SearchBar
                term={term}
                onChangeTerm={setTerm}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage?<Text>{setErrorMessage}</Text>:null}
            <Text>we have found {apiResults.length}</Text>
            <ResultsList priceResults={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList priceResults={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList priceResults={filterResultsByPrice('$$$')} title="Big Spender"/>
        </View>
    );
};
const styles = StyleSheet.create({});

export default SearchScreen;
