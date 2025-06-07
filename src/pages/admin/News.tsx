import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  status: string;
  publishedAt: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/admin/news', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data = await response.json();
      setNews(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (newsId: number) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      try {
        const response = await fetch(`/api/admin/news/${newsId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete news');
        }

        setNews(news.filter(item => item.id !== newsId));
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }
  };

  const handleEdit = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setShowModal(true);
  };

  const handleAdd = () => {
    setSelectedNews(null);
    setShowModal(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>News Management</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          <FaPlus /> Add News
        </button>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Published At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {news.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>
                      <span className={`badge bg-${item.status === 'published' ? 'success' : 'warning'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{new Date(item.publishedAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => handleEdit(item)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* News Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedNews ? 'Edit News' : 'Add News'}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* News form will be added here */}
                <p>News form coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News; 