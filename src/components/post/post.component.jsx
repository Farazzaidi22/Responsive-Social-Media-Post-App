import React from 'react';
import './post.styles.css'


const Post = ({id, title,body}) => {

    return (
        <div >
            <div className='post-border'>
                <h4 className='title'> { 
                        (title.length < 30)
                        ? <span> {title} </span>
                        : 
                        <span> {title.slice(0, 30) + "..."} </span>
                    } 
                </h4>
                <img src={`https://picsum.photos/${Math.floor(Math.random() * 1024)}`} className='img-short'></img>
                <p> { 
                        (body.length < 100)
                        ? <span> {body} </span>
                        : 
                        <span> {body.slice(0, 100) + "..."} </span>
                    }
                </p>
            </div>
        </div>

    );

}

export default Post