import Card from '../Card';
import products from './../../utils/mockData';
import {useState, useEffect} from 'react';
const Container = ()=>{
    const [productsList, setProductList] = useState([]);

useEffect(()=>{
    setProductList(products.products);

},[]);
return <section className="main-container">
    <div className="card-wrapper">
        {productsList.map((product)=>{

            return <Card key={product.id} productData={product} />
        })}
    </div>
</section>
}

export default Container;