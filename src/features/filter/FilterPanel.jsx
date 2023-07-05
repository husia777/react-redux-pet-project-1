import { Badge } from "../../UI/Badge";
import { Card } from "../../UI/Card";
import { Stack } from "../../UI/Stack";
import { useSelector, useDispatch } from "react-redux";
import { removeFilter, clearFilter, selectFilters } from "./filter-slice";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  if (currentFilters.lenth === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              onClear={() => dispatch(removeFilter(filter))}
              key={filter}
              variant="clearable"
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export {FilterPanel}