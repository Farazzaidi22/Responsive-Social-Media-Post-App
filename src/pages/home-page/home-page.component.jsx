import React, { useEffect } from 'react';

import Post from '../../components/post/post.component';
import Header from '../../components/header/header';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import './home-page.styles.css'

const Home = ({posts}) => {

  const valueRef = React.useRef('') //creating a refernce for TextField Component

  const sendValue = () => {
      console.log(posts)
      posts = posts.filter(post => post.title.includes(valueRef.current.value))
  }

  return(
    
    <Container component="main" maxWidth="lg" >
     <Header title='home'/>
     
      <TextField
          sx={{ marginBottom:'30px'}}
          placeholder="Type to Search"
          size="small"
          inputRef={valueRef}
          onKeyDown={sendValue}
          type="search"
      />
      {/* <IconButton type="submit" aria-label="search" onClick={sendValue}>
        <SearchIcon />
      </IconButton> */}
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 8 }}>
            {
              posts.map((post) =>  (
                <Grid item xs={2} sm={4} md={4} >
                  <Post id={post.id} key={post.id} title={post.title} body={post.body}/>
                </Grid>
              ))
            }
      </Grid>
    </Container>
  )
}

export default Home
