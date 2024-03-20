import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <Image
            src="/cookies.png"
            alt="cookie"
            width="80"
            height="80"
            className="fill-current"
          />
          <p>DevCookie corporation</p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <Image
                src="/google.png"
                alt="email"
                width="24"
                height="24"
                className="fill-current"
              />
            </a>

            <a>
              <Image
                src="/github.png"
                alt="email"
                width="24"
                height="24"
                className="fill-current"
              />
            </a>

            <a>
              <Image
                src="/email.png"
                alt="email"
                width="24"
                height="24"
                className="fill-current"
              />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
