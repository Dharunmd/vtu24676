function FilterBar({
  type,
  setType,
}) {
  return (
    <div className="filter-bar">
      <label>
        Filter By Type:
      </label>

      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
      >
        <option value="">
          All Notifications
        </option>

        <option value="Event">
          Event
        </option>

        <option value="Placement">
          Placement
        </option>

        <option value="Result">
          Result
        </option>
      </select>
    </div>
  );
}

export default FilterBar;