import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createPost } from '../services/postService';

const PostCreate:React.FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        createPost({title, body}).then(() => navigate('/'));
    }

  return (
    <div>
      <div className="p-3">
        <h1 className='text-2xl font-bold mb-4'>Create Post</h1>
        <Link 
            to={'/'}
            className='mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700'>Back
        </Link>

        <form onSubmit={submit} className='space-y-6 mt-4 max-w-md mx-auto'>
            <div className='grid gap-1'>
                <label className='text-sm font-medium text-gray-700'>Title</label>
                <input 
                    id='title'
                    name='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                    placeholder='Enter title'
                />
            </div>
            <div className='grid gap-1'>
                <label className='text-sm font-medium text-gray-700'>Body</label>
                <textarea 
                    id='body'
                    name='body'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                    placeholder='Enter body'
                />
            </div>

            <button type='submit' className='w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PostCreate
