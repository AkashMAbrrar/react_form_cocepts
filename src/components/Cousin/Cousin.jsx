import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cute Cousin Over Smart</h2>
      {name}
      <section>
        {asset && <Special asset={asset}></Special>}
        {name === "Rubana" && <Friend></Friend>}
      </section>
    </div>
  );
};

export default Cousin;
