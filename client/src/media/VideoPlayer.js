import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video controls>
        <source src="https://drive.google.com/file/d/1AEtlQdLKm0V_tbgw9T8o8zf8jiYwK1Wx/export?format=mp4" type="video/mp4" />
        {/* Include additional <source> tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
