import React from 'react';
import { useContext } from '../../ProvideContext/Provider';
import { postProduct } from '../../ApiCalls/Api';

const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
};

const buttonStyle = {
    width: '8rem',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#ff007f',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
};

const AddItems = () => {
    const { user } = useContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const date = e.target.date.value;
        const image = e.target.image.value;
        const email = user.email;
        const category = e.target.category.value;
    
        // Check if all fields are filled
        if (name && price && date && image && email && category) {
            const data = { name, price, date, email, image, category };
    
            // Call your API function to post the data (assuming postProduct is a function that posts the data)
            postProduct(data);
    
            alert("Successfully uploaded your information");
    
            // Reset the form fields
            e.target.reset();
        } else {
            alert("Please provide information about your product");
        }
    };
    

    return (
        <div className='py-12'>
            <section style={{ padding: '5rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', marginBottom: '1rem' }}>Add New Item</h1>
  
                <form onSubmit={handleSubmit} className='flex bg-slate-200 p-14 items-center justify-center flex-col gap-6'>
                   <div  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                   <div>
                        <label htmlFor="username" style={{ color: 'black' }}>Product Title</label>
                        <input id="username" type="text" name='name' style={inputStyle} />
                    </div>
                    <div>
                        <label htmlFor="emailAddress" style={{ color: 'black' }}>Price</label>
                        <input id="emailAddress" type="text" name='price' style={inputStyle} />
                    </div>
                    <div>
                        <label htmlFor="category" style={{ color: 'black' }}>Category</label>
                        <select id="category" name="category" style={inputStyle}>
                            <option value="necklaces">Necklaces</option>
                            <option value="earrings">Earrings</option>
                            <option value="bracelets">Bracelets</option>
                            <option value="Ring">Ring</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="date" style={{ color: 'black' }}>Date</label>
                        <input id="date" type="date" name='date' style={inputStyle} />
                    </div>
                    <div>
                        <label htmlFor="image" style={{ color: 'black' }}>Image</label>
                        <input id="image" type="text" name='image' style={inputStyle} />
                    </div>
                   </div>
                    <button className='' type="submit" style={buttonStyle}>Upload</button>
                </form>
            </section>
        </div>
    );
};

export default AddItems;
