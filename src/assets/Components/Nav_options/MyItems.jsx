import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyItems = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
             {
                data.length !== 0 ?    <div className="overflow-x-auto">
                <table className="table table-lg table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th>#</th> 
                            <th>Name</th> 
                            <th>Price</th> 
                            <th>Material</th> 
                            <th>Image</th> 
                        </tr>
                    </thead> 
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.material}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="mask mask-squircle w-24">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody> 
                    <tfoot>
                        <tr>
                            <th>#</th> 
                            <th>Name</th> 
                            <th>Price</th> 
                            <th>Material</th> 
                            <th>Image</th> 
                        </tr>
                    </tfoot>
                </table>
            </div> : <h2 className='py-72 font-serif text-2xl'>You haven't added any items</h2>
             }
        </div>
    );
};

export default MyItems;