import Image from "next/image";
import cookieImage from "../../../public/cookies.png";
import githubImage from "../../../public/github.png";
import googleImage from "../../../public/google.png";
import mailImage from "../../../public/email.png";

function Footer() {
  return (
    <>
      <footer className="footer place-items-stretch	p-10 bg-orange-100 text-black">
        <aside>
          <Image
            src={cookieImage}
            alt="Logo"
            width="50"
            height="50"
            className="fill-current"
          />
          <p>DevCookie corporation</p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <Image
                src={googleImage}
                alt="google"
                width="24"
                height="24"
                className="fill-current"
              />
            </a>

            <a>
              <Image
                src={githubImage}
                alt="github"
                width="24"
                height="24"
                className="fill-current"
              />
            </a>

            <a>
              <Image
                src={mailImage}
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
