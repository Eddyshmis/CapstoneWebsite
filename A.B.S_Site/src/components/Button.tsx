import { useState } from "react";

function Buttons() {
  const btnTypes = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const [Color, SetColor] = useState("primary");

  let [indexList, setindexList] = useState(0);
  return (
    <>
      <button
        onClick={() => {
            indexList >= 7 && (indexList = 0)
          setindexList(indexList + 1);
          SetColor(btnTypes[indexList]);
        }}
        type="button"
        className={"btn btn-" + Color}
      >
        Button
      </button>
    </>
  );
}

export default Buttons;
