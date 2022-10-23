import React from "react";
export class Context1 extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props: any) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component<any, any> {
  render() {
    return <span>{this.props.theme}</span>;
  }
}

const ThemeContext = React.createContext('light');
export class Context2 extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="light">
        <Toolbar2 />
      </ThemeContext.Provider>
    )
  }
}
function Toolbar2(props: any) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton2/>
    </div>
  );
}


class ThemedButton2 extends React.Component<any, any> {
  static contextType = ThemeContext;
  render() {
    return <span>{(this.context as any)}</span>;
  }
}
