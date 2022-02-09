import React from 'react';
import './post.styles.css'


const Post = ({id, title,body}) => {


    return (
        <div >
            <div style={{border:'1px solid black',padding:'5px',marginBottom:'5px'}}>
                <h4 className='title'> {title} </h4>
                <p> { body }</p>
            </div>
        </div>

    );

}

export default Post