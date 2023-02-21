// import axios from 'axios';
// import { Formik } from 'formik';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';

// function Updateproduct() {
//     const [product, setProduct] = useState({})
//     const navigate = useNavigate()
//     const params = useParams()
//     useEffect(() => {
//         const fetch = async () => {
//             const response = await axios.get(`http://localhost:3000/products/${params.id}`)
//             setProduct(response.data)
//         }
//         fetch()
//     }, [params.id])



//     return (
//         <div className='container mt-5'>
//             <h3 className='text-center text-secondary'>Add Product</h3>
//             <div className="row  d-flex justify-content-center">
//                 <Formik
//                     initialValues={product || { nom: '', desc: '', quantity: '', Price: '' }}
//                     validate={values => {
//                         const errors = {};
//                         if (!values.nom) {
//                             errors.nom = "Ce champs est obligatoire."
//                         }
//                         if (!values.desc) {
//                             errors.desc = 'Ce champs est obligatoire.'
//                         }
//                         if (!values.quantity) {
//                             errors.quantity = 'Ce champs est obligatoire.'
//                         }
//                         else if (values.quantity <= 0) {
//                             errors.quantity = 'La quantité doit etre positive'
//                         }
//                         if (!values.Price) {
//                             errors.Price = 'Ce champs est obligatoire.'
//                         }
//                         else if (values.Price <= 0) {
//                             errors.Price = 'Le prix doit etre positif'
//                         }

//                         return errors;
//                     }}
//                     onSubmit={async (values, { setSubmitting }) => {

//                         await axios.post("http://localhost:3000/products", values)
//                         navigate('/ProductsList')


//                     }}
//                     enableReinitialize
//                 >
//                     {({
//                         values,
//                         errors,
//                         touched,
//                         handleChange,
//                         handleBlur,
//                         handleSubmit,
//                         isSubmitting,
//                         /* and other goodies */
//                     }) => (
//                         <form className='col-6' onSubmit={handleSubmit}>
//                             <div className="mb-3">
//                                 <label>Nom du produit </label>
//                                 <input
//                                     type="text"
//                                     nom="nom"
//                                     className="form-control"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.nom} id="nom" />
//                             </div>
//                             {errors.nom && touched.nom && <div class="alert alert-danger" role="alert">{errors.nom} </div>}
//                             <div className="mb-3">
//                                 <label >Description</label>
//                                 <textarea type="text" className="form-control"
//                                     name="desc"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.desc} id="desc" />
//                             </div>
//                             {errors.desc && touched.desc && <div class="alert alert-danger" role="alert">{errors.desc} </div>}


//                             <div className="mb-3">
//                                 <label >Quantité</label>
//                                 <input type="number" className="form-control"
//                                     name="quantity"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.quantity} id="quantity" />
//                             </div>
//                             {errors.quantity && touched.quantity && <div class="alert alert-danger" role="alert">{errors.quantity} </div>}



//                             <div className="mb-3">
//                                 <label >Prix</label>
//                                 <input type="number" className="form-control" placeholder="/Dt"
//                                     name="Price"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.Price} id="Price" />
//                             </div>
//                             {errors.Price && touched.Price && <div class="alert alert-danger" role="alert">{errors.Price} </div>}



//                             <button className="btn btn-secondary w-100" type="submit" >
//                                 Submit
//                             </button>
//                         </form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     )
// }

// export default Updateproduct


import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function Updateproduct() {
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`http://localhost:3000/products/${params.id}`)
            setProduct(response.data)
        }
        fetch()
    }, [params.id])

    return (
        <div className='container mt-5'>
            <h3 className='text-center text-success'>Update Product</h3>
            <div className="row  d-flex justify-content-center">
                <Formik
                    initialValues={product || { nom: '', desc: '', quantity: '', Price: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.nom) {
                            errors.nom = "Ce champs est obligatoire."
                        }
                        if (!values.desc) {
                            errors.desc = 'Ce champs est obligatoire.'
                        }
                        if (!values.quantity) {
                            errors.quantity = 'Ce champs est obligatoire.'
                        }
                        else if (values.quantity <= 0) {
                            errors.quantity = 'La quantité doit etre positive'
                        }
                        if (!values.Price) {
                            errors.Price = 'Ce champs est obligatoire.'
                        }
                        else if (values.Price <= 0) {
                            errors.Price = 'Le prix doit etre positif'
                        }

                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {

                        await axios.put(`http://localhost:3000/products/${params.id}`, values)
                        navigate('/ProductsList')


                    }}
                    enableReinitialize
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className='col-6' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Nom du produit </label>
                                <input
                                    type="text"
                                    nom="nom"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nom} id="nom" />
                            </div>
                            {errors.nom && touched.nom && <div class="alert alert-danger" role="alert">{errors.nom} </div>}
                            <div className="mb-3">
                                <label >Description</label>
                                <textarea type="text" className="form-control"
                                    name="desc"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.desc} id="desc" />
                            </div>
                            {errors.desc && touched.desc && <div class="alert alert-danger" role="alert">{errors.desc} </div>}


                            <div className="mb-3">
                                <label >Quantité</label>
                                <input type="number" className="form-control"
                                    name="quantity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.quantity} id="quantity" />
                            </div>
                            {errors.quantity && touched.quantity && <div class="alert alert-danger" role="alert">{errors.quantity} </div>}



                            <div className="mb-3">
                                <label >Prix</label>
                                <input type="number" className="form-control" placeholder="/Dt"
                                    name="Price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Price} id="Price" />
                            </div>
                            {errors.Price && touched.Price && <div class="alert alert-danger" role="alert">{errors.Price} </div>}



                            <button className="btn btn-success w-100" type="submit" >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Updateproduct