import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
    const hackerApiList = data
    if (!hackerApiList) return null
  return (
    <>
      {hackerApiList.map((item, index) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </>
  );
};

export default withLoading(FetchingData, 'https://hn.algolia.com/api/v1/search?query=react' );
