// src/components/Badges.js
import React from 'react';
import { FaStar, FaTrophy, FaMedal } from 'react-icons/fa'; // Import Bootstrap Icons

const Badges = ({ badges }) => {
  return (
    <div className="badges">
      <h3>Earned Badges</h3>
      <div className="badge-grid">
        {badges.length === 0 ? (
          <p>No badges earned yet!</p>
        ) : (
          badges.map((badge, index) => (
            <div key={index} className="badge-item">
              {badge.icon}  {/* Use Bootstrap Icon */}
              <p>{badge.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Badges;
