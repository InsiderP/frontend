"use client";

import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image, Input, Modal, Button, ModalContent, ModalBody, ModalHeader, ModalFooter } from "@nextui-org/react";
import { useCart } from "@/context/cartContext"; // Adjust the path as needed

export default function Chef() {
    const list = [
        {
          title: "yui",
          img: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 4,
          years_of_experience: 5,
        },
        {
          title: "ine",
          img: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 3,
          years_of_experience: 3,
        },
        {
          title: "rry",
          img: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 5,
          years_of_experience: 7,
        },
        {
          title: "ijk",
          img: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 4,
          years_of_experience: 6,
        },
        {
          title: "ijk",
          img: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 5,
          years_of_experience: 10,
        },
        {
          title: "fgh",
          img: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 3,
          years_of_experience: 4,
        },
        {
          title: "xyz",
          img: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 4,
          years_of_experience: 8,
        },
        {
          title: "cde",
          img: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 5,
          years_of_experience: 9,
        },
        // Additional items
        {
          title: "abc",
          img: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 4,
          years_of_experience: 6,
        },
        {
          title: "def",
          img: "https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 5,
          years_of_experience: 7,
        },
        {
          title: "ghi",
          img: "https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 3,
          years_of_experience: 5,
        },
        {
          title: "jklmmmmnnhhh",
          img: "https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg?auto=compress&cs=tinysrgb&w=800",
          rating: 3,
          years_of_experience: 5,
        },
      ];
      

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState([]);
  const [quantity, setQuantity] = useState({});
  const { addToCart } = useCart(); // Assuming you have a useCart hook

  const handleFoodClick = (item) => {
    const isSelected = selectedFood.some(f => f.title === item.title);
    if (isSelected) {
      setSelectedFood(selectedFood.filter(f => f.title !== item.title));
    } else {
      setSelectedFood([...selectedFood, item]);
    }
  };

  const handleQuantityChange = (title, qty) => {
    setQuantity(prev => ({ ...prev, [title]: qty }));
  };

  const handleAddToCart = () => {
    selectedFood.forEach(item => {
      addToCart({ ...item, quantity: quantity[item.title] || 1 });
    });
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setSelectedFood([]);
    setQuantity({});
  };

  const handlePayment = () => {
    // Add functionality to handle payment
    console.log("Proceed to Payment", selectedFood.map(item => ({
      ...item,
      quantity: quantity[item.title] || 1,
    })));
    handleCloseModal();
  };

  return (
    <>
      <div className="mt-2 mb-5">
        <Input
          label="Search"
          placeholder="Search by chef"
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
              className={selectedFood.some(f => f.title === item.title) ? "border-2 border-blue-500" : ""}
            >
              <CardBody className="overflow-visible ml-5 p-2">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="80%"
                  alt={item.title}
                  className="w-full object-cover h-[100px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
  <b>{item.title}</b>
  <div>
    <p className="text-default-500">Rating: {item.rating}</p>
    <p className="text-default-500">Experience: {item.years_of_experience} years</p>
  </div>
</CardFooter>
            </Card>
          ))}
      </div>

      {selectedFood.length > 0 && (
        <Modal
          isOpen={true}
          onOpenChange={handleCloseModal}
          width="600px"
        >
          <ModalContent>
            <ModalHeader>
              <h2>chef Details & foods</h2>
            </ModalHeader>
            <ModalBody>
  {selectedFood.map((item) => (
    <div key={item.title} className="flex items-center mb-4">
      <Image
        shadow="sm"
        radius="lg"
        width="100px"
        alt={item.title}
        className="w-[100px] object-cover h-[80px]"
        src={item.img}
      />
      <div className="ml-4 flex flex-col flex-grow">
        <b>{item.title}</b>
        <p>Rating: {item.rating}</p>
        <p>Experience: {item.years_of_experience} years</p>
        <Input
          type="number"

          value={quantity[item.title] }
          onChange={(e) => handleQuantityChange(item.title, parseInt(e.target.value, 10))}
          className="my-2"
        />
      </div>
    </div>
  ))}
</ModalBody>
            <ModalFooter>
              <Button auto onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button auto color="primary" onClick={handlePayment}>
                Proceed to Payment
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
