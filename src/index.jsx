//
import React, { createElement } from 'react';

//
import MediaQuery from 'react-responsive';

//
export default (props) => {
  const { component, query, children, ...moreProps } = props;

  //
  const mediaQueries = query.map((v, k) => {
    // string or object style query?
    const queryProps = (typeof v.query === 'string')
      ? { query: v.query }
      : v.query;

    return (
      <MediaQuery key={k} {...queryProps}>
        {
          typeof children === 'function'
            ? children(v.props)
            : React.cloneElement(children, v.props)
        }
      </MediaQuery>
    );
  });

  //
  return mediaQueries.length > 1
    ? createElement(component || 'div', moreProps, mediaQueries)
    : mediaQueries[0];
};
