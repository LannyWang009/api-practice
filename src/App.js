import React, { useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const api ={
  link: 'https://api.nasa.gov/planetary/apod?',
  api_key: 't1OrOzDZ7OKC4gVNioVI2an00u2g5oReVWz2qifH',
  count: 5
}

const getData = async () =>  {
  let useData = [];
  try {
    const res = await axios.get(
      ""+ api.link + "api_key=" + api.api_key + "&count=" + api.count
    )
    
    // console.info('res.data', res.data)
    useData = res.data
    // console.info('useData', useData) // array of titles
    return useData
    // setData(useData)
  } 
   catch (err) {
     console.error(err)
  }
}

// uplift
// move getData outside the async into useEffect to make functions more pure

export default function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    getData()
    .then((data)=>setData(data)
    )}, [])
  // telling to run it the first it mounts

  
  return (
    <div>
      {data.map((element) => (<div key={element.mal_id}> {element.title} </div>))}
    </div>
  )
}