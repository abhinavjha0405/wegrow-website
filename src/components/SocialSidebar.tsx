import { Facebook, Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "text-[#1877F2]", bgColor: "bg-[#1877F2]" },
    { icon: XIcon, href: "#", label: "X", color: "text-[#000000] dark:text-[#FFFFFF]", bgColor: "bg-[#000000]" },
    { icon: Linkedin, href: "https://in.linkedin.com/company/wegrowconsultancyandsolution", label: "LinkedIn", color: "text-[#0A66C2]", bgColor: "bg-[#0A66C2]" },
    { icon: Instagram, href: "https://www.instagram.com/wegrowconsultancy/", label: "Instagram", color: "text-[#E4405F]", bgColor: "bg-[#E4405F]" },
    { icon: Youtube, href: "https://www.youtube.com/@wegrowsolution", label: "YouTube", color: "text-[#FF0000]", bgColor: "bg-[#FF0000]",target="_blank" },
    { icon: MessageCircle, href: "https://wa.me/918929020833", label: "WhatsApp", color: "text-[#25D366]", bgColor: "bg-[#25D366]" },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="rounded-l-lg shadow-lg overflow-hidden">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer nofollow external"
              referrerPolicy="no-referrer"
              onClick={(e) => {
                // Ensure links open outside preview sandbox
                e.preventDefault();
                window.open(social.href, "_blank", "noopener,noreferrer");
              }}
              className={`flex items-center justify-center w-12 h-12 ${social.bgColor} text-white hover:opacity-90 transition-all duration-300 group`}
              aria-label={social.label}
            >
              {social.icon === XIcon ? (
                <IconComponent />
              ) : (
                <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialSidebar;
