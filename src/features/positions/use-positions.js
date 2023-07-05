import { useSelector } from "react-redux";
import { selectVisiblePositions } from "./positions-slice";
import { selectFilters } from "../filter/filter-slice";

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  return positions;
};
