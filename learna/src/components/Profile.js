import React from 'react';

const Profile = ({ account }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center">Profile</h3>
              <p className="text-center">Account Address: {account ? account : 'Not connected'}</p>
              <p className="text-center">Course Completion: X courses</p>
              <button className="btn btn-primary btn-block" onClick={() => console.log('Sign out clicked')}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
