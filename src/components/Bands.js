import React from "react";
import Band from "./Band";

class Bands extends React.Component {
  renderBands = () => {
    return this.props.bands.map((band) => (
      <Band key={band.id} band={band} delete={this.props.delete} />
    ));
  };

  render() {
    return this.renderBands();
  }
}

export default Bands;
