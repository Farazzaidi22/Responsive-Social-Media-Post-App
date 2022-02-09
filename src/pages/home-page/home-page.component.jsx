import React from 'react';
import { useNavigate } from "react-router-dom";

import Post from '../../components/post/post.component';
import Header from '../../components/header/header';
import CustomButton from '../../components/custom-button/custom-button.component';


import './home-page.styles.css'

const Home = ({posts}) => {

  const navigate = useNavigate();

  return(
    <div >
        <Header title='home'/>
        <div className='container-body'>
          {
            posts.reverse().map((post) =>  (
              <Post id={post.id} key={post.id} title={post.title} body={post.body}/>
              ))
          }
        </div>
        {/* <CustomButton title='Add post' onClick={function () { navigate("/addpost"); }}/> */}

    </div>
  )
}

export default Home
