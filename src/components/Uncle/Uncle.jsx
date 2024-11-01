import Cousine from "../Cousin/Cousin.jsx";
const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Chocolate Uncle</h2>
      <hr />
      <section className="flex">
        <Cousine name={"Rabbil"} asset={asset}></Cousine>
        <Cousine name={"Suhana"}></Cousine>
      </section>
    </div>
  );
};

export default Uncle;
