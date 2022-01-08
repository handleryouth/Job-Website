import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "features";
import { removeFilter } from "features/filter";

interface FilterBreadcrumbProps {
  filtertype: string;
}

const FilterBreadcrumb = ({ filtertype }: FilterBreadcrumbProps) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-desaturatedDark/40 flex ml-2 my-2 items-center rounded-sm overflow-hidden">
      <p className="mx-2">{filtertype}</p>
      <div
        className="bg-desaturatedDark hover:bg-veryDarkGrayishCyan transition-colors flex items-center justify-center h-8 w-8 cursor-pointer"
        onClick={() => {
          dispatch(removeFilter(filtertype));
        }}
      >
        <Image
          src="/icon-remove.svg"
          alt="Cross Icon"
          width={20}
          height={20}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default FilterBreadcrumb;
