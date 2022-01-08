import { useDispatch, useSelector } from "react-redux";
import { RootState } from "features";
import { removeAllFilters } from "features/filter";
import FilterBreadcrumb from "./FilterBreadcrumb";

const FilterModal = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className=" flex  flex-col sm:items-center sm:justify-between sm:flex-row bg-white py-8 rounded drop-shadow-md ">
      <div className="flex flex-wrap sm:w-full mx-2">
        {filter.length > 0 ? (
          filter.map((filter, index) => {
            return <FilterBreadcrumb key={index} filtertype={filter} />;
          })
        ) : (
          <p className="text-center w-full">No filters applied</p>
        )}
      </div>

      <p
        className="text-desaturatedDark font-bold hover:underline mt-8 cursor-pointer sm:w-32 sm:mt-0 text-center"
        onClick={() => {
          dispatch(removeAllFilters());
        }}
      >
        clear
      </p>
    </div>
  );
};

export default FilterModal;
