'use client';
import { useEffect, useState } from 'react';

export default function SingleNews({ params }) {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`/api/news`).then(res => res.json()).then(data => {
      const n = data.find(item => item._id === params.id);
      setNews(n);
    });
  }, []);

  if (!news) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
      <small>By {news.author} on {new Date(news.createdAt).toDateString()}</small>
    </div>
  );
}
