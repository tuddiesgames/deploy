import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="bg-secondaryDark min-h-screen text-white p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl mb-4">Contact Dhurgeshwaran</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="projects">Works</Link>
          <Link href="contact">Contact</Link>
          <Link href="about">About</Link>
        </nav>
      </header>

      <main className="space-y-10">
        <section className="animate-fadeInUp">
          <h2 className="text-3xl mb-2">Contact Information</h2>
          <p><strong>Address:</strong> Tiruppur, Tamilnadu</p>
          <p><strong>Email:</strong> <a href="mailto:dhurgeshbca2021@gmail.com" className="text-blue-400">dhurgeshbca2021@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 6369231815</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/DhurgeshWaran" target="_blank" className="text-blue-400">DhurgeshWaran</a></p>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-3xl mb-2">Social Media</h2>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/DhurgeshWaran" target="_blank">
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="https://github.com/Dhurgeshwaranbca" target="_blank">
              <Image src="/github.png" alt="GitHub" width={40} height={40} className="hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="https://twitter.com/DhurgeshWaran" target="_blank">
              <Image src="/twitter.png" alt="Twitter" width={40} height={40} className="hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="https://www.instagram.com/DhurgeshWaran" target="_blank">
              <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="text-center mt-10">
        <p>&copy; 2024 Dhurgeshwaran. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

