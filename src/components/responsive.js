import React, { PropTypes, Component } from "react";

// 10rem === 120px
const Responsive = (_, { viewport }) => <img src={viewport && `http://placehold.it/${viewport.w - 120}x100/000000/ffffff`} />;

Responsive.contextTypes = { viewport: PropTypes.object };

export default Responsive;
