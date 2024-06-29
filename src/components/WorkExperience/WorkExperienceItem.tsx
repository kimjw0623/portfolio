import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({ name, position, period, markdown, imgSrc }: WorkExperienceProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-1">
      <div className="flex justify-center md:flex-col items-center md:items-start mr-4 gap-6">
        {/* {imgSrc && (
          <Image
            src={imgSrc}
            width="200"
            height="200"
            alt={name}
            className="object-cover rounded-lg border-[2px] border-GRAY_LIGHT border-solid w-24 h-24"
          />
        )} */}
        <div className="w-36"> 
          <h3>{name}</h3>
          <div className="flex flex-col">
            <span className="m-0">{position}</span>
            <span>{`${period[0]} - ${period[1]}`}</span>
          </div>
        </div>
      </div>
      {/* <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[2px] md:pl-6 markdown w-full"> */}
      <div className="md:pl-6 markdown w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
