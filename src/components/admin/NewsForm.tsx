import React, { useState } from 'react';
import useForm from '../../hooks/useForm';

interface NewsFormData {
  title: string;
  content: string;
  image: string;
  author: string;
  status: string;
}

interface NewsFormProps {
  initialValues?: Partial<NewsFormData>;
  onSubmit: (data: NewsFormData) => Promise<void>;
  onCancel: () => void;
}

const NewsForm: React.FC<NewsFormProps> = ({
  initialValues = {},
  onSubmit,
  onCancel
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const defaultValues: NewsFormData = {
    title: '',
    content: '',
    image: '',
    author: '',
    status: 'draft',
    ...initialValues
  };

  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useForm({
    initialValues: defaultValues,
    onSubmit
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      handleChange(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          placeholder="Enter news title"
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">Content</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className={`form-control ${errors.content ? 'is-invalid' : ''}`}
          rows={10}
          placeholder="Enter news content"
        ></textarea>
        {errors.content && <div className="invalid-feedback">{errors.content}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          className={`form-control ${errors.image ? 'is-invalid' : ''}`}
          accept="image/*"
        />
        {errors.image && <div className="invalid-feedback">{errors.image}</div>}
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="img-thumbnail"
              style={{ maxHeight: '200px' }}
            />
          </div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className={`form-control ${errors.author ? 'is-invalid' : ''}`}
          placeholder="Enter author name"
        />
        {errors.author && <div className="invalid-feedback">{errors.author}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="status" className="form-label">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className={`form-select ${errors.status ? 'is-invalid' : ''}`}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        {errors.status && <div className="invalid-feedback">{errors.status}</div>}
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
};

export default NewsForm; 