import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author:'',
    description: '',
    published: ''
  });
  
  useEffect(() => {
    axios.get(`https://my-library-mern.onrender.com/get-books/${id}`)
    .then((res) => setFormData(res.data))
    .catch((err)=>console.error(err.message));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://my-library-mern.onrender.com/update-book/${id}`, formData)
    .then(()=>navigate('/'))
    .catch((err)=>console.error(err.message));
  }

  return (
    <div>
      <h1 className='my-4'>Make Changes</h1>
      <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center flex-column my-4 gap-3'>
        <input className="form-control" value={formData.title} type="text" placeholder='title' required onChange={(e) => {setFormData({...formData, title: e.target.value})}}/>
        <input className="form-control" value={formData.author} type="text" placeholder='author' required onChange={(e) => {setFormData({...formData, author: e.target.value})}}/>
        <input className="form-control" value={formData.description} type="text" placeholder='description' required onChange={(e) => {setFormData({...formData, description: e.target.value})}}/>
        <input className="form-control" value={formData.published} type="number" placeholder='publish date' required onChange={(e) => {setFormData({...formData, published: e.target.value})}}/>
        <button type='submit' className='btn btn-warning'>
          save
        </button>
      </form>
    </div>
  );
}

export default Update;

