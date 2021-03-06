import React from 'react';
import PropTypes from 'prop-types';


class CartAddButton extends React.Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const { addtoCart, productName } = this.props;
    addtoCart(productName);
  }

  render() {
    return (
      <div>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleButtonClick }
          type="button"
        >
          Adicionar Botão
        </button>
      </div>
    );
  }
}

CartAddButton.propTypes = {
  addtoCart: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
};

export default CartAddButton;
