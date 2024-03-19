import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <h1>This Dynamic Page With : {params.productID}</h1>
    </div>
  );
};

export default DynamicPage;
