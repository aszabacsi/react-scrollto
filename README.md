# react-scrollto

> Declarative scrollIntoView component for React


[![NPM](https://img.shields.io/npm/v/@aszabacsi/react-scrollto.svg)](https://www.npmjs.com/package/@aszabacsi/react-scrollto) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @aszabacsi/react-scrollto
```

## Description

Creating scroll into view animations in a declarative style using React components. You can ovverride the default scroll behaviour by creating your own custom component using the anchorWithOptions HOC.

## Usage

Wrap the autoscroll target components with the base Anchor component (or create your own using the anchorWithOptions HOC).

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
  scrollTo = (hash) => {
    setHash(hash);
  }
  render () {
    return (
      <div>
        <button onClick={this.scrollTo('first')}>First</button>
        <button onClick={this.scrollTo('second')}>Second</button>
        <button onClick={this.scrollTo('third')}>Third</button>
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
