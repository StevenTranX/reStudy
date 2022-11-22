import React from 'react';
import useLinkNewTab from './useLinkNewTab';
import useHover from './userHover';

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className='entry-content' ref={contentRef}>
      <p className='mb-5'>
        <a
          ref={nodeRef}
          href='https://google.com'
          className={`underline ${hovered && 'text-green-400'}`}
        >
          google.com
        </a>
      </p>
      <p className='mb-5'>
        <a
          ref={nodeRef}
          href='https://google.com'
          className={`underline ${hovered && 'text-green-400'}`}
        >
          google.com
        </a>
      </p>
    </div>
  );
};

export default Blog;
