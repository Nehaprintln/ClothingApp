import React, {useState, useEffect} from 'react'

export default function DisplayData() {
    const [clothDatas, setClothData] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);

    console.log(clothDatas);
    const URL = 'https://clothingapp-p5xm.onrender.com';

    const displyData = async()=>{
        try{
            const response = await fetch(`${URL}/api/product`);
        if(!response){
            console.log('Error in fetch')
        }
        const result = await response.json();
        setClothData(result);
        }catch(error){
            console.log(error);
        }
        
    }
    const onClose = ()=> {
        setSelectedItemId(null);
    }


    // ==== make your URL base===
    const handleUpdate = async (updatedData) => {
        // TODO: ==== below code
        // try {
        //     const response = await fetch(`${URL}/${updatedData._id}`, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(updatedData),
        //     });

        //     if (response.ok) {
        //         // Update the local state with the updated data
        //         setClothData(clothDatas.map(item => item._id === updatedData._id ? updatedData : item));
        //         setSelectedItemId(null); // Close the modal after update
        //     } else {
        //         console.log('Failed to update data');
        //     }
        // } catch (error) {
        //     console.log('Error updating data:', error);
        // }
    };
    // ===================*********************=======
   
    useEffect(()=>{
        // displyData();
    },[])
  return (
    <div>
        <h4>Display Product</h4>
        <div style={{display: 'flex', gap: '30px'}}>
                {clothDatas.map(data => (
                    <div key={data?._id} style={{border: '1px solid gray', padding: '5px'}}>
                        <p>Name: {data?.name}</p>
                        <p>Price: {data?.price}</p>
                        <p>Brand: {data?.brand}</p>
                        <p>Size: {data?.size}</p>
                        <p>Color: {data?.color}</p>
                        <p>Description: {data?.description}</p>
                        <p>{`inStock: ${data?.inStock ? 'true' : 'false'}`}</p>
                        <button onClick={()=> setSelectedItemId(data?._id)}>Update</button>
                        {selectedItemId === data}
                    </div>
                ))}
            </div>
    </div>
    
  )
}
