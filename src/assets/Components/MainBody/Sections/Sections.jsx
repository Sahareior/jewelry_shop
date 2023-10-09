import React, { useEffect, useState } from 'react';

const Sections = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('Poster.json')
            .then(res => res.json())
            .then(items => setData(items))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='grid grid-cols-2 p-32  gap-12 justify-items-center items-center'>
            {data.map(item => (
                <div  key={item.title} className='h-80 pr-[750px] relative' style={{ backgroundImage: `url(${item.img})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover' }}>
                <div className='absolute top-10 right-20'>
                    <h3>{item.header}</h3>
                    <h2>{item.title}</h2>
                </div>
                </div>
            ))}
        </div>
    );
};

export default Sections;
