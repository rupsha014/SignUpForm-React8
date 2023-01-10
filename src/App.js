import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true
  })
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up")
    } else {
      console.log("Passwords do not match")
      return
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!")
    }
  }

  return (
    <div className="flex justify-center items-center mt-44 border-2 border-black w-96 mr-auto ml-auto pt-8 pb-8 bg-orange-300 rounded-lg">
      <form className="form" onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <input

            type="email"
            placeholder="Email address"
            className="border-2 border-black p-3 mb-3 rounded-lg"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black p-3 mb-3 rounded-lg"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="border-2 border-black p-3 mb-3 rounded-lg"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
          />
        </div>
        <div className="mt-6 ">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label className='text-xl' htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="ml-auto mr-auto flex  p-4 mt-8 bg-purple-500 font-semibold rounded-lg text-white"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default App;
