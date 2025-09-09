import React, { useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPost, updatePost } from '../services/postService';

const PostEdit:React.FC = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(id) {
            getPost(id).then(res => {
                setTitle(res.data.title);
                setBody(res.data.body);
            })
        }
    }, [id]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        updatePost(Number(id), {title:title, body:body}).then(() => navigate('/'));
    }

  return (
    <div>
      <div className="p-3">
        <h1 className='text-2xl font-bold mb-4'>Edit Post</h1>
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

export default PostEdit
