import React from "react";
import Link from "next/link";

interface MenuMobilProps {
  currentPath: string;
  onClose: () => void;
}

const MenuMobil: React.FC<MenuMobilProps> = ({ currentPath, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-20 flex flex-col overflow-auto">
      {/* Menu Items */}
      <div className="flex flex-col w-full">
        <Link
          href="/"
          className={`flex items-center p-4 ${currentPath === '/' ? 'bg-[#EDF6FC] text-[#3BA1E0]' : 'text-black'}`}
          onClick={onClose}
        >
          <div className="w-10 h-10 rounded-full border border-gray-300 mr-4 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-current"></div>
          </div>
          <span className="text-xl">Heromatic</span>
        </Link>

        <Link
          href="/services"
          className={`flex items-center p-4 ${currentPath === '/services' ? 'bg-[#EDF6FC] text-[#3BA1E0]' : 'text-gray-600'}`}
          onClick={onClose}
        >
          <div className="w-10 h-10 rounded-full border border-gray-300 mr-4 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-current"></div>
          </div>
          <span className="text-xl">Services</span>
        </Link>

        <Link
          href="/about"
          className={`flex items-center p-4 ${currentPath === '/about' ? 'bg-[#EDF6FC] text-[#3BA1E0]' : 'text-gray-600'}`}
          onClick={onClose}
        >
          <div className="w-10 h-10 rounded-full border border-gray-300 mr-4 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-current"></div>
          </div>
          <span className="text-xl">Our Story</span>
        </Link>
      </div>

      {/* Blue info box */}
      <div className="bg-[#3BA1E0] p-8 mt-auto">
        <div className="text-white text-2xl mb-2">
          Seamless integration
        </div>
        <div className="text-white text-2xl mb-6">
          with your IoT devices.
        </div>

        <div className="text-white mb-8">
          Specialized knowledge and years of experience in developing customized solutions for automation.
        </div>

        <Link
          href="/form"
          className="bg-white text-[#3BA1E0] py-3 px-6 inline-flex items-center justify-between mt-4 min-w-[250px]"
          onClick={onClose}
        >
          <span className="text-xl">Let's Work Together</span>
          <div className="ml-2">
            <img src="/assets/right.svg" alt="right" className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuMobil;
