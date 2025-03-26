import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Docs",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "test 1",
        newTab: false,
        path: "",
      },
      {
        id: 32,
        title: "test 2",
        newTab: false,
        path: "",
      }, 
    ],
  },
    {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
