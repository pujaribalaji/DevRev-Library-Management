import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  console.log(book);

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div className="card">
                <div className="box-1">
                  <Link to="/ ">
                    <img className="img0" src={thumbnail} alt=""></img>
                  </Link>
                  <div className="bottom">
                    <h4 className="title-1">{item.volumeInfo.title}</h4>
                    <p className="amount">&#8377;{amount}</p>
                    <Link
                      to={{ pathname: "/cart", state: { book: item } }}
                      className="cart-link"
                    >
                      <div className="circle"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
