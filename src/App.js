import './App.css';

import { Routes, Route, Navigate  } from 'react-router-dom'

import React from 'react';

import Home from './pages/home-page/home-page.component';


function App() {


  const [posts, setPosts] = React.useState([])

  React.useEffect( () => {
    fetchData()
    console.log(fetchData())
  }, [])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">

    <Routes>
        <Route exact path='/'  element={ <Home posts={posts}/> }/>
    </Routes>

    </div>
  );
}

export default App;
