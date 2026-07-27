import React from 'react';

const Badge = ({ text, active, onClick, type = "filter" }) => {
  
  // 1. If it's a status badge, handle it and return early
  if (type === "status") {
    const typeStatus = text ? text.toLowerCase() : '';
    let statusClass = 'badge-status-in-progress'; // Default fallback

    if (typeStatus === 'pending') {
      statusClass = 'badge-status-pending';
    } else if (typeStatus === 'complete' || typeStatus === 'completed') {
      statusClass = 'badge-status-complete';
    } else if (typeStatus === 'new') {
      statusClass = 'badge-status-new';
    }

    return (
      <span className={`badge badge-status ${statusClass}`}>
        {text}
      </span>
    );
  }

  // 2. If it's NOT a status badge, it must be a filter. Handle it here.
  const activeClass = active ? 'badge-filter-active' : 'badge-filter-inactive';
  
  return (
    <button type="button" className={`badge ${activeClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Badge;