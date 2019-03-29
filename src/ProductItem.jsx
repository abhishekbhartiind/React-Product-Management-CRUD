import React, { Component } from 'react'

class ProductItem extends Component {
  constructor(props){
    super(props)
    
    this.state = {isEdit: false}
    this.onEdit = this.onEdit.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }
  onEdit(){
    this.setState({isEdit: true})
  }
  onEditSubmit(e){
    e.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name)
    //normally we use id
    this.setState({isEdit: false})
  }
  onDelete(){
    this.props.onDelete(this.props.name)
  }
  render() {
    const {name, price} = this.props;
    return (
      <div>
          {this.state.isEdit ? (
            <div>
               <form onSubmit={this.onEditSubmit}>
                <hr/>
                <h3>Edit Products</h3>
                <input placeholder="Name" 
                  ref={nameInput => this.nameInput = nameInput}
                  defaultValue={name}
                /> 
                {' '}
                <input placeholder="Price" 
                  ref={priceInput => this.priceInput = priceInput}
                  defaultValue={price}
                />
                {' '}
                <button>Save Edited</button>
                <hr/>
              </form>
            </div>
          ): (
           <div key={name}>  
            <span>{name}</span>
            {' | '} 
            <span>${price}</span> 
            {' '}
            <button onClick={this.onEdit}>Edit</button>
            {' '}
            <button onClick={this.onDelete}>Delete</button>
           </div> 
          )}
          
      </div>
    )
  }
}
export default ProductItem