import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, ArrowLeft } from 'lucide-react';
import appPreview from '../assets/appPreview.jpg';

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // create account login di sini
    console.log('Account creation attempt with:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* tombol balik */}
      <div className="w-full md:w-1/2 p-8 flex flex-col">
        <Link to="/" className="text-gray-600 self-start mb-12">
          <ArrowLeft size={24} />
        </Link>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-semibold text-blue-500 text-center mb-2">Buat Akun</h1>
          <p className="text-gray-600 text-regular text-center mb-8">
            Bergabung dan dapatkan informasi baru dari kedai kami
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Agung Wisnu"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">
                Email Anda
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="contoh123@gmail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="min. 8 karakter"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Buat Akun
            </button>
          </form>

          <p className="text-center mt-6 font-semibold text-gray-600">
            Sudah memiliki akun?{" "}
            <Link to="/login" className="text-blue-500 font-semibold hover:underline">
              Masuk
            </Link>
          </p>
        </div>

        <footer className="mt-auto text-center text-sm text-regular text-gray-500">
          © 2024 Kedai Maneng. All rights reserved.
        </footer>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-1/2 bg-blue-500 p-8 items-center justify-center">
        <div className="text-white max-w-lg">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Jajanan terjangkau solusi perut lapar
          </h2>
          <img
            src={appPreview}
            alt="App Preview"
            className="mx-auto rounded-lg shadow-lg w-[300px] h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

