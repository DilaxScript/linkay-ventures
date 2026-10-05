'use client';

import React from 'react';

export default function WhatsAppWidget() {
  const phoneNumber = '16469457720';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%2C%20I%20would%20like%20more%20information%20about%20Linkay%20Ventures.`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-[18px] right-[18px] z-50 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 0C5.397 0 0 5.397 0 12.031c0 2.115.548 4.175 1.588 5.986L.065 24l6.16-1.616a12.007 12.007 0 0 0 5.806 1.488h.005c6.634 0 12.031-5.397 12.031-12.031C24.067 5.397 18.665 0 12.031 0zm.005 21.879h-.004a9.99 9.99 0 0 1-5.096-1.393l-.365-.217-3.784.992 1.01-3.69-.238-.379a9.98 9.98 0 0 1-1.536-5.161c0-5.524 4.494-10.018 10.023-10.018 2.677 0 5.193 1.043 7.086 2.936a9.97 9.97 0 0 1 2.932 7.086c0 5.525-4.494 10.019-10.028 10.019zm5.495-7.508c-.301-.151-1.782-.88-2.059-.98-.276-.101-.477-.151-.678.151-.201.302-.78 0.98-.956 1.181-.176.201-.352.226-.653.076-.301-.151-1.272-.469-2.424-1.497-.896-.799-1.501-1.786-1.677-2.087-.176-.302-.019-.465.132-.615.136-.135.301-.352.452-.527.151-.176.201-.302.302-.503.101-.201.05-.377-.025-.528-.075-.151-.678-1.633-.93-2.236-.245-.588-.494-.508-.678-.518l-.578-.01c-.201 0-.527.075-.803.377s-1.055 1.03-1.055 2.512 1.08 2.914 1.231 3.115c.151.201 2.125 3.245 5.15 4.551.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.126-.276-.201-.577-.352z" />
        </svg>
        <span className="font-poppins text-[13px] font-medium tracking-wide">
          WhatsApp us
        </span>
      </a>
    </aside>
  );
}
