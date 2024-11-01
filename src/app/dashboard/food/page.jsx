"use client";

import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image, Input, Modal, Button, ModalHeader, ModalBody, ModalFooter, ModalContent } from "@nextui-org/react";
import { useCart } from "@/context/cartContext";
 // Adjust the path as needed

export default function food() {
  const list = [
    { title: "Orange", img: "https://nextui.org/images/fruit-1.jpeg", price: 5.50 },
    { title: "Tangerine", img: "https://nextui.org/images/fruit-2.jpeg", price: 3.00 },
    { title: "Raspberry", img: "https://nextui.org/images/fruit-2.jpeg", price: 10.00 },
    { title: "Lemon", img: "https://nextui.org/images/fruit-1.jpeg", price: 5.30 },
    { title: "Avocado", img: "https://nextui.org/images/fruit-1.jpeg", price: 15.70 },
    { title: "Lemon 2", img: "https://nextui.org/images/fruit-2.jpeg", price: 8.00 },
    { title: "Banana", img: "https://nextui.org/images/fruit-2.jpeg", price: 7.50 },
    { title: "Watermelon", img: "https://nextui.org/images/fruit-2.jpeg", price: 12.20 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleFoodClick = (item) => {
    setSelectedFood(item);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedFood) {
      addToCart({ ...selectedFood, quantity });
      handleCloseModal();
    }
  };

  const handlePayment = () => {
    // Add functionality to handle payment
    console.log("Proceed to Payment", { ...selectedFood, quantity });
    handleCloseModal();
  };

  return (
    <>
      <div className="mt-2 mb-5">
        <Input
          label="Search"
          placeholder="Enter your Food"
          className="w-[200px]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="gap-2 grid grid-cols-4 sm:grid-cols-4">
        {list
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => handleFoodClick(item)}
            >
              <CardBody className="overflow-visible ml-5 p-2">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[100px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">${item.price.toFixed(2)}</p>
              </CardFooter>
            </Card>
          ))}
      </div>

      {selectedFood && (
        <Modal  isOpen={!!selectedFood}
        onClose={handleCloseModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Select Food</ModalHeader>
              <ModalBody>
              <div className="flex flex-col items-center">
              <Image
                shadow="sm"
                radius="lg"
                width="80%"
                alt={selectedFood.title}
                className="w-full object-cover h-[150px]"
                src={selectedFood.img}
              />
              <p className="mt-2">Price: ${selectedFood.price.toFixed(2)}</p>
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="my-2 w-full"
              />
              <p>Total Price: ${(selectedFood.price * quantity).toFixed(2)}</p>
            </div>
              </ModalBody>
              <ModalFooter>
              <Button auto onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button auto color="primary" onClick={handlePayment}>
              Proceed to Payment
            </Button>
            <Button auto color="error" onClick={handleCloseModal}>
              Close
            </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      )}
    </>
  );
}
