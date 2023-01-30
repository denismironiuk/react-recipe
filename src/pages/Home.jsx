import React, { useState,useEffect } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

import CategoryList from '../components/CategoryList'
import Search from '../components/Search'

import {getAllCategories} from '../configuration/api'


function Home() {
    const [categoryList,setCategorieList]=useState([])
    const [filteredCatalog,setFilteredcatalog]=useState('')

    const{pathname,search}=useLocation()
    const navigate=useNavigate()
   

    const handleSearch=(str)=>{
      setFilteredcatalog(
        categoryList.filter(item=>item.strCategory.toLowerCase().includes(str.toLowerCase()))
      )
      navigate({
        pathname,search:`?search=${str}`
      })
    }
  
    
   useEffect(()=>{
     getAllCategories().then((data)=>{
      
         setCategorieList(data.categories)
         setFilteredcatalog(search ?(data.categories.filter(item=>item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()))):(data.categories))
     })
    
   },[search])
  return (
    <>
    <Search cb={handleSearch}/>
   {filteredCatalog ?(<CategoryList categoryList={filteredCatalog}/>):(<p>Loading...</p>)}
    </>
  )
}

export default Home