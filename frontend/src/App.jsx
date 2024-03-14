import { useState ,useEffect} from 'react'
// import axios from 'axios';
import './App.css'
import Tables from './components/Tables'
function App() {
  // const[data,setData]=useState([]);
  // const[error,setError]=useState([""]);
  // const URI="https://file.notion.so/f/f/ca71608c-1cc3-4167-857a-24da97c78717/b041832a-ec40-47bb-b112-db9eeb72f678/sample-data.json?id=ce885cf5-d90e-46f3-ab62-c3609475cfb6&table=block&spaceId=ca71608c-1cc3-4167-857a-24da97c78717&expirationTimestamp=1710504000000&signature=XVcDYcR6ShFnNLSby0iZeZ-yplDio_FGMLGsBGyZpQo&downloadName=sample-data.json";
  // const gettheData =async(url) =>{
  //   try{
  //     const res= await axios.get(url)
  //     setData(res.data);
  //   }
  //   catch(err){
  //     setError(err.message);
  //   }
  // }
  // useEffect(()=>{
  //   gettheData(`${URI}`);
  // }
  //   ,[]);
  return (
    <>
      {/* <h1>Hello</h1>
      { error !="" && <p>{error}</p> }
      <div className='grid'>
        {data.map((datas)=>(
          <div className='table' key={datas.id}>
          <h2>{datas.name}</h2>
          <p>{datas.category}</p>
          <p>{datas.created_at}</p>
          </div>
        ))}
      </div> */}

      <div>
        <Tables/>
      </div>
    </>
  )
}

export default App
