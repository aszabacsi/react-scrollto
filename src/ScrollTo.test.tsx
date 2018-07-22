import * as React from 'react';
import { Anchor, anchorWithOptions } from './ScrollTo';
import { shallow } from 'enzyme';

describe('ScrollTo', () => {

  const child = Object.freeze(<span>Child</span>);

  it('Anchor should contain child component', () => {
    const anchor = shallow(<Anchor hash='hash'>{child}</Anchor>);
    expect(anchor.contains(child)).toBe(true);
  });

  it('AnchorSmooth should contain child component', () => {
    const AnchorSmooth = anchorWithOptions({
      behavior: 'smooth'
    });
    const anchor = shallow(<AnchorSmooth hash='hash'>{child}</AnchorSmooth>);
    expect(anchor.contains(child)).toBe(true);
  })

});
