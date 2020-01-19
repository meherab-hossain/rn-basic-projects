import axios from 'axios'

export default axios.create({
   baseURL:'https://api.yelp.com/v3/businesses',
   headers:{
       Authorization: 'Bearer 6cEZwrxYR26fXD1BaA0E4h8FZzUf0CRT-XebnV2LZhYKEpLVGQ5CRCjwxDl2eGGn2musa_Zi3piYJi-A8gKjnVHsjkgrPismlcC9mKLSkQda8jGvhGqY9muPqEMfXnYx'
   }
});
