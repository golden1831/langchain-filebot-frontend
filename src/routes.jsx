import { 
  Home,
  Workflow, 
  Pricing, 
  MybotsSetting, 
  Dashboard 
} from "@/pages";
import Blog from "@/pages/blog";
import { Boost } from "@/pages/blog/boost"
import { Benefit } from "@/pages/blog/benefit"
import { Monetize } from "@/pages/blog/monetize"
import { Optimize } from "@/pages/blog/optimize"
import { Revolution } from "@/pages/blog/revolution"
import { Unlock } from "@/pages/blog/unlock"
import { Future } from "@/pages/blog/future";

import { ChatbotDemo } from "@/pages/mychatbot/pageChat/chatbotdemo";
import {
  HomeIcon,
  UsersIcon,
  CreditCardIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import Reset from "@/pages/auth/reset";

import Profile from "@/pages/mychatbot/profile";
import Subscription from "@/pages/mychatbot/subscription";
import Chat from "@/pages/frameChat";
import Privacy from "./pages/privacy";

function External() {
  window.location.href = 'https://blog.filebot.ai/';
  return null;
}

export const routes = [
  {
    isNav: true,
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
    auth: 0,
  },
  {
    isNav: false,
    icon: UsersIcon,
    name: "How it works",
    path: "/workflow",
    element: <Workflow />,
    auth: 0,
  },
  {
    isNav: false,
    icon: CreditCardIcon,
    name: "Pricing",
    path: "/pricing",
    element: <Pricing />,
    auth: 0,
  },
  {
    isNav: true,
    name: "Privacy",
    path: "/privacy",
    element: <Privacy />,
    auth: 0,
  },
  {
    isNav: false,
    icon: ArrowRightOnRectangleIcon,
    name: "Login",
    path: "/signIn",
    element: <SignIn />,
    auth: 2,
  },
  {
    isNav: true,
    name: "SignUp",
    path: "/signUp",
    element: <SignUp />,
    auth: 2,
  },
  {
    isNav: true,
    name: "Reset",
    path: "/reset",
    element: <Reset />,
    auth: 2,
  },
  {
    isNav: false,
    name: "Blog",
    path: "/blog",
    element: <External />,
    auth: 0,
  },
  // {
  //   isNav: true,
  //   name: "Future",
  //   path: "/blog/future",
  //   element: <Future />,
  // },
  // {
  //   isNav: true,
  //   name: "Blog",
  //   path: "/blog/boost",
  //   element: <Boost />,
  // },
  // {
  //   isNav: true,
  //   name: "Blog",
  //   path: "/blog/revolution",
  //   element: <Revolution />,
  // },
  // {
  //   isNav: true,
  //   name: "Blog",
  //   path: "/blog/unlock",
  //   element: <Unlock />,
  // },
  // {
  //   isNav: true,
  //   name: "Blog",
  //   path: "/blog/optimize",
  //   element: <Optimize />,
  // },
  // {
  //   isNav: true,
  //   name: "Blog",
  //   path: "/blog/monetize",
  //   element: <Monetize />,
  // },
  // {
  //   isNav: true,
  //   name: "Blog",
  //   path: "/blog/benefit",
  //   element: <Benefit />,
  // },
];



export const privateRoutes = [{
  isNav: true,
  icon: HomeIcon,
  name: "home",
  path: "/home",
  element: <Home />,
  auth: 0,
},
{
  isNav: false,
  icon: UsersIcon,
  name: "How it works",
  path: "/workflow",
  element: <Workflow />,
  auth: 0,
},
{
  isNav: false,
  icon: CreditCardIcon,
  name: "Pricing",
  path: "/pricing",
  element: <Pricing />,
  auth: 0,
},
{
  isNav: false,
  icon: ChatBubbleOvalLeftEllipsisIcon,
  name: "Dashboard",
  path: "/dashboard",
  element: <Dashboard />,
  auth: 1,
},
{
  isNav: true,
  name: "Privacy",
  path: "/privacy",
  element: <Privacy />,
  auth: 0,
},
{
  isNav: true,
  name: "Profile",
  path: "/dashboard/profile",
  element: <Profile />,
  auth: 1,
},
{
  isNav: true,
  name: "Profile",
  path: "/dashboard/subscription",
  element: <Subscription />,
  auth: 1,
},
{
  isNav: false,
  name: "Blog",
  path: "/blog",
  element: <External />,
  auth: 0,
},
{
  isNav: true,
  name: "ChatbotDemo",
  path: "/chatbot/:botId",
  element: <ChatbotDemo />,
  auth: 1,
},
{
  isNav: true,
  name: "setting",
  path: "/dashboard/setting/:setId",
  element: <MybotsSetting />,
  auth: 1,
},
{
  isNav: true,
  name: "Chat",
  path: "/chat/:embedID",
  element: <Chat />,
  auth: 1,
},]

export default {routes, privateRoutes};
