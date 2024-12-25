import React, {useState} from 'react'
import './disp.css';

export default function CreateProduct() {
    const [productDetails, setProductDetails] = useState({
        name: '',
        price: '',
        brand: '',
        category: '',
        size: '',
        color: '',
        description: '',
        inStock: false,
    })
    const URL = "https://clothingapp-p5xm.onrender.com";

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setProductDetails((prevProduct) => ({
            ...prevProduct, [name]: value
        }))
    }

    const handleSubmit = async (event)=> {
        try{
            event.preventDefault();

            const response = await fetch(`${URL}/api/create`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productDetails)
            });
            const result = response.json();
            setProductDetails({
                 name: '',
                price: '',
                brand: '',
                category: '',
                size: '',
                color: '',
                description: '',
                inStock: false,
            })
        }catch(error){
            console.log(error)
        }

    }

  return (
    <div className='container'>
        <h4>Create product</h4>
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type='text' name="name" value={productDetails.name} placeholder='product name' onChange={handleChange} />
            </label>
                <br />
            <label>
                 Price: 
                <input type='number' name='price' value={productDetails.price} onChange={handleChange}  />
            </label>
                <br />
            <label>
                Brand:
                <input type='text' name='brand' value={productDetails.brand} placeholder='brand name' onChange={handleChange} />
            </label>
            <br />
            <label>
            Category: 
            <input type='text' name='category' value={productDetails.category} placeholder='category' onChange={handleChange} />
            </label>
            <br />
            <label>
            Size: 
            <input type='text' name='size' value={productDetails.size} placeholder='size' onChange={handleChange} />
            </label>
            <br />
            <label>
            Color:
            <input type='text' name='color' value={productDetails.color} placeholder='color' onChange={handleChange} />
            </label>
            <br />
            <label>
            Description: 
            <input type='text' name='description' value={productDetails.description} placeholder='description' onChange={handleChange} />
            </label>
            <br />
            <label>
            inStock:
            <input type='checkbox' name='inStock' checked={productDetails.inStock} onChange={()=> setProductDetails((prevProduct) =>({...prevProduct, inStock: !prevProduct.inStock}) )} />
            </label>
            <br/>
            <button type='submit'>create Product</button>
        </form>
    </div>
  )
}
