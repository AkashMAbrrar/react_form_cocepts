import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);

  return (
    <div>
      <h2>Los Angeler</h2>
      <p>Thanks For The: {asset}</p>
      <p>Another thanks for the:{gift}</p>
    </div>
  );
};

export default Special;
