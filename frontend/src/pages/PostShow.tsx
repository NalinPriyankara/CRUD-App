import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../services/postService';

const PostShow:React.FC = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if(id) {
            getPost(id).then(res => {
                setTitle(res.data.title);
                setBody(res.data.body);
            })
        }
    }, [id]);

  return (
    <div>
      <div className="p-3">
        <h1 className='text-2xl font-bold mb-4'>Show Post</h1>
        <Link 
            to={'/'}
            className='mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700'>Back
        </Link>

        <div className='space-y-4 mt-4 max-w-md'>
            <p><strong>Title</strong> {title}</p>
            <p><strong>Body</strong> {body}</p>
        </div>

      </div>
    </div>
  )
}

export default PostShow
