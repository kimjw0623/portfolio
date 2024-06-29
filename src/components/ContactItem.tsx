import { ReactNode } from "react";
import GithubIcon from "@/assets/images/github_large.svg";
import EmailIcon from "@/assets/images/email.svg";

const ContactItem = ({
  children,
  isEmail,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  isEmail?: boolean;
  className?: string;
  }) => {
  if (isEmail) {
    console.log("email")
    return (
      <a target="_blank" rel="noreferrer" href={isEmail ? `mailto:${href}` : href} className="w-fit">
        <EmailIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
      </a>
    );
  }
  else {
    return (
      <a target="_blank" rel="noreferrer" href={isEmail ? `mailto:${href}` : href} className="w-fit">
        <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
      </a>
      // <a target="_blank" rel="noreferrer" href={isEmail ? `mailto:${href}` : href} className="w-fit">
      //   <span
      //     className={`px-1 text-s dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK ${className}`}
      //   >
      //     {children}
      //   </span>
      // </a>
    );
  }
};

export default ContactItem;
