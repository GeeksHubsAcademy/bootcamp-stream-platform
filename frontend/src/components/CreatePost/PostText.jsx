import React from 'react';
import './PostText.scss';
//import ReactMarkdown from 'react-markdown';
import Markdown from 'markdown-to-jsx';//importamos componente MarkDown


const PostText = ({ data }) => {
    return (
        <div className='postText'>
        <Markdown>{JSON.stringify(data)}</Markdown>           
        </div>
    ) 
}

export default PostText;