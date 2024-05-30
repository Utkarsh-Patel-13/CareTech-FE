"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { usePopover } from "@/hooks/use-popover";

import { MobileNav } from "./mobile-nav";
import { UserPopover } from "./user-popover";
import {
    NotificationsActive as BellIcon,
    Menu as ListIcon,
    Search as MagnifyingGlassIcon,
    AccountCircle as UsersIcon,
} from "@mui/icons-material";

export function MainNav(): React.JSX.Element {
    const [openNav, setOpenNav] = React.useState<boolean>(false);

    const userPopover = usePopover<HTMLDivElement>();

    return <React.Fragment></React.Fragment>;
}
