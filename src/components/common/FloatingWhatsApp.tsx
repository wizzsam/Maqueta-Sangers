import LogoWsp from "../../assets/logo-WhatsApp.png";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/51924327569?text=Hola%20quiero%20más%20información"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[9999]
        w-14 h-14 rounded-full 
        flex items-center justify-center shadow-xl
        transition-all active:scale-95 bg-green-500 hover:bg-green-600
      "
    >
      <img 
        src={LogoWsp} 
        alt="WhatsApp" 
        className="w-full h-full object-contain"
      />
    </a>
  );
}
