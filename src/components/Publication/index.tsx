import SectionTitle from "../SectionTitle";
import PublicationItem from "./PublicationItem";

import { DataProps } from "@/types";

const Publication = ({ publication }: Pick<DataProps, "publication">) => {
  return (
    <div>
      <SectionTitle>Publications</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...publication].reverse().map((publication) => (
          <PublicationItem key={publication.id} {...publication} />
        ))}
      </div>
    </div>
  );
};

export default Publication;
