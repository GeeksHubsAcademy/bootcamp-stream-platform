import React from 'react';
import ReactTinyLink from 'react-tiny-link';
import { isURL } from 'validator';
import './UrlPreview.scss'
const isUrl = url =>
    isURL(url, {
        // protocols: ['http', 'https', 'ftp'],
        protocols: ['http', 'https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: false,
        host_whitelist: false,
        host_blacklist: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        disallow_auth: false,
    });


const UrlPreview = ({ url, ...props }) => (
    <div className='UrlPreview'>
        {isUrl(url)
            ? <ReactTinyLink
                url={url}
                cardSize='medium'
                width='100%'
                maxLine={5}
                {...props} />
            : <div className='no-valid'>url no válida</div>}</div>
);


export default UrlPreview
