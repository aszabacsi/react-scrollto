# react-scrollto

> ScrollIntoView wrapper component for React

[![NPM](https://img.shields.io/npm/v/react-scrollto.svg)](https://www.npmjs.com/package/react-scrollto) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-scrollto
```

## Usage

```jsx
import React, { Component } from 'react';

import { AnchorWithOptions } from 'react-scrollto';

const Anchor = AnchorWithOptions({
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