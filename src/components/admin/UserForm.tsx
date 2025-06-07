import React from 'react';
import useForm from '../../hooks/useForm';

interface UserFormData {
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
}

interface UserFormProps {
  initialValues?: Partial<UserFormData>;
  onSubmit: (data: UserFormData) => Promise<void>;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  initialValues = {},
  onSubmit,
  onCancel
}) => {
  const defaultValues: UserFormData = {
    name: '',
    email: '',
    password: '',
    role: 'user',
    status: 'active',
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          placeholder="Enter name"
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Enter email"
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          {initialValues.password ? 'New Password (leave blank to keep current)' : 'Password'}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder="Enter password"
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={`form-select ${errors.role ? 'is-invalid' : ''}`}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <div className="invalid-feedback">{errors.role}</div>}
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
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
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

export default UserForm; 