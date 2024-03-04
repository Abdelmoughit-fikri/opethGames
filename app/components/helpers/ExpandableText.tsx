"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  myMaxChars?: any;
}

const ExpandableText = ({ children, myMaxChars = 20 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = isExpanded ? children : children.substring(0, myMaxChars);
  const icon = isExpanded ? <ChevronDownIcon /> : <ChevronUpIcon />;
  const TextLength = children.length;
  if (TextLength < myMaxChars) {
    return children;
  }
  return (
    <p className="flex text-container items-center">
      {text}...
      <a
        className="cursor-pointer ml-2 flex items-center size-5"
        onClick={() => setIsExpanded(!isExpanded)}
      ></a>
    </p>
  );
};

export default ExpandableText;
