import React from 'react';
import { Helmet } from 'react-helmet';

const Comments = () => {
  return (
    <>
      <div id="commento"></div>
      <Helmet>
        <script defer src="https://cdn.commento.io/js/commento.js"></script>
      </Helmet>
    </>
  )
}

export default Comments;