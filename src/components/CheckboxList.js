import React, { useState } from 'react';

const CheckboxList = ({ values, setInitialState, query }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const onCheckboxStatusChange = (e, item) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setSelectedValues((prev) => {
        return [...prev, item];
      });
      setInitialState((prev) => {
        return { ...prev, [query]: [...selectedValues, item] };
      });
    } else {
      setSelectedValues((prev) => {
        return prev.splice(prev.indexOf(item), 1);
      });
      setInitialState((prev) => {
        return { ...prev, [query]: [...selectedValues, item] };
      });
    }
  };

  const handleInputChange = (e) => {
    setSelectedValues((prev) => [...prev, e.target.value]);
    setInitialState((prev) => {
      return { ...prev, [query]: [selectedValues] };
    });
  };

  return (
    <div className="p-1">
      {values.map((item, index) => {
        return (
          <div className="py-2" key={index}>
            <label htmlFor="checkbox2">
              <input
                type="checkbox"
                name="checkbox2"
                value={item}
                onChange={(e) => onCheckboxStatusChange(e, item)}
              />
              {item}
            </label>
          </div>
        );
      })}
      <input placeholder="Inny? Podaj jaki" onClick={handleInputChange} />
    </div>
  );
};

export default CheckboxList;
