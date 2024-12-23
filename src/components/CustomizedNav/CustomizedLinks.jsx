import PropTypes from "prop-types";


const CustomizedLinks = ({route}) => {
  return (
    <li className="mr-6 hover:bg-yellow-100 px-6 py-3 rounded-sm  ${open ? '' : 'hidden'}" > 
    <a href={route.path}>{route.name}</a>
    </li>)
 
};
 

// PropTypes added..............

CustomizedLinks.propTypes ={
  route:PropTypes.object
}
export default CustomizedLinks;