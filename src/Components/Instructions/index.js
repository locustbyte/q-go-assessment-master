import React from 'react';

const Instructions = () => {
  return (
    <div className={'instructions'}>
      <h2>To run tests: npm test</h2>
      <hr />
      <h2>Production Build: yarn build (npm install yarn)</h2>
      <h4>(Produce minified scripts etc)</h4>
      <hr />
    </div>
  );
};

export default Instructions;
