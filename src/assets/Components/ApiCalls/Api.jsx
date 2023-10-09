
import axios from 'axios'

const url = 'http://localhost:5000/users'
const url2 = 'http://localhost:5000/add'

export const postUser =async (data)=>{
 try{
    const response = await axios.post(url, data)
    return response.data
    
 }
 catch(err){
    console.log(err.message)
 }
}

export const postProduct = async(data) =>{
   try{
      const response = await axios.post(url2, data)
      return response.data
   }
   catch(err){
      console.log(err.message)
   }
}