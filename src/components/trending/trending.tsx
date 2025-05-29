"use client";
import React from "react";
import Title from "../Title";
import TrendingCard from "../cards/TrendingCard";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { ArrowRight } from "lucide-react";

const trendingData = [
  {
    image: "/images/landing1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    chapter: "19/20",
    comments: 21,
    views: 137,
    categories: ["Action", "Movie"],
  },
  {
    image: "/images/landing2.jpg",
    title: "Another trending movie",
    chapter: "10/15",
    comments: 15,
    views: 98,
    categories: ["Drama", "Series"],
  },
  {
    image: "/images/landing3.jpg",
    title: "Exciting Adventure",
    chapter: "7/12",
    comments: 35,
    views: 210,
    categories: ["Adventure", "Movie"],
  },
  {
    image: "/images/landing2.jpg",
    title: "Another trending movie",
    chapter: "10/15",
    comments: 15,
    views: 98,
    categories: ["Drama", "Series"],
  },
  {
    image: "/images/landing3.jpg",
    title: "Exciting Adventure",
    chapter: "7/12",
    comments: 35,
    views: 210,
    categories: ["Adventure", "Movie"],
  },
];

const Trending = () => {
  return (
    <div className="max-width my-8 px-8">
      <div className="flex items-center justify-between">
        <Title title="trending now" />
        <Button
          className="flex items-center space-x-3"
          size="sm"
          responsiveSize={{ sm: "sm", md: "md" }}
        >
          view all <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-8"
      >
        {trendingData.map((item, index) => (
          <TrendingCard key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Trending;
