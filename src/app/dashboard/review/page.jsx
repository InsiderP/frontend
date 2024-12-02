"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Text } from "@nextui-org/react";
import { FaStar } from "react-icons/fa"; // For star rating

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`text-yellow-500 ${index < rating ? "fill-current" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

export default function Review (){
  // Example data for four cards
  const cards = [
    {
      id: 1,
      imageSrc: "https://nextui.org/images/fruit-1.jpeg",
      title: "Name of food",
      description: "Make beautiful websites regardless of your design experience.",
      rating: 4,
      reviewCount: 25,
      link: "http://localhost:3000/dashboard/food",
    },
    // Add similar objects for the other three cards
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {cards.map((card) => (
        <Card key={card.id} className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="food image"
              height={40}
              radius="sm"
              src={card.imageSrc}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md font-semibold">{card.title}</p>
              <Rating rating={card.rating} />
              <Text className="text-sm text-gray-500">
                {card.reviewCount} Reviews
              </Text>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{card.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href={card.link}
            >
              Order Fooddddd
              {/* db.user.find({
                $expr:{
                  $gt:["$price",{$avg:"$price"}]
                }
              }) */}
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

