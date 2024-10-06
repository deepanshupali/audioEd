"use client";
import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import { DiApple } from "react-icons/di";
import classes from "./NavbarMinimalColored.module.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { TbLayoutGridRemove } from "react-icons/tb";
import { GiPrism } from "react-icons/gi";
import { BsSoundwave } from "react-icons/bs";
import { RiFindReplaceLine } from "react-icons/ri";
import { BsScissors } from "react-icons/bs";
import { GiJoin } from "react-icons/gi";
import { FaMicrophone } from "react-icons/fa";
import { SiSinglestore } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import Link from "next/link";
function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Link className={classes.noUnderline} href={"/cutter"}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
        <div style={{ fontSize: "0.9rem" }}>{label}</div>
      </UnstyledButton>
    </Link>
  );
}

const mockdata = [
  { icon: IoIosRemoveCircle, label: "Remover" },
  { icon: GiPrism, label: "Splitter" },
  { icon: BsSoundwave, label: "Pitcher" },
  { icon: RiFindReplaceLine, label: "BPM finder" },
  { icon: FaMicrophone, label: "Cutter" },
  { icon: GiJoin, label: "Joiner" },
  { icon: BsScissors, label: "Recorder" },
  { icon: SiSinglestore, label: "karoke" },
];

export default function NavbarMinimalColored({ isVisible, toggleNavbar }) {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav
      className={classes.navbar}
      color="gray[1]"
      style={{
        position: "fixed",
        left: 0,
        top: 0,

        transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
        zIndex: 1000,
      }}
    >
      <Center>
        <BiMenuAltLeft
          size={45}
          onClick={toggleNavbar}
          style={{ cursor: "pointer" }}
        />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={3}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={12}>
        <NavbarLink icon={BiSupport} label="Support" />
        <NavbarLink icon={FaLanguage} label="Language" />
      </Stack>
    </nav>
  );
}
