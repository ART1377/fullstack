"use client";

import React, { useEffect } from "react";
import ShoppingCartPageHeader from "./shopping-cart-page-header/shopping-cart-page-header";
import Checkout from "./checkout/checkout";
import ShoppingCartPageItem from "./shopping-cart-page-item/shopping-cart-page-item";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook";
import Button from "../button/button";
import Link from "next/link";
import { fetchCart } from "@/app/redux/slices/cartSlice";
import { useSessionContext } from "@/app/context/useSessionContext";
import Breadcrumb from "../breadcrumb/breadcrumb";
import { calculateDiscountedPrice } from "@/app/lib/calculate-discount-price";

type Props = {};

const ShoppingCartPage = (props: Props) => {
  const { items: cartItems, status } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const { session } = useSessionContext();

  useEffect(() => {
    dispatch(fetchCart(session?.user?.id!));
  }, [dispatch, session?.user?.id]);

  const totalQuantity = cartItems?.reduce(
    (acc, item) => acc + item.quantity!,
    0
  );
  // Updated totalPrice to consider quantity
  const totalPrice = cartItems?.reduce(
    (acc, item) => acc + item.product?.price! * item.quantity!,
    0
  );

  // Updated totalDiscount to consider quantity
  const totalDiscount = cartItems?.reduce(
    (acc, item) =>
      acc +
      calculateDiscountedPrice(item.product?.price!, item.product?.discount!) *
        item.quantity!,
    0
  );

  const cartIsEmpty = cartItems.length < 1;

  return (
    <>
      <Breadcrumb />
      <section className="w-full mt-4 sm:mt-6 flex flex-col gap-y-8 bmlg:flex-row-reverse">
        {/* cart items - header */}
        <div
          className={`w-full flex flex-col gap-3 ${
            !cartIsEmpty && "bmlg:w-[calc(100%-300px)]"
          }`}
        >
          {/* header */}
          <ShoppingCartPageHeader totalQuantity={totalQuantity!} />
          {cartIsEmpty && (
            <div className="w-full px-4 py-8 bg-state-error-200 text-state-error rounded-xl flex-center flex-col gap-4 text-center text-bodyMain">
              <p>سبد خرید شما خالی است</p>
              <Button color="state-error" outline>
                <Link href={"/products?page=1"} aria-label="products">
                  صفحه محصولات
                </Link>
              </Button>
            </div>
          )}
          {/* cart items */}
          <div className="flex flex-col gap-3">
            {cartItems.map((cartItem) => {
              return (
                <ShoppingCartPageItem key={cartItem.id} cartItem={cartItem} />
              );
            })}
          </div>
        </div>
        {/* checkout */}
        {!cartIsEmpty && (
          <Checkout
            totalQuantity={totalQuantity!}
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
            loading={status === "loading"}
          />
        )}
      </section>
    </>
  );
};

export default ShoppingCartPage;
