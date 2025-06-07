import React, { useEffect, useState } from 'react';
import { FaUpload, FaTrash, FaSearch } from 'react-icons/fa';

interface MediaItem {
  id: number;
  name: string;
  type: string;
  url: string;
  size: number;
  uploadedAt: string;
}

const Media: React.FC = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await fetch('/api/admin/media', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch media');
      }

      const data = await response.json();
      setMedia(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching media:', error);
      setIsLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
    }
  };

  const handleUpload = async () => {
    if (!selectedFiles) return;

    const formData = new FormData();
    Array.from(selectedFiles).forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('/api/admin/media/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      // Refresh media list
      fetchMedia();
      setSelectedFiles(null);
      setUploadProgress(0);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const handleDelete = async (mediaId: number) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      try {
        const response = await fetch(`/api/admin/media/${mediaId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete file');
        }

        setMedia(media.filter(item => item.id !== mediaId));
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    }
  };

  const filteredMedia = media.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="media-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Media Library</h2>
        <div className="d-flex gap-2">
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search media..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="upload-section">
            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              className="d-none"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="btn btn-primary">
              <FaUpload /> Upload Files
            </label>
          </div>
        </div>
      </div>

      {selectedFiles && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>Selected Files</h5>
            <ul className="list-group">
              {Array.from(selectedFiles).map((file, index) => (
                <li key={index} className="list-group-item">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <button
                className="btn btn-success"
                onClick={handleUpload}
                disabled={uploadProgress > 0}
              >
                Upload Files
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="card">
        <div className="card-body">
          <div className="row">
            {filteredMedia.map(item => (
              <div key={item.id} className="col-md-4 col-lg-3 mb-4">
                <div className="media-item">
                  {item.type.startsWith('image/') ? (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="img-fluid"
                    />
                  ) : (
                    <div className="file-icon">
                      <i className="fas fa-file"></i>
                    </div>
                  )}
                  <div className="media-info">
                    <h6>{item.name}</h6>
                    <p className="text-muted">
                      {(item.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <div className="media-actions">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media; 