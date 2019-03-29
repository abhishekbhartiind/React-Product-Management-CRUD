import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './products'
import ProductItem from './ProductItem'
import AddProduct from './AddProduct'

localStorage.setItem('products', JSON.stringify(Products))

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    }
    this.onAdd = this.onAdd.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }
  componentWillMount(){
    const products = this.getProduct()
    this.setState({products})
  }
  getProduct(){
    return this.state.products
  }
  onAdd(name, price){
    const products = this.getProduct()
    products.push({
      name,
      price
    })
    this.setState({products})
  }
  onDelete(name){
    const products = this.getProduct()
    const filteredProduct = products.filter(product => {
      return product.name !== name
    })
    console.log(filteredProduct)
    //match the name of poduct to delete
    this.setState({products: filteredProduct})
  }
  onEditSubmit(name, price, orignalName){
    let products = this.getProduct()
    products = products.map(product => {
      if(product.name === orignalName){
        product.name = name;
        product.price = price;
      }
      return product
    })
    this.setState({products})
  }
  render() {
    return (
      <div className="App">
        <h1>React Product Management CRUD</h1>
        <AddProduct onAdd={this.onAdd}/>
        {this.state.products.map(product => {
          return (
            <ProductItem
              key={product.name}
              {...product}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
