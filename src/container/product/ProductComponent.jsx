import React, { Component, Fragment } from "react";
import "./ProductComponent.css";
import ProductCard from "./card/ProductCard";

class ProductComponent extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
        order: newValue
    })
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="https://img.icons8.com/?size=100&id=9TzGPStwV5zz&format=png&color=000000"
              alt=""
            />
          </div>
          <div className="trolley">
            <img
              src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <ProductCard onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default ProductComponent;
