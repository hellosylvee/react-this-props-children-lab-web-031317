import React, { Component } from 'react' ;

class ThemedDecoration extends Component {
  constructor(){
    super()
  }

  render(){

    const updatedChildren = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      )
    });

    return(
      <div>
        {updatedChildren}
      </div>
    );
  }
}

export default ThemedDecoration

// A good party also has a theme and decorations that match. Let's create a component that takes its children and adds an additional prop to them. This way we can pass in the theme to our decorations by wrapping them in this component.

// In the components/ThemedDecorations.js file, create a ThemedDecorations React component.
// This component renders out all of its children, while adding a className prop to every child.
