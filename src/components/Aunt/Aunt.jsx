import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunt = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2>Dad's princess Aunt</h2>
      <hr />
      <section className="flex">
        <Cousin name={"Morshed"}></Cousin>
        <Cousin name={"Rubana"}></Cousin>
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add More Money</button>
    </div>
  );
};

export default Aunt;
