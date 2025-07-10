import React, { Component, Fragment } from "react";
import "../ProductComponent.css";

class ProductCard extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="img-thumb-prod">
            <img
              src="https://images.unsplash.com/photo-1677743540715-d4fe04852225?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <p className="product-title">Daging Ayam Berbumbu 10 pack</p>
          <p className="product-price">Rp 140.000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>
              -
            </button>
            <input type="text" value={this.state.order} />
            <button className="plus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductCard;
