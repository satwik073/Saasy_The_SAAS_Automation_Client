import { Category, GraphicEqOutlined, HomeOutlined, HomeRounded, Payment, SettingsOutlined } from "@mui/icons-material"
import { HomeIcon } from "@radix-ui/react-icons"
import { Home, Settings, Logs } from "lucide-react"
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaBlog, FaConnectdevelop, FaHouseDamage, FaListAlt, FaMoneyBill, FaMoneyBillWaveAlt, FaSteam } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5";
import { PiSoundcloudLogoLight, PiStackOverflowLogoThin } from "react-icons/pi";
import { GrTemplate } from "react-icons/gr";
interface NavitemDestructured {
    id : number,
    route_link_name : string,
    specified_path : string
}
export const menuOptions = [
    { name: 'Dashboard', Component: Home, href: '/dashboard' },
    { name: 'Workflows', Component: PiStackOverflowLogoThin, href: '/workflows' },
    { name: 'Settings', Component: IoSettingsOutline, href: '/settings' },
    { name: 'Connections', Component: FaConnectdevelop, href: '/connections' },
    { name: 'Billings', Component: CiMoneyCheck1, href: '/billings' },
    { name: 'Templates', Component:GrTemplate, href: '/templates' },
    { name: 'Logs', Component: PiSoundcloudLogoLight, href: '/logs' },
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