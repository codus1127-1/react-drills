import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Products extends React.Component{
    constructor(){
        super()
        this.state={
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://practiceapi.devmountain.com/products").then(response => {
          this.setState({ products: response.data });
        });
      }
    
    

    render(){
        let products = this.state.products.map((product, index) => {
            if (product.image) {
                return (
                    <Link key={index} to={`/details/${product.id}`}>
                        <img width='200' src={product.image} />
                    </Link>
                )
            }
        })
        return(
            <div className="products">
                <h1>Products</h1>
                {products}
            </div>
        )
    }
}
