import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/agus7fauzi/personal-site/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork agus7fauzi/personal-site on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/agus7fauzi/personal-site"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star agus7fauzi/personal-site on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
