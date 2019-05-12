import React from 'react';
import './PostText.scss';
//import ReactMarkdown from 'react-markdown';
import Markdown from 'markdown-to-jsx';//importamos componente MarkDown

//le pasamos en el data.content.body los datos
const PostText = ({ data }) => {
    return (
      <div className='postText'>
        <Markdown>{data.content.body}</Markdown>
      </div>
    );
}

export default PostText;