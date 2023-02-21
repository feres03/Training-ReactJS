import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductsList() {
    const [products, setproducts] = useState([])

    const fetchdata = async () => {
        const list = await axios.get("http://localhost:3000/products")
        setproducts(list.data)


    }
    useEffect(() => {
        fetchdata()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/products/${id}`)
        fetchdata()
    }


    return (
        <table className="table table-striped mt-3" style={{ backgroundColor: '#e3f2fd' }}>
            <thead>
                <tr>
                    <th>Nom du produit</th>
                    <th>Description du produit</th>
                    <th>Quantité du produit</th>
                    <th>Prix du produit</th>
                    <th >Update</th>
                    <th>Delete</th>







                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, index) => {
                        return (



                            <tr key={index}>
                                <td>
                                    {product.nom}
                                </td>
                                <td>
                                    {product.desc}
                                </td>
                                <td>
                                    {product.quantity}
                                </td>
                                <td>
                                    {product.Price}
                                </td>
                                <td>
                                    <Link to={`/updateproduct/${product.id}`} className='btn btn-success'>Update</Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={(() => { handleDelete(product.id) })}>Delete</button>
                                </td>
                            </tr>


                        )

                    }
                    )
                }
            </tbody>
        </table>
    )
}

export default ProductsList