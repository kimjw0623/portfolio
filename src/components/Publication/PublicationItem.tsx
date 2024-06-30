const PublicationItem = ({
  name,
  period,
  description,
}: {
  name: string;
  period: string[];
  description: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h4>{name}</h4>
        </div>
        <div>
          <h5>{`${period[0]}${period[1] ? " ~ " + period[1] : ""} (Master Thesis)`}</h5>
        </div>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default PublicationItem;
