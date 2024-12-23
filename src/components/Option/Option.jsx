import PropTypes from "prop-types";
import Features from "../Features/Features";



const Option = ({option}) => {
  const {name, price, features} = option;
  return (
    <div className="m-8 bg-blue-600 rounded-md text-center text-white p-6 mt-4">
      <h2>
        <span className="text-3xl font-bold">{price}</span>
        <span>/month</span>
      </h2>
      <h2 className="text-2xl py-2 font-semibold">{name}</h2>
  <div>
    {
      features.map((feature,index) => <Features  key={index}
       feature={feature} ></Features>)
    }
  </div>
  <button className="bg-slate-300 w-full py-2 px-6 text-black hover:bg-slate-400 rounded-md mt-6">By Now</button>
    </div>
  );
};


// propsvalidation
Option.propTypes = {
  option:PropTypes.object
}
export default Option;