import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import ReactLoading from "react-loading";
import { FilterModal, JobContainer } from "components";
import useSWR from "swr";
import { ResponseData } from "types";
import { RootState } from "features";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
  const { data, isValidating } = useSWR("/api/job");
  const filterType = useSelector((state: RootState) => state.filter);
  const [filteredResponseData, setFilteredResponseData] = useState<
    ResponseData[]
  >([]);

  useEffect(() => {
    if (data) {
      if (filterType.length > 0) {
        setFilteredResponseData(
          (data.data as ResponseData[]).filter(
            (item) =>
              filterType.every((type) => item.tags.includes(type)) === true
          )
        );
      } else {
        setFilteredResponseData([]);
      }
    }
  }, [data, filterType]);

  return (
    <>
      <div className="w-full h-40 relative">
        <Image
          src="/bg-header-desktop.svg"
          alt="Header desktop"
          layout="fill"
        />
      </div>

      <div>
        <FilterModal />
        <div
          className={`mt-8 w-full ${
            isValidating && "flex items-center justify-center"
          }`}
        >
          {!isValidating ? (
            (filterType.length > 0
              ? filteredResponseData
              : (data.data as ResponseData[])
            ).map((item, index) => {
              return <JobContainer key={index} {...item} />;
            })
          ) : (
            <ReactLoading type="bubbles" color="#000" height={50} width={50} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
