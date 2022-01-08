import { formatDistanceToNow, eachDayOfInterval } from "date-fns";
import Image from "next/image";
import { ResponseData } from "types";
import Badge from "./Badge";
import Tag from "./Tag";

const JobContainer = ({
  company,
  condition,
  contract,
  image,
  location,
  job,
  tags,
  timePosted,
}: ResponseData) => {
  return (
    <div
      className={`flex md:items-center justify-between py-6 my-4 bg-white drop-shadow-xl px-3 w-11/12 mx-auto min-w-[320px] flex-col md:flex-row ${
        condition && "border-l-4 border-desaturatedDark"
      }`}
    >
      <div className="flex md:items-center flex-col md:flex-row ">
        <div className="mr-8">
          <Image
            className="rounded-full"
            src={image}
            alt="Job Image"
            width={75}
            height={75}
            layout="fixed"
          />
        </div>

        <div>
          <div className="flex items-center mr-2 mb-1 md:min-w-[380px]">
            <h3 className="capitalize text-desaturatedDark font-semibold">
              {company}
            </h3>
            <div className="flex items-center">
              {condition && <Badge title={condition} />}
              {eachDayOfInterval({
                start: new Date(timePosted),
                end: new Date(),
              }).length <= 7 && <Badge title="new!" />}
            </div>
          </div>
          <h3 className="mb-1 capitalize">{job}</h3>
          <div className="flex flex-col sm:flex-row mb-1 border-l-4 border-l-darkGrayishCyan sm:border-l-0 pl-2 sm:pl-0">
            <p>{formatDistanceToNow(new Date(timePosted))}</p>
            <p className="sm:ml-1 md:ml-2 border-dotted capitalize sm:border-l-8 sm:pl-2">
              {contract}
            </p>
            <p className="sm:ml-1 md:ml-2 border-dotted capitalize sm:border-l-8 sm:pl-2">
              {location}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-4 md:mt-0 border-t-2 pt-4 md:border-t-0 md:pt-0">
        {tags.map((item, index) => {
          return <Tag key={index} title={item} />;
        })}
      </div>
    </div>
  );
};

export default JobContainer;
