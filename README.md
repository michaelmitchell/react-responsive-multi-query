[![github tag](https://img.shields.io/github/tag/michaelmitchell/react-responsive-multi-query.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/react-responsive-multi-query.svg)](https://badge.fury.io/js/react-responsive-multi-query)
[![npm license](https://img.shields.io/npm/l/react-responsive-multi-query.svg?maxAge=2592000)]()
[![Known Vulnerabilities](https://snyk.io/test/npm/react-responsive-multi-query/badge.svg)](https://snyk.io/test/npm/react-responsive-multi-query)

# react-responsive-multi-query

Simple higher order component that wraps components in [react-responsive](https://github.com/contra/react-responsive) media query components.

## Installation

```sh
$ npm install react-responsive-multi-query --save
```

## Example using [react-responsive](https://github.com/contra/react-responsive)

```javascript
...
import MediaQuery from 'react-responsive';

const Viewport = () => (
  <div>
    <MediaQuery minWidth={1921} maxWidth={99999}>
      <MyResponsiveComp mediaSize={'xl'} />
    </MediaQuery>
    <MediaQuery minWidth={1281} maxWidth={1920}>
      <MyResponsiveComp mediaSize={'l'} />
    </MediaQuery>
    <MediaQuery minWidth={721} maxWidth={1280}>
      <MyResponsiveComp mediaSize={'m'} />
    </MediaQuery>
    <MediaQuery minWidth={481} maxWidth={720}>
      <MyResponsiveComp mediaSize={'s'} />
    </MediaQuery>
    <MediaQuery minWidth={321} maxWidth={480}>
      <MyResponsiveComp mediaSize={'xs'} />
    </MediaQuery>
    <MediaQuery minWidth={0} maxWidth={320}>
      <MyResponsiveComp mediaSize={'xss'} />
    </MediaQuery>
  </div>
);
```

## Example using [react-responsive-multi-query](https://github.com/michaelmitchell/react-responsive-multi-query)

```javascript
...
import MultiQuery from 'react-responsive-multi-query';

const mediaQuery = [{
  query: { minWidth: 1921, maxWidth: 99999 },
  props: { mediaSize: 'xl' }
}, {
  query: { minWidth: 1281, maxWidth: 1920 },
  props: { mediaSize: 'l' }
}, {
  query: { minWidth: 721, maxWidth: 1280 },
  props: { mediaSize: 'm' }
}, {
  query: { minWidth: 481, maxWidth: 720 },
  props: { mediaSize: 's' }
}, {
  query: { minWidth: 321, maxWidth: 480 },
  props: { mediaSize: 'xs' }
}, {
  query: { minWidth: 0, maxWidth: 320 },
  props: { mediaSize: 'xxs' }
}];

const Viewport = () => (
  <MultiQuery query={mediaQuery}>
    <MyResponsiveComp />
  </MultiQuery>
);
```

# License

MIT
