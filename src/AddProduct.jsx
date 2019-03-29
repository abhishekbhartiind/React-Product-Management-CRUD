import React, { Component } from 'react'

class AddProduct extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.nameInput.value, this.priceInput.value)
    this.nameInput.value = ''
    this.priceInput.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <hr/>
          <h3>Add Products</h3>
          <input placeholder="Name" 
            ref={nameInput => this.nameInput = nameInput}
          /> 
          {' '}
          <input placeholder="Price" 
            ref={priceInput => this.priceInput = priceInput}
          />
          {' '}
          <button>Add</button>
          <hr/>
        </form>
      </div>
    )
  }
}
export default AddProduct