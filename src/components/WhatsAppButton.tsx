import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/212524387600"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="WhatsApp"
  >
    <MessageCircle size={28} className="text-ivory" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
