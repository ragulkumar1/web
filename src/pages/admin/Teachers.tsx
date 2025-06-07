import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
}

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      email: 'sarah@example.com',
      phone: '123-456-7890',
      status: 'active'
    },
    {
      id: 2,
      name: 'Prof. Michael Brown',
      subject: 'Physics',
      email: 'michael@example.com',
      phone: '987-654-3210',
      status: 'active'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const handleEdit = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      setTeachers(teachers.filter(teacher => teacher.id !== id));
    }
  };

  const handleAdd = () => {
    setSelectedTeacher(null);
    setShowModal(true);
  };

  return (
    <div className="teachers-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Teachers</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          <FaPlus /> Add Teacher
        </button>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map(teacher => (
                  <tr key={teacher.id}>
                    <td>{teacher.id}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.subject}</td>
                    <td>{teacher.email}</td>
                    <td>{teacher.phone}</td>
                    <td>
                      <span className={`badge bg-${teacher.status === 'active' ? 'success' : 'danger'}`}>
                        {teacher.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => handleEdit(teacher)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(teacher.id)}
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

      {showModal && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedTeacher ? 'Edit Teacher' : 'Add Teacher'}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={selectedTeacher?.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={selectedTeacher?.subject}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={selectedTeacher?.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue={selectedTeacher?.phone}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" defaultValue={selectedTeacher?.status}>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  {selectedTeacher ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers; 