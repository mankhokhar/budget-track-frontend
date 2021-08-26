import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {

    const navigate = useNavigate();

    const initialData = {
        username: '',
        email: '',
        password: '',
    }

    const [formData, setFormData] = useState(initialData)

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);

        const url = 'http://127.0.0.1:8000/user/register/'
        fetch(url, {
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }).then(response => {
            console.log(response.status);
            navigate('/');
        })
    }

    const handleChange = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
    <form>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name='username' 
            placeholder="Username" value={formData.username} onChange={handleChange}/>
        </div>


        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" name='email' 
            placeholder="Enter email" value={formData.email} onChange={handleChange}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name='password' 
            placeholder="Enter password" value={formData.password} onChange={handleChange}/>
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
        </p>
    </form>
)};

export default RegistrationForm;