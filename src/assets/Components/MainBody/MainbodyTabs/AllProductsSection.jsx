import React, { useState } from 'react';
import Headers from '../../Shared/Headers/Headers';
import AllTabs from '../../Shared/AllTabs';
import TabSection from './TabsSections/TabSection';
import Card from '../../Shared/Card/Card';
import { useContext } from '../../ProvideContext/Provider';

const AllProductsSection = () => {
    const { value } = useContext();
    const [visibleProducts, setVisibleProducts] = useState(4); // Initial number of products to display
    const totalProducts = value.length;

    const handleLoadMore = () => {
        setVisibleProducts(prev => prev + 4); // Increase the number of visible products by 4
    };

    return (
        <div className='mt-10 flex justify-center items-center flex-col'>
            <Headers text={"Our Products"}></Headers>
            <div className='grid mt-10 grid-cols-4 px-24'>
                {value.slice(0, visibleProducts).map(items => (
                    <Card key={items._id} price={items.price} image={items.image} name={items.name}></Card>
                ))}
            </div>
            {visibleProducts < totalProducts && (
                <button className='btn btn-accent ' onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
};

export default AllProductsSection;
