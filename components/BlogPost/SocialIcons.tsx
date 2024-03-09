import { FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { AiOutlineLink } from 'react-icons/ai';

export default function SocialIcons() {
  return (
    <nav title="social" className="flex gap-2 md:flex-col">
      <div
        className="hover:scale-110 transition-transform w-12 h-12 bg-black p-2 rounded-full cursor-pointer"
      >
        <FaFacebookF className="w-full h-full" color="white" />
      </div>
      <div className="hover:scale-110 transition-transform w-12 h-12 bg-black p-2 rounded-full cursor-pointer">
        <FaXTwitter className="w-full h-full" color="white" />
      </div>
      <div className="hover:scale-110 transition-transform w-12 h-12 bg-black p-2 rounded-full cursor-pointer">
        <AiOutlineLink className="w-full h-full" color="white" />
      </div>
    </nav>
  );
}
