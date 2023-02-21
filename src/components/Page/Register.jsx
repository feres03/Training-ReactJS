import axios from 'axios';
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    return (
        <div className='container mt-5'>
            <h3 className='text-center text-success'>Register</h3>
            <div className="row  d-flex justify-content-center">
                <Formik
                    initialValues={{ nom: '', prenom: '', email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.nom) {
                            errors.nom = "Nom est obligatoire."

                        }
                        if (!values.prenom) {
                            errors.prenom = "Prenom est obligatoire."

                        }
                        if (!values.email) {
                            errors.email = "E-mail obligatoire."

                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address'
                        }
                        if (!values.password) {
                            errors.password = 'Password obligatoire'
                        }
                        else if (values.password.length < 6) {
                            errors.password = 'Password doit etre plus que 6 caractéres'
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        await axios.post("http://localhost:3000/users", values)
                        navigate('/login')
                    }
                    }
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form className='col-6' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nom" className="form-label">Nom</label>
                                <input
                                    type="text"
                                    name="nom"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nom} id="nom" />
                            </div>
                            {errors.nom && touched.nom && <div class="alert alert-danger" role="alert">{errors.nom} </div>}
                            <div className="mb-3">
                                <label htmlFor="prenom" className="form-label">Prenom</label>
                                <input
                                    type="text"
                                    name="prenom"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.prenom} id="prenom" />
                            </div>
                            {errors.prenom && touched.prenom && <div class="alert alert-danger" role="alert">{errors.prenom} </div>}
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} id="Email" aria-describedby="emailHelp" />
                            </div>
                            {errors.email && touched.email && <div class="alert alert-danger" role="alert">{errors.email} </div>}
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">Password</label>
                                <input type="password" className="form-control"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} id="Password" />
                            </div>
                            {errors.password && touched.password && <div class="alert alert-danger" role="alert">{errors.password} </div>}

                            <button className="btn btn-success w-100" type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )

}

export default Register