import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { FaRegFileAlt } from "react-icons/fa";

export const SidebarLinks = [
  { name: 'Dashboard', path: '/', icon: LuLayoutDashboard },
  { name: 'All PRODUCTS', path: '/products', icon: TbBrandProducthunt },
  { name: 'ORDER LIST', path: '/order-list', icon: FaRegFileAlt, activeIcon: FaRegFileAlt },
];  