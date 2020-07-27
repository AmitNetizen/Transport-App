import React from 'react';

import './index.css';
function ErrorSection({ errorMsg }) {
  return <div className="error-section">{errorMsg}</div>;
}

export default ErrorSection;
