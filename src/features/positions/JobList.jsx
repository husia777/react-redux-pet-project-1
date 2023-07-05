import { JobPosition } from "./JobPosition";
import { addFilter } from "../filter/filter-slice";
import { usePositions } from "./use-positions";
import { useDispatch } from "react-redux";
import { useFetchPositions } from "./use-fetch-positions";

const JobList = () => {
  useFetchPositions();
  const positions = usePositions();

  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
