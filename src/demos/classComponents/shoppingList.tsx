import React from "react";
interface PropsType {
  name: string;
}
interface StateType {
  value: string | null;
}
export class ShoppingList extends React.Component<PropsType, StateType> {
  myRef: React.RefObject<any>;
  constructor(props: PropsType) {
    super(props);
    this.state = {
      value: null,
    };
    this.myRef = React.createRef();
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (value: string) => {
    const node = this.myRef.current;
    console.log(node);
    this.setState({ value: value });
  }
  render(): React.ReactNode {
    return (
      <div className="shoppingList" ref={this.myRef}>
        <h1>Shopping List for {this.props.name} </h1>
        <button className="square" onClick={this.handleClick.bind(this, 'X')}>
          {this.state.value}
        </button>
      </div>
    );
  }
}
