"use client";
import PropTypes from "prop-types";
import { Card, Metric } from "@tremor/react";
// import { Card } from 'flowbite-react';
import { FaUsers } from "react-icons/fa";

export default function StatsCard({ title, figure, icon, percentageChange }) {
  return (

    <Card className="  flex gap-4 p-4 max-w-xs mx-auto" decoration="top" decorationColor="indigo" >
      {/* icon */}
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary p-2">
        {icon ? icon : <FaUsers />}
      </div>
      {/* stats */}

      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-base text-textDark">{title}</h2>
        <Metric>{figure}</Metric>
        <div
          className={`px-2 py-1 text-sm rounded-2xl font-medium ${
            percentageChange < 0
              ? "bg-primary/10 text-primary "
              : "bg-green/10 text-green"
          }`}
        >{percentageChange}% from last week</div>
      </div>
    </Card>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  percentageChange: PropTypes.number.isRequired,
  figure: PropTypes.number.isRequired,
};
