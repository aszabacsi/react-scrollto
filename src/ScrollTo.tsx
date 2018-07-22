import * as React from 'react';

interface IAnchorProps {
  children: React.ReactElement<HTMLElement>;
  hash: string;
  options?: ScrollIntoViewOptions;
};

export class Anchor extends React.Component<IAnchorProps, {}> {

  private rootNode: React.RefObject<HTMLDivElement>;

  constructor(props: IAnchorProps) {
    super(props);
    this.rootNode = React.createRef();
  }

  public componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange.bind(this));
  }

  public componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChange.bind(this));
  }

  public render() {

    const { children } = this.props;

    return children instanceof Array ? 
      <div ref={this.rootNode}>
        {children}
      </div> 
      :
      React.cloneElement(children, {
        ref: this.rootNode
      })
    
  }

  private onHashChange() {
    if(window.location.hash === `#${this.props.hash}`) {
      if(this.rootNode.current !== null) {
        this.rootNode.current.scrollIntoView(this.props.options);
      }
    }
  }
}

export const anchorWithOptions = (options: ScrollIntoViewOptions) => {
  return ({ children, ...rest }: IAnchorProps) => <Anchor options={options} {...rest}>{children}</Anchor>;
}