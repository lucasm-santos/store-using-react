"use client";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ProductCard = ({
  list = [],
}) => {
  return (
    <div className="only">
      {list.map((item, index) => 
        <div key={index} className="card-wrapper">
          <img src={item.image} alt="" />
          <p className="card-name">{item.name}</p>
          <p className="card-rate">vendidos: {item.rate}</p>
          <div className="card-info">
            <p
              className={
                item.att_value?.length < 5
                  ? "card-value value"
                  : "card-value lowvalue"
              }
            >
              R${item.att_value}
            </p>
            {item.price && (
              <p
                className={
                  item.price?.length > 1 ? "card-price" : "card-price lowtext"
                }
              >
                R${item.price}
              </p>
            )}
            {item.discount && <p className="card-discount">{item.discount}%</p>}
          </div>
          <Link className="card-link" to={""}>
            Visualizar
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
