import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [formData, setFormData] = useState({
    title: '',
    author:'',
    description: '',
    published: ''
  });
  const navigate = useNavigate(); //to naviage from one page to another

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    axios.post('https://my-library-mern.onrender.com/add-book', formData)
    .then(()=>{
      alert('data added successfully');
      navigate('/');
    })
    .catch((err) => console.error(err.message));
  }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column my-4'>
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center flex-column my-4 gap-3'>
        <input className="form-control" value={formData.title} type="text" placeholder='title' required onChange={(e) => {setFormData({...formData, title: e.target.value})}}/>
        <input className="form-control" value={formData.author} type="text" placeholder='author' required onChange={(e) => {setFormData({...formData, author: e.target.value})}}/>
        <input className="form-control" value={formData.description} type="text" placeholder='description' required onChange={(e) => {setFormData({...formData, description: e.target.value})}}/>
        <input className="form-control" value={formData.published} type="number" placeholder='publish date' required onChange={(e) => {setFormData({...formData, published: e.target.value})}}/>
        <button type='submit' className='btn btn-primary'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
      </form>

    </div>
  );
}

export default Create;

