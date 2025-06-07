import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

interface Course {
  id: number;
  name: string;
  teacher: string;
  grade: string;
  schedule: string;
  status: 'active' | 'inactive';
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      name: 'Advanced Mathematics',
      teacher: 'Dr. Sarah Johnson',
      grade: '10th',
      schedule: 'Mon, Wed 9:00 AM',
      status: 'active'
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      teacher: 'Prof. Michael Brown',
      grade: '11th',
      schedule: 'Tue, Thu 10:30 AM',
      status: 'active'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleEdit = (course: Course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const handleAdd = () => {
    setSelectedCourse(null);
    setShowModal(true);
  };

  return (
    <div className="courses-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Courses</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          <FaPlus /> Add Course
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
                  <th>Teacher</th>
                  <th>Grade</th>
                  <th>Schedule</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.name}</td>
                    <td>{course.teacher}</td>
                    <td>{course.grade}</td>
                    <td>{course.schedule}</td>
                    <td>
                      <span className={`badge bg-${course.status === 'active' ? 'success' : 'danger'}`}>
                        {course.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => handleEdit(course)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(course.id)}
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
                  {selectedCourse ? 'Edit Course' : 'Add Course'}
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
                      defaultValue={selectedCourse?.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Teacher</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={selectedCourse?.teacher}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Grade</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={selectedCourse?.grade}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Schedule</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={selectedCourse?.schedule}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" defaultValue={selectedCourse?.status}>
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
                  {selectedCourse ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses; 