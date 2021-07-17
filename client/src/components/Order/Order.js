import React from "react";
import  "./Order.css";
import { useDispatch } from "react-redux";
import { orderBy, orderByDesc } from "../../Redux/Actions/actions";

const Order = () => {
  const dispatch = useDispatch();
  // ordenamiento alfabetico
  const onOrderChange = (e) => {
    if (e.target.value === "az" || e.target.value === "highest") {
      dispatch(orderBy(e.target.value));
    } else {
      dispatch(orderByDesc(e.target.value));
    }
  };
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="select">
      <select name="slct" id="slct" onChange={onOrderChange}>
        <option onClick={refreshPage} defaultValue>Ordenar por</option>
        <option value="az">Asc</option>
        <option value="za">Desc</option>
        <option value="lowest">Lowest rating</option>
        <option value="highest">Highest rating</option>
      </select>
    </div>
  );
};

export default Order;