import React from 'react'
import "./HomeScreen.css"
import Nav from '../../Component/Nav/Nav'
import Banner from '../../Component/Banner/Banner'
import Row from '../../Component/Row/Row'
import requests from '../../helpers/requests'

const HomeScreen = () => {
  return (
    <div className='HomeScreen'>
        <Nav />

        <Banner />

        <Row 
        title={'NETFLIX ORIGINALS'}
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true} //you can only pass isLarge becouse you dont mention any thing(True or false)isLarge take true
        />

        <Row title={'Trending Now'}fetchUrl={requests.fetchTrending}/>
        <Row title={'Top Rated'}fetchUrl={requests.fetchTopRated}/>
        <Row title={'Action Movie'}fetchUrl={requests.fetchActionMovies}/>
        <Row title={'Comedy Movie'}fetchUrl={requests.fetchComedyMovies}/>
        <Row title={'Romantic Movie'}fetchUrl={requests.fetchRomanceMovies}/>
        <Row title={'Horrer Movie'}fetchUrl={requests.fetchHorrorMovies}/>
        <Row title={'Documentaries'}fetchUrl={requests.fetchDocumentaries}/>
        
        
    </div>
  )
}

export default HomeScreen