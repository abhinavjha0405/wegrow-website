import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-card border-l border-t border-b border-border rounded-l-lg shadow-lg overflow-hidden">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 border-b border-border last:border-b-0 group"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
