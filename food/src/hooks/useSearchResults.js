import React, {useState,useEffect}from 'react';
import yelp from '../api/yelp/yelp'

export default ()=>{
    const [apiResults,setApiResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');

    const searchApi=async(searchTerm)=> {
        try {
            const response=await yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'san jose'
                }
            });
            setApiResults(response.data.businesses);
        } catch (e) {
            setErrorMessage('something went wrong')
        }
    };
    //call search api one time using useEffect hook
    //useEffect hook used to make the function run one time or base upon some values
    useEffect(()=>{
        searchApi('pasta')
    },[]);

    return[searchApi,apiResults,errorMessage];
}
