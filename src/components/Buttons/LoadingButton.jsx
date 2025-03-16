import React from 'react';

function LoadingButton({ onClick, disabled, loading, children, type = 'button', className = '' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={`font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2 ${className}`}
    >
      {loading ? 'Kuting...' : children}
    </button>
  );
}

export default LoadingButton;
