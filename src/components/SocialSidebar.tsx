import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-[#1877F2]" },
    { icon: XIcon, href: "#", label: "X", color: "hover:text-[#000000] dark:hover:text-[#FFFFFF]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-[#FF0000]" },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-card border-l border-t border-b border-border rounded-l-lg shadow-lg overflow-hidden">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 text-muted-foreground ${social.color} hover:bg-primary/5 transition-all duration-300 border-b border-border last:border-b-0 group`}
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
