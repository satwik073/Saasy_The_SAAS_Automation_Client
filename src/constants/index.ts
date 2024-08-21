import { Category, GraphicEqOutlined, HomeOutlined, HomeRounded, Payment, SettingsOutlined } from "@mui/icons-material"
import { HomeIcon } from "@radix-ui/react-icons"
import { Home, Settings, Logs } from "lucide-react"
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaBlog, FaConnectdevelop, FaHouseDamage, FaListAlt, FaMoneyBill, FaMoneyBillWaveAlt, FaSteam } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5";
import { PiSoundcloudLogoLight, PiStackOverflowLogoThin } from "react-icons/pi";
import { GrTemplate } from "react-icons/gr";
import { defualt_and_defined_routes } from "./standard_routes";
interface NavitemDestructured {
  id: number,
  route_link_naming_determined: string,
  specified_path: string
}
export const menuOptions = [
  { naming_determined: 'Dashboard', Component: Home, href_routes_enabled: `${defualt_and_defined_routes.dashboard_routes}` },
  { naming_determined: 'Workflows', Component: PiStackOverflowLogoThin, href_routes_enabled: `${defualt_and_defined_routes.workflows_route}` },
  { naming_determined: 'Settings', Component: IoSettingsOutline, href_routes_enabled: `${defualt_and_defined_routes.settings_route}` },
  { naming_determined: 'Connections', Component: FaConnectdevelop, href_routes_enabled: `${defualt_and_defined_routes.connections_route}` },
  { naming_determined: 'Billings', Component: CiMoneyCheck1, href_routes_enabled: `${defualt_and_defined_routes.billing_route}` },
  { naming_determined: 'Templates', Component: GrTemplate, href_routes_enabled: `${defualt_and_defined_routes.templates_route}` },
  { naming_determined: 'Logs', Component: PiSoundcloudLogoLight, href_routes_enabled: `${defualt_and_defined_routes.previous_logs}` },
]

export const Navhandler: NavitemDestructured[] = [
  {
    "id": 1,
    route_link_naming_determined: "Products",
    specified_path: "/products"
  },
  {
    "id": 2,
    route_link_naming_determined: "Pricing",
    specified_path: "/pricing"
  },
  {
    "id": 3,
    route_link_naming_determined: "Clients",
    specified_path: "/clients"
  },
  {
    "id": 4,
    route_link_naming_determined: "Resources",
    specified_path: "/resources"
  },
  {
    "id": 5,
    route_link_naming_determined: "Documentation",
    specified_path: "/documenttation"
  },
  {
    "id": 6,
    route_link_naming_determined: "Enterprise",
    specified_path: "/enterprise"
  },
]

export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'


export const CONNECTIONS = [
  {
    title: 'Google Drive',
    description: 'Connect your google drive to listen to folder changes',
    image: '/googleDrive.png',
    connectionKey: 'googleNode',
    alwaysTrue: true,
  },
  {
    title: 'Discord',
    description: 'Connect your discord to send notification and messages',
    image: '/discord.png',
    connectionKey: 'discordNode',
    accessTokenKey: 'webhookURL',
  },
  {
    title: 'Notion',
    description: 'Create entries in your notion dashboard and automate tasks.',
    image: '/notion.png',
    connectionKey: 'notionNode',
    accessTokenKey: 'accessToken',
  },
  {
    title: 'Slack',
    description:
      'Use slack to send notifications to team members through your own custom bot.',
    image: '/slack.png',
    connectionKey: 'slackNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
]