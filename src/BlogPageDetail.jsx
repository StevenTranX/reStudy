import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const BlogPageDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      BlogPageDetail
      <button
        onClick={() => {
          navigate('/');
        }}
        className='p-3 rounded-sm text-white bg-blue-700'
      >
        Click to navite to Home
      </button>
    </div>
  );
};

export default BlogPageDetail;
