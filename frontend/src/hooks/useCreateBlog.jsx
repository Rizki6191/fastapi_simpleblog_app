import { useState } from 'react';

export const useCreateBlog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBlog = async (title, content) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:8000/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Gagal membuat blog');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createBlog, loading, error };
};