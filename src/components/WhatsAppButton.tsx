import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp business number
  const phoneNumber = "919000000000"; 
  const message = "Hello Thrayana Team, I am interested in your export products. Could you please share more details?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in zoom-in duration-500 delay-1000">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        
        {/* Main Button */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl">
          <MessageCircle className="h-8 w-8" />
          
          {/* Tooltip Labels */}
          <div className="absolute right-16 hidden scale-0 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white transition-all duration-300 group-hover:block group-hover:scale-100 shadow-xl">
            Chat with an Export Expert
            <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
