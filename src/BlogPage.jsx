import React from 'react';
import { useSearchParams } from 'react-router-dom';
const BlogPage = () => {
  // ?? làm sao để tìm được giá trị search ở trên thanh url /?search=hello-world
  // ?  làm sao để tìm thấy giá trị của /?search
  // * -> import useParams, hook này sẽ trả ra [url, và 1 function  ]
  // * -> lấy giá trị search của url bằng cách url.get('search')
  console.log(useSearchParams());
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('search'));
  return <div>BlogPage</div>;
};

export default BlogPage;
