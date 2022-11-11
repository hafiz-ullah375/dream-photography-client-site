import React from 'react';
import useHelmet from '../../Shared/Helmet/Helmet';

const Blogs = () => {
    useHelmet('blogs');
    return (

        <div>
            <h1>blogs</h1>
        </div>
    );
};

export default Blogs;