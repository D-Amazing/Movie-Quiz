import React from 'react';

function HomePage({ formData, setFormData, onSubmit, error }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.difficulty) {
      alert('Please fill out all fields!');
      return;
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">Welcome to the Marvel Quiz!</h2>
      <p className="text-sm mb-4">Enter your name, choose your favorite category, select a difficulty, and let's test your Marvel knowledge!</p>
      
      <div>
        <label className="block mb-1 font-medium">First Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Select Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">--Select Category--</option>
          <option value="11">Movies</option> {/* Movies */}
          <option value="28">Vehicles</option> {/* Marvel cars? */}
          <option value="29">Comics</option> {/* Comics */}
          <option value="20">Mythology</option> {/* Gods like Thor, Loki */}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Select Difficulty</label>
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">--Select Difficulty--</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-800">
        Get Question
      </button>
    </form>
  );
}

export default HomePage;
