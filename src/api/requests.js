import axios from 'axios'

export async function postFile(formData){
    try{
        const resp = await axios.post("http://localhost:3080/add-file",formData)
        console.log(resp.data)
    }catch (err){
        console.log(err)
    }
} 
