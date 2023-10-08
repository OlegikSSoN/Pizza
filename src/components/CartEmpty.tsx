import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Кошик пустий <span>😕</span>
    </h2>
    <p>
      Скоріш за все, ви ще не замовили піццу.
      <br />
      Для того, щоб замовити піццу, перейдіть на головну сторінку.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Вернутись назад</span>
    </Link>
  </div>
);
