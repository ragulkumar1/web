import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';

interface SchoolSettings {
  schoolName: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  academicYear: string;
  timezone: string;
  language: string;
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SchoolSettings>({
    schoolName: 'JKKN School',
    address: '123 Education Street, City',
    phone: '123-456-7890',
    email: 'info@jkknschool.com',
    website: 'www.jkknschool.com',
    academicYear: '2023-2024',
    timezone: 'UTC+5:30',
    language: 'English'
  });

  const [activeTab, setActiveTab] = useState('general');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement settings save logic here
    console.log('Saving settings:', settings);
  };

  return (
    <div className="settings-page">
      <h2 className="mb-4">Settings</h2>

      <div className="card">
        <div className="card-body">
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                General
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'academic' ? 'active' : ''}`}
                onClick={() => setActiveTab('academic')}
              >
                Academic
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                Notifications
              </button>
            </li>
          </ul>

          <form onSubmit={handleSubmit}>
            {activeTab === 'general' && (
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">School Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="schoolName"
                    value={settings.schoolName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={settings.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={settings.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={settings.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Website</label>
                  <input
                    type="url"
                    className="form-control"
                    name="website"
                    value={settings.website}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            {activeTab === 'academic' && (
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Academic Year</label>
                  <input
                    type="text"
                    className="form-control"
                    name="academicYear"
                    value={settings.academicYear}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Timezone</label>
                  <select
                    className="form-select"
                    name="timezone"
                    value={settings.timezone}
                    onChange={handleInputChange}
                  >
                    <option value="UTC+5:30">UTC+5:30 (IST)</option>
                    <option value="UTC+0">UTC+0 (GMT)</option>
                    <option value="UTC-5">UTC-5 (EST)</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Language</label>
                  <select
                    className="form-select"
                    name="language"
                    value={settings.language}
                    onChange={handleInputChange}
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="row">
                <div className="col-12 mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="emailNotifications"
                    />
                    <label className="form-check-label" htmlFor="emailNotifications">
                      Enable Email Notifications
                    </label>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="smsNotifications"
                    />
                    <label className="form-check-label" htmlFor="smsNotifications">
                      Enable SMS Notifications
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4">
              <button type="submit" className="btn btn-primary">
                <FaSave /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings; 