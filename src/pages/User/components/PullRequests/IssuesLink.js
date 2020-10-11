import React from 'react';

const IssuesLink = () => (
  <div className="flex flex-wrap justify-center content-center">
    <div className="text-gray-800 pb-4">
      Look at the following{' '}
      <a
        href="https://github.com/search?q=label:hacktoberfest+state:open+type:issue"
        className="text-orange"
        target="_blank"
        rel="noopener noreferrer"
      >
        issues
      </a>{' '}
      and start hacking!
    </div>
  </div>
);

export default IssuesLink;
