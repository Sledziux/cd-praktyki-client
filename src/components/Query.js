import { useEffect, useState } from 'react';
import CheckboxList from './CheckboxList';
import React from 'react';

const COP = ({ update }) => {
  useEffect(() => {
    update();
  }, []);

  return <p>Współpracuj ze mną!</p>;
};

const Query = ({
  query: {
    query = '',
    isTrue = '',
    isFalse = '',
    isTrueComponent = null,
    isTrueComponentPlaceholder = '',
    isFalseComponent = null,
    isTrueSelectValues = [],
    isFalseComponentPlaceholder = '',
    isFalseSelectValues = [],
    button1Title = 'Tak',
    button2Title = 'Nie',
    isButtonHidden,
    isSelectedInitialValue = null,
    isThirdButton = false,
    button3Title = '',
  },
  setInitialState,
}) => {
  const [isSelected, setSelected] = useState(isSelectedInitialValue);
  const [selectedButton, setSelectedButton] = useState();
  let TrueComponent;
  let FalseComponent;

  useEffect(() => {
    return () => {
      setSelected(isSelectedInitialValue);
    };
  }, [isSelectedInitialValue]);

  const handleOnChange = (e) =>
    setInitialState((prev) => {
      console.log(query, e.target.value);

      return { ...prev, [query]: e.target.value };
    });

  const handleSelectTrue = () => {
    setSelected(true);
    setSelectedButton(1);
    if (TrueComponent === null) {
      setInitialState((prev) => {
        console.log(query, button1Title);

        return { ...prev, [query]: button1Title };
      });
    }
  };
  const handleSelectFalse = () => {
    setSelected(false);
    setSelectedButton(2);

    if (FalseComponent === null) {
      setInitialState((prev) => {
        console.log(query, button2Title);

        return { ...prev, [query]: button2Title };
      });
    }
  };

  const handleSelectThirdButton = () => {
    setSelectedButton(3);

    setInitialState((prev) => {
      console.log(query, button3Title);

      return { ...prev, [query]: button3Title };
    });
  };

  switch (isTrueComponent) {
    case 'textarea':
      TrueComponent = (
        <textarea placeholder={isTrueComponentPlaceholder} onChange={handleOnChange}></textarea>
      );
      break;

    case 'input':
      TrueComponent = <input placeholder={isTrueComponentPlaceholder} onChange={handleOnChange} />;
      break;

    case 'select':
      TrueComponent = (
        <select placeholder={isTrueComponentPlaceholder} onChange={handleOnChange}>
          {isTrueSelectValues.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      );
      break;

    case 'checkboxes':
      TrueComponent = (
        <CheckboxList query={query} setInitialState={setInitialState} values={isTrueSelectValues} />
      );

      break;

    case 'alert':
      TrueComponent = <p>Współpracuj ze mną!</p>;

      break;

    default:
      TrueComponent = null;
      break;
  }

  switch (isFalseComponent) {
    case 'textarea':
      FalseComponent = (
        <textarea placeholder={isFalseComponentPlaceholder} onChange={handleOnChange}></textarea>
      );
      break;

    case 'input':
      FalseComponent = (
        <input placeholder={isFalseComponentPlaceholder} onChange={handleOnChange} />
      );
      break;

    case 'select':
      FalseComponent = (
        <select placeholder={isFalseComponentPlaceholder} onChange={handleOnChange}>
          {isFalseSelectValues.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      );

      break;

    case 'alert':
      FalseComponent = (
        <COP
          update={() => {
            setInitialState((prev) => {
              return { ...prev, [query]: 'Współpracuj ze mną' };
            });
          }}
        />
      );

      break;

    default:
      FalseComponent = null;
      break;
  }

  const condition = isSelected ? (
    <div>
      {TrueComponent && <h3>{isTrue}</h3>}
      {TrueComponent}
    </div>
  ) : (
    <div>
      {FalseComponent && <h3>{isFalse}</h3>}
      {FalseComponent}
    </div>
  );

  return (
    <div className="box">
      <h2>{query}</h2>
      {!isButtonHidden && (
        <div>
          <button
            className="button"
            style={{ backgroundColor: selectedButton === 1 ? 'gray' : 'black' }}
            onClick={handleSelectTrue}
          >
            {button1Title}
          </button>
          <button
            className="button"
            style={{ backgroundColor: selectedButton === 2 ? 'gray' : 'black' }}
            onClick={handleSelectFalse}
          >
            {button2Title}
          </button>
          {isThirdButton && (
            <button
              className="button"
              style={{ backgroundColor: selectedButton === 3 ? 'gray' : 'black' }}
              onClick={handleSelectThirdButton}
            >
              {button3Title}
            </button>
          )}
        </div>
      )}
      {isSelected !== null ? condition : null}
    </div>
  );
};

export default Query;
