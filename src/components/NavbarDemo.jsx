// src/components/ui/NavbarDemo.jsx
"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/resizable-navbar";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center px-4 sm:px-6 md:px-10">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div
      className={cn(
        "absolute top-6 sm:top-10 inset-x-4 sm:inset-x-10 max-w-full sm:max-w-4xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive} className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <div onClick={() => handleNavigate("/Videos")}>
          <MenuItem setActive={setActive} active={active} item="VIDEOS" />
        </div>

        <div onClick={() => handleNavigate("/Synopsis")}>
          <MenuItem setActive={setActive} active={active} item="SYNOPSIS" />
        </div>

        <div onClick={() => handleNavigate("/Gallery")}>
          <MenuItem setActive={setActive} active={active} item="GALLERY" />
        </div>

        <div>
          <MenuItem setActive={setActive} active={active} item="SOUNDTRACK" />
        </div>
      </Menu>
    </div>
  );
}
