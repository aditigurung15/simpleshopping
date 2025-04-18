import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeItem } from "../Cart/CartSlice";
import { increase, decrease } from "../Cart/CartSlice";

const Item = ({ item, index }) => {
    const dispatch = useDispatch();
  return (
    <div key={index} style={{display:"flex", justifyContent:"space-between", alignItems:"center", }}>
      <div style={{display:"flex", margin:"15px"}}>
        <img
          src={item.img}
          alt="image error"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="flex flex-col">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={()=>dispatch(removeItem(item.id))} >remove</button>
        </div>
      </div>

      <div className="arrows">
      <button onClick={()=>dispatch(increase(item.id))}>
        <IoIosArrowUp />
        </button>
        <p>{item.amount}</p>

        <button onClick={()=>{
            if(item.amount==1){
            dispatch(removeItem(item.id))
            }
            else{
                dispatch(decrease(item.id))
            }
        }}>
        <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Item;
