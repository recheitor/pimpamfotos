import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"; // Import icons from react-icons
import Image from "next/image";
import Link from "next/link";

interface ContactProps {
  lang: string;
}

export default function Contact({ lang }: ContactProps) {
  return (
    <footer id="contact" className="bg-gradient-to-r from-muted to-muted/50 py-16">
      <div className="md:px-0 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">
            {lang === "es" ? "CONTACTA CON NOSOTROS" : "CONTACT US"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p>Calle Guillem de Castro 106 bajo</p>
              <p>46003 Valencia</p>
              <p>
                <a href="tel:644245533" className="hover:text-primary transition-colors">
                  644 24 55 33
                </a>
                {/* WhatsApp icon */}
                <a
                  href="https://wa.me/644245533" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-foreground hover:text-primary transition-colors"
                >
                  <FaWhatsapp className="h-6 w-6 inline-block" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </p>
              <p>
              <a href="mailto:info@pimpamfotos.com" className="hover:text-primary transition-colors">
                  info@pimpamfotos.com
                </a>
              </p>
            </div>
            <div>
              <Link
                href="https://www.google.es/maps/place/C%2F+Guillem+de+Castro,+106,+Ciutat+Vella,+46003+Valencia/@39.4794051,-0.3931494,13.94z/data=!4m6!3m5!1s0xd604f5063f5b2e3:0x77857b1e9249e62c!8m2!3d39.4776866!4d-0.3834559!16s%2Fg%2F11c24jwjys?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-64 rounded-lg overflow-hidden relative"
              >
                <Image
                  src="/maps.png" 
                  alt="Map location"
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <h6>2025 Pim Pam Fotos ©</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}