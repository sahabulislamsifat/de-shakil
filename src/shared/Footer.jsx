const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center md:flex-row md:justify-between">
        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-..." />
            </svg>
          </a>
          <a aria-label="YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-..." />
            </svg>
          </a>
          <a aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12..." />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} — All rights reserved by ACME Industries
          Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
