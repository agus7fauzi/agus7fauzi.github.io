import React from 'react';
import { getUserLangKey } from 'ptz-i18n';
import { withPrefix } from 'gatsby-link';
import { navigate } from 'gatsby';

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const langKey = getUserLangKey(['en', 'id'], 'en');
      const homeUrl = withPrefix(`/${langKey}`);

      navigate(homeUrl, { replace: true });
    }
  }

  render() {
    return <div />;
  }
}

export default RedirectIndex;
