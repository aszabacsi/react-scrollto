# react-scrollto

> Declarative scrollIntoView component for React


[![NPM](https://img.shields.io/npm/v/@aszabacsi/react-scrollto.svg)](https://www.npmjs.com/package/@aszabacsi/react-scrollto) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @aszabacsi/react-scrollto
```

## Description

The Anchor component decorates the child component with an anchor passed to it's hash property. You can override the default scrolling behaviour by creating a custom Anchor type using the anchorWithOptions higher-order component. You have to pass Anchor component as it's first argument and the options object as the second. The option object is the same as the the built-in options objects of the vanilla scrollIntoView function.

## Usage

```jsx
import React, { Component } from 'react';

import { anchorWithOptions } from 'react-scrollto';

const Anchor = anchorWithOptions({
  behaviour: 'smooth'
});

const setHash = (hash) => {
  window.location.hash = hash;
}

class Example extends Component {
  render () {
    return (
      <div>
        <button onClick={setHash.bind(null, 'first')}>First</button>
        <button onClick={setHash.bind(null, 'second')}>Second</button>
        <button onClick={setHash.bind(null, 'third')}>Third</button>
        <p>Some text here...</p>;
          <Anchor anchor='first'>First</Anchor>;
        <p>Some text here...</p>;
          <Anchor anchor='second'>Second</Anchor>;
        <p>Some text here...</p>;
          <Anchor anchor='third'>Third</Anchor>;
      </div>
    )
  }
}
```

## License

MIT © [aszabacsi](https://github.com/aszabacsi)