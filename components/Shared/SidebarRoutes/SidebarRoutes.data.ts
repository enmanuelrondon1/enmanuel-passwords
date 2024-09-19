import {
  CreditCard,
  Earth,
  Landmark,
  LayoutList,
  Lock,
  Settings,
  Star,
  UserPen,
} from "lucide-react";

export const dataSidebarElements = [
  {
    title: "ELements",
    icon: LayoutList,
    children: [
      {
        item: "Favourites",
        href: "/favourites",
        icon: Star,
      },
      {
        item: "Logins",
        href: "/logins-elements",
        icon: Earth,
      },
      {
        item: "Credit Card",
        href: "/credit-card",
        icon: CreditCard,
      },
    ],
  },
];

export const dataSidebarConfiguration = [
  {
    title: "Configuration",
    icon: Settings,
    children: [
      {
        item: "Profile",
        href: "/profile",
        icon: UserPen,
        premiun:false
      },
      {
        item: "Security",
        href: "#",
        icon: Lock,
        premiun:true
      },
      {
        item: "Suscription",
        href: "#",
        icon: Landmark,
        premiun:true
      },
    ],
  },
]



