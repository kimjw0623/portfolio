import ContactItem from "../ContactItem";
import ReactMarkdown from "react-markdown";
import Introduce from "./Introduce";
import remarkGfm from "remark-gfm";
import Image from "next/image";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start py-4">
      <div style={{ width: '17%', marginRight: '40px',borderRadius: '50%', overflow: 'hidden' }}>
        <Image
          src="/images/information/1.jpg"
          alt="Profile Image"
          layout="responsive"
          width={300}  // 원본 이미지의 가로 길이 비율
          height={300} // 원본 이미지의 세로 길이 비율
        />
      </div>
      <div className="flex flex-col gap- w-3/4">
        <div className="flex flex-col w-full">
          <h1 className="leading-[1.15] text-4xl lg:text-[45px] relative z-20 inline-block">
              I am <span className="text-PRIMARY font-semibold">{information.name}</span>
              <br />
            Machine Learning Engineer.
          </h1>
        </div>
        <div className="flex gap-2 h1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div>
    </div>
      {/* <div className="flex flex-col gap-2">
        <div className="flex flex-col w-full">
          <h1 className="leading-[1.15] text-4xl lg:text-[45px] relative z-20 inline-block">
            
            I am {" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            ML Enginner.
            </h1>
            </div>
        
        <div className="flex gap-1 h1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div> */}
      <div className="markdown w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{information.markdown ?? ""}</ReactMarkdown>
      </div>
      {/* <Introduce markdown={information.markdown} /> */}
    </div>
  );
};

export default Information;
