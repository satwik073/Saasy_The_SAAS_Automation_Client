import { Category, Payment } from "@mui/icons-material"
import { Home, Settings, Logs } from "lucide-react"
import { FaBlog, FaConnectdevelop, FaHouseDamage, FaListAlt, FaMoneyBill, FaSteam } from "react-icons/fa"

interface NavitemDestructured {
    id : number,
    route_link_name : string,
    specified_path : string
}
export const menuOptions = [
    { name: 'Dashboard', Component: FaHouseDamage, href: '/dashboard' },
    // { name: 'Workflows', Component: Workflows, href: '/workflows' },
    { name: 'Settings', Component: FaSteam, href: '/settings' },
    { name: 'Connections', Component: FaConnectdevelop, href: '/settings' },
    { name: 'Billings', Component: FaMoneyBill, href: '/settings' },
    // { name: 'Connections', Component: Category, href: '/connections' },
    // { name: 'Billing', Component: Payment, href: '/billing' },
    { name: 'Templates', Component: FaListAlt, href: '/templates' },
    { name: 'Logs', Component: FaBlog, href: '/logs' },
  ]
  
export const Navhandler : NavitemDestructured[] = [
    {
        "id": 1,
        route_link_name: "Products",
        specified_path: "/products"
    },
    {
        "id": 2,
        route_link_name: "Pricing",
        specified_path: "/pricing"
    },
    {
        "id": 3,
        route_link_name: "Clients",
        specified_path: "/clients"
    },
    {
        "id": 4,
        route_link_name: "Resources",
        specified_path: "/resources"
    },
    {
        "id": 5,
        route_link_name: "Documentation",
        specified_path: "/documenttation"
    },
    {
        "id": 6,
        route_link_name: "Enterprise",
        specified_path: "/enterprise"
    },
]