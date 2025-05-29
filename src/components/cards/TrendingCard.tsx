"use client";
import React from "react";
import { motion } from "framer-motion";
import Tab from "../tabs/tab";
import { Eye, MessageCircle } from "lucide-react";

type TTrendingCard = {
  item: {
    image: string;
    title: string;
    chapter: string;
    comments: number;
    views: number;
    categories: string[];
  };
};

const TrendingCard = ({ item }: TTrendingCard) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.05 }}
      className="mb-6 sm:mb-0"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.title}
          className="sm:h-[40vh] object-cover rounded-lg"
        />
        <Tab
          variant="chapter"
          title={item.chapter}
          className="absolute top-4 left-4"
        />
        <Tab
          variant="view"
          title={String(item.comments)}
          className="absolute bottom-4 left-4"
          icon={<MessageCircle className="w-4 h-4" />}
        />
        <Tab
          variant="view"
          title={String(item.views)}
          className="absolute bottom-4 right-4"
          icon={<Eye className="w-4 h-4" />}
        />
      </div>
      <div className="flex items-center space-x-2 my-4">
        {item.categories.map((c) => (
          <Tab variant="type" title={c} key={c} />
        ))}
      </div>
      <p className="hover:text-primary transition-all ease-in cursor-pointer px-2">
        {item.title}
      </p>
    </motion.div>
  );
};

export default TrendingCard;
