import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Branch Visit Tracker</h1>
      <p>Welcome to Branch Visit Tracker</p>
    </div>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig