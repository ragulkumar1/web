import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

interface Student {
  id: number;
  name: string;
  grade: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: 'John Doe',
      grade: '10th',
      email: 'john@example.com',
      phone: '123-456-7890',
      status: 'active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      grade: '11th',
      email: 'jane@example.com',
      phone: '987-654-3210',
      status: 'active'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  const handleAdd = () => {
    setSelectedStudent(null);
    setShowModal(true);
  };

  return (
    <div className="students-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Students</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          <FaPlus /> Add Student
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
                  <th>Grade</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                      <span className={`badge bg-${student.status === 'active' ? 'success' : 'danger'}`}>
                        {student.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => handleEdit(student)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(student.id)}
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
                  {selectedStudent ? 'Edit Student' : 'Add Student'}
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
                      defaultValue={selectedStudent?.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Grade</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={selectedStudent?.grade}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={selectedStudent?.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue={selectedStudent?.phone}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" defaultValue={selectedStudent?.status}>
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
                  {selectedStudent ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students; 