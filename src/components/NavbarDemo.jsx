// src/components/ui/NavbarDemo.jsx
"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/resizable-navbar";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
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
    <div className={cn("absolute top-10 inset-x-10 max-w-4xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div onClick={() => handleNavigate("/Videos")}>
          <MenuItem setActive={setActive} active={active} item="VIDEOS">
          </MenuItem>
        </div>

        <div onClick={() => handleNavigate("/Synopsis")}>
          <MenuItem setActive={setActive} active={active} item="SYNOPSIS">
          </MenuItem>
        </div>

        <div onClick={() => handleNavigate("/Gallery")}>
          <MenuItem setActive={setActive} active={active} item="GALLERY">
          </MenuItem>
        </div>

        <div>
          <MenuItem setActive={setActive} active={active} item="SOUNDTRACK">
          </MenuItem>
        </div>

      </Menu>
    </div>
  );
}