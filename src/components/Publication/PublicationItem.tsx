import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PublicationProps } from "@/types";

const PublicationItem = ({ name, position, period, markdown}: PublicationProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-1">
      {/* <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[2px] md:pl-6 markdown w-full"> */}
      <div className="markdown w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PublicationItem;
