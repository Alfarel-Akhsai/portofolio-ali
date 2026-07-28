import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AuthPage.css";

function AuthPage() {
  // 1. Bikin tempat nyimpen ketikan email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Fungsi ini jalan pas tombol "SIGN IN" diklik
  const handleLogin = async (e) => {
    e.preventDefault(); // Biar halaman nggak nge-refresh putih

    try {
      // 3. Nembak API PHP yang nanti kita nyalain
      const response = await fetch('http://localhost:8000/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }) // Ngirim data ketikan
      });

      const data = await response.json(); // Baca surat balasan dari PHP

      // 4. Cek status balasannya
      if (data.status === "sukses") {
        alert("Wihh tembus: " + data.pesan);
        // Nanti di sini kodenya diganti buat pindah ke halaman dasbor
      } else {
        alert("Gagal brok: " + data.pesan);
      }
    } catch (error) {
      console.error("Waduh, server PHP-nya mati atau error:", error);
    }
  };
}

// --- SVG Icons (No extra libraries needed) ---
const PandaIcon = () => (
  <svg viewBox="0 0 100 100" className="panda-icon" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="30" r="15" fill="#1f2937" />
    <circle cx="80" cy="30" r="15" fill="#1f2937" />
    <circle cx="50" cy="55" r="40" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
    <ellipse cx="32" cy="50" rx="12" ry="16" fill="#1f2937" transform="rotate(-15 32 50)" />
    <ellipse cx="68" cy="50" rx="12" ry="16" fill="#1f2937" transform="rotate(15 68 50)" />
    <circle cx="32" cy="48" r="4" fill="#ffffff" />
    <circle cx="68" cy="48" r="4" fill="#ffffff" />
    <ellipse cx="50" cy="65" rx="6" ry="4" fill="#1f2937" />
    <path d="M 45 72 Q 50 78 55 72" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// --- Main Component ---
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        
        {/* --- FORM PANEL (Bagian Putih) --- */}
        <motion.div
          className="form-panel"
          initial={false}
          animate={{ x: isLogin ? "0%" : "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* LOGIN FORM */}
          <motion.div
            className="form-content"
            initial={false}
            animate={{ 
                opacity: isLogin ? 1 : 0, 
                pointerEvents: isLogin ? "auto" : "none" 
            }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="title">Hello!</h1>
            <p className="subtitle">Sign in to your account</p>
            <PandaIcon />
            
            <div className="input-group">
              <MailIcon />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-group">
              <LockIcon />
              <input type="password" placeholder="Password" />
            </div>
            
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            
            <button className="btn-submit">SIGN IN</button>
            <p className="bottom-text">
              Don't have an account? 
              <button onClick={toggleAuthMode} className="text-btn">Create</button>
            </p>
          </motion.div>

          {/* REGISTER FORM */}
          <motion.div
            className="form-content"
            initial={false}
            animate={{ 
                opacity: !isLogin ? 1 : 0, 
                pointerEvents: !isLogin ? "auto" : "none" 
            }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="title">Create Account</h1>
            <p className="subtitle">Register to get started</p>
            <PandaIcon />
            
            <div className="input-group">
              <UserIcon />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input-group">
              <MailIcon />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-group">
              <LockIcon />
              <input type="password" placeholder="Password" />
            </div>
            
            <button className="btn-submit">SIGN UP</button>
            <p className="bottom-text">
              Already have an account? 
              <button onClick={toggleAuthMode} className="text-btn">Sign in</button>
            </p>
          </motion.div>
        </motion.div>

        {/* --- OVERLAY PANEL (Bagian Gradasi) --- */}
        <motion.div
          className="overlay-panel"
          initial={false}
          animate={{ x: isLogin ? "0%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* TEKS SAAT MODE LOGIN (Di Kanan) */}
          <motion.div
            className="overlay-content"
            initial={false}
            animate={{ 
                opacity: isLogin ? 1 : 0, 
                x: isLogin ? "0%" : "20%" 
            }}
            transition={{ duration: 0.5 }}
          >
            <h2>Welcome Back!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra magna nisl, ac posuere sem dapibus sed.</p>
          </motion.div>

          {/* TEKS SAAT MODE REGISTER (Di Kiri) */}
          <motion.div
            className="overlay-content"
            initial={false}
            animate={{ 
                opacity: !isLogin ? 1 : 0, 
                x: !isLogin ? "0%" : "-20%" 
            }}
            transition={{ duration: 0.5 }}
          >
            <h2>Hello Friend!</h2>
            <p>Enter your personal details and start your journey with us.</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};
{/* Form loginnya */}
<form onSubmit={handleLogin}>
  <h1>Sign in</h1>
  <input 
    type="email" 
    placeholder="Email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)} // Nangkap ketikan email
  />
  <input 
    type="password" 
    placeholder="Password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)} // Nangkap ketikan password
  />
  <a href="#">Forgot your password?</a>
  <button type="submit">SIGN IN</button>
</form>

export default AuthPage;