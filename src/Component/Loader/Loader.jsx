import React from 'react'
import './Style.css'
const Loader = () => {
  return (
    <div className="loader_section">
         <div className='loader'>Loader</div>
    </div>
  )
}

export default Loader













import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState(null);
    const [sortOrder, setSortOrder] = useState('aec');
    const [sortByPriceOrder, setSortByPriceOrder] = useState('aec');

    useEffect(() => {
        const apiData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products?sort=${sortOrder}`);
                setProducts(res.data);
            } catch (error) {
                console.log('Products Not Found :', error);
            }
        };
        apiData();
    }, [sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handleSortByPriceOrderChange = (e) => {
        setSortByPriceOrder(e.target.value);
    };

    useEffect(() => {
        if (products) {
            const sortedProducts = [...products].sort((a, b) => {
                if (sortByPriceOrder === 'aec') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });
            setProducts(sortedProducts);
        }
    }, [sortByPriceOrder]);

    return (
        <>
            <div className='sort_section'>
                Sort Order:
                <select value={sortOrder} onChange={handleSortChange}>
                    <option value='aec'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                Sort By Price:
                <select value={sortByPriceOrder} onChange={handleSortByPriceOrderChange}>
                    <option value='aec'>Low to High</option>
                    <option value='desc'>High to Low</option>
                </select>
            </div>

            <div className='prodcut_grid'>
                {products?.map((item, index) => {
                    return (
                        <Link to={`/product_details/${item.id}`} className='card' key={item.id}>
                            <img src={item.image} alt='' />
                            <div className='name'>{item.title}</div>
                            <div className='price'>{item.price}</div>
                            <div className='rating'>
                                <p>{item.rating.rate}</p>
                                <p>{item.rating.count}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Products;
