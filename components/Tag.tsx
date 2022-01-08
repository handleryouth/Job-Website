import { RootState } from "features";
import { addFilter } from "features/filter";
import { useDispatch, useSelector } from "react-redux";

interface TagProperties {
  title: string;
}

const Tag = ({ title }: TagProperties) => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  return (
    <div
      className="bg-desaturatedDark/20 capitalize text-desaturatedDark hover:text-white hover:bg-desaturatedDark mr-2 mt-1 py-1 px-2 rounded-sm font-bold cursor-pointer transition-colors "
      onClick={() => {
        !filter.includes(title) && dispatch(addFilter(title));
      }}
    >
      {title}
    </div>
  );
};

export default Tag;
