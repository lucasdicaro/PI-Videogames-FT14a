import React from "react";
import  "./Order.css";
import { useDispatch } from "react-redux";
import { orderBy, orderByDesc } from "../../Redux/Actions/actions";

const Order = () => {
  const dispatch = useDispatch();
  // ordenamiento alfabetico
  const onOrderChange = (e) => {
    dispatch(orderBy(e.target.value));    
  }
  

  return (
    <div className="select">
      <label>Order: </label>
      <select name="slct" id="slct" onChange={onOrderChange}>
        <option  defaultValue>Ordenar por</option>
        <option value="az">Asc</option>
        <option value="za">Desc</option>
        <option value="ASC">Lowest rating</option>
        <option value="DESC">Highest rating</option>
      </select>
    </div>
  );
};

export default Order;