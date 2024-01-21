import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()/*this is 3rd this is used for getting data from api so we have a githubInfoLoader async method and fetch data so this useLoaderData() hook is used for give data for return value like setData(data) then enter data into return h1 tag */
    const {userGit} = useParams()
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Usergit: {userGit}
        <div>
          <h1>Hitesh followers: {data.followers} </h1>  
        </div>
        <div>
            <img src={data.avatar_url} width={300} alt="image" />
        </div>
        </div>
  )
}

export default Github

export const githubInfoLoader =/* 1st then main.jsx*/ async() => {
const res = await fetch("https://api.github.com/users/hiteshchoudhary")
return res.json()
}/* this is a method to request and fetch some data from api this is used for when we hover our component logo or something blala then the request is been going work and fetch data then we click the the component the data is already there thats all  this method goes to main.jsx is as it is */