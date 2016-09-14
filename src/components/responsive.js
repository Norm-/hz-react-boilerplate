import React, { PropTypes, Component } from "react";

const Responsive = (_, { viewport }) => (
  <div id="resp">
    <img src={viewport && `http://placehold.it/${viewport.w - 120}x100/000000/ffffff`} />
  </div>
);

Responsive.contextTypes = { viewport: PropTypes.object };

export default Responsive;
