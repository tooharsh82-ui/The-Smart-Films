import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingChat() {
  const whatsappUrl = getWhatsAppUrl(
    'Hi, I would like to enquire about photography and cinematic videography packages for The Smart Films.'
  );

  return (
    <div
      id="floating-contact-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-chat-btn"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#8CE828] hover:bg-[#7BD71B] text-slate-950 shadow-xl shadow-lime-950/20 border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat with The Smart Films on WhatsApp"
        title="Chat on WhatsApp (+91 82106 11923)"
      >
        <span className="absolute -inset-1 rounded-full bg-[#8CE828]/40 animate-ping pointer-events-none duration-1000" />
        <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950 relative z-10" />
      </a>
    </div>
  );
}
