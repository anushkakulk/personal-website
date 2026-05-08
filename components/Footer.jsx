import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="flex bg-[#696D7D] justify-center items-center py-4">
        <RiCopyrightLine className="hidden md:block mr-2 text-white" />
        <p className="text-white flex text-center items-center">
          2026 Anushka Kulkarni. Powered by Next.js, Tailwind CSS, and Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
