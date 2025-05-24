
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [images, setImages] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch('/api/get_images')  // Your backend lambda endpoint
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="bg-black text-white p-6">
      <h1 className="text-xl font-bold mb-4">🖋️ AI Annotation Dashboard</h1>
      {images.map((img, index) => (
        <div key={index} className="mb-4">
          <img src={img.url} className="w-64 rounded" alt="to annotate" />
          <p>Auto Labels: {img.autoLabels.join(', ')}</p>
          <button className="bg-green-600 px-3 py-1 rounded">Accept</button>
          <button className="bg-red-600 px-3 py-1 rounded ml-2">Reject</button>
        </div>
      ))}
    </div>
  );
}
