import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, ArrowLeft } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import appPreview from '../assets/appPreview.jpg';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login di sini
    console.log('Login attempt with:', formData);
  };

  const handleGoogleLogin = () => {
    // login buat google
    console.log('Login dengan Google');
  };

  return (
    <div className="min-h-screen flex">
      {/* buat tombol balik */}
      <div className="w-full md:w-1/2 p-8 flex flex-col">
        <Link to="/" className="text-gray-600 self-start mb-12">
          <ArrowLeft size={24} />
        </Link>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-semibold text-blue-500 text-center mb-2">Masuk</h1>
          <p className="text-gray-600 text-regular text-center mb-8">
            Bergabung dan dapatkan informasi baru dari kedai kami
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              Masuk
            </button>

            <div className="mt-4 flex items-center justify-between">
              <hr className="w-full border-t border-gray-300" />
              <span className="px-2 text-gray-500 text-sm">atau</span>
              <hr className="w-full border-t border-gray-300" />
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full mt-4 bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 hover:shadow-md transition-all flex items-center justify-center"
            >
              <FcGoogle className="mr-2" size={20} />
              /Login dengan Google →
            </button>

          </form>

          <p className="text-center font-semibold mt-6 text-gray-600">
            Belum memiliki akun?{" "}
            <Link to="/createaccount" className="text-blue-500 font-semibold hover:underline">
              Buat Akun
            </Link>
          </p>
        </div>

        <footer className="mt-auto text-center text-sm text-regular text-gray-500">
          © 2024 Kedai Maneng. All rights reserved.
        </footer>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block w-1/2 bg-blue-500 p-8 flex items-center justify-center">
        <div className="text-white max-w-lg">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Jajanan terjangkau solusi perut lapar
          </h2>
          <img
            src={appPreview}
            alt="App Preview"
            className="mx-auto w-[300px] h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

