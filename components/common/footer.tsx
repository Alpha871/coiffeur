function Footer() {
  return (
    <footer className="mx-60 mt-10 border-t border-gray-200 dark:border-b-[#234836] py-8">
      <div className="px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} SalonApp. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
