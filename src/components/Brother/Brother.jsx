import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Brother = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Little Brother</h2>
      <p>I have: {money}tk</p>
    </div>
  );
};

export default Brother;
