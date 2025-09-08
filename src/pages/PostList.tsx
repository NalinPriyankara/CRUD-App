import React, { useEffect, useState } from 'react'
import type { Post } from '../types/Post'
import { deletePost, getPosts } from '../services/postService';
import { Link } from 'react-router-dom';

const PostList:React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost(id).then(() => {
        setPosts(posts.filter(p => p.id !== id));
      })
    }
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <div className="p-3">
        <h1 className='text-2xl font-bold mb-4'>CRUD APP</h1>
        
        <div className="flex items-center justify-between mb-4">
          <Link 
            to={'/create'}
            className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700'>
            Create
          </Link>

          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full uppercase bg-gray-50 text-gray-700'>
            <thead className='text-xs uppercase bg-gray-50 text-gray-700'>
              <tr>
                <th scope='col' className='p-2 border border-gray-300'>ID</th>
                <th scope='col' className='p-2 border border-gray-300'>Title</th>
                <th scope='col' className='p-2 border border-gray-300'>Body</th>
                <th scope='col' className='p-2 border border-gray-300'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length > 0 ? 
              (
                filteredPosts.map(post =>
                  <tr key={post.id} className='odd:bg-white even:bg-gray-50 border-b border-gray-200'>
                    <td className='p-2 border border-gray-300'>{post.id}</td>
                    <td className='p-2 border border-gray-300'>{post.title}</td>
                    <td className='p-2 border border-gray-300'>{post.body}</td>
                    <td className='p-2 border border-gray-300 space-x-1'>
                      <Link 
                        to={`/edit/${post.id}`}
                        className='cursor-pointer px-2 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700'>Edit</Link>
                      <Link 
                        to={`/show/${post.id}`}
                        className='cursor-pointer px-2 py-1 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700'>Show</Link>
                      <button 
                        onClick={() => handleDelete(post.id)}
                        className='cursor-pointer px-2 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700'>Delete</button>
                    </td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">No posts found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PostList
