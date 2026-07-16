import SideBarProvider from "./components/customSideBar/SideBarProvider";
import SideBar from "./components/customSideBar/SideBar";
import SideBarHeader from "./components/customSideBar/SideBarHeader";
import SideBarContent from "./components/customSideBar/SideBarContent";
import SideBarButton from "./components/customSideBar/SideBarButton";
import SideBarFooter from "./components/customSideBar/SideBarFooter";
import MainContent from "./components/customSideBar/MainContent";
//
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Icons } from "../../../assets/icons";

export default function MainLayout() {
  const sectionList = [
    {
      title: "الرئيسية",
      icon: Icons.Home,
      url: "/home",
    },
    {
      title: "الطلبات",
      icon: Icons.Requests,
      url: "/requests",
    },
    {
      title: "المشرفين",
      icon: Icons.Users,
      url: "/supervisors",
    },
    {
      title: "عمال الصيانة",
      icon: Icons.Users,
      url: "/workers",
    },
    {
      title: "التقارير المولدة",
      icon: Icons.Reports,
      url: "/reports",
    },
    {
      title: "الإشعارات",
      icon: Icons.Notifications,
      url: "/notifications",
    },
    {
      title: "فئات الطلبات",
      icon: Icons.Category,
      url: "/categories",
    },
    {
      title: "معدات الصيانة",
      icon: Icons.Tool,
      url: "/tools",
    },
    {
      title: "الوحدات السكنية",
      icon: Icons.Building,
      url: "/units",
    },
  ];
  //
  const navigate = useNavigate();
  let path = useLocation().pathname;
  //
  return (
    <SideBarProvider>
      <SideBar className={"bg-bg-secondary font-[Cairo]"}>
        <SideBarHeader>
          <h1 className="font-bold text-text-primary text-[20px] text-right truncate">
            إدارة طلبات الصيانة
          </h1>
        </SideBarHeader>
        <SideBarContent className={"text-[16px]"}>
          {sectionList.map((section) => (
            <SideBarButton
              key={section.title}
              active={path.startsWith(section.url)}
              icon={section.icon}
              title={section.title}
              onClick={() => navigate(section.url)}
            />
          ))}
        </SideBarContent>
        <SideBarFooter>
          <SideBarButton
            active={false}
            icon={Icons.Settings}
            title={"الإعدادات"}
          />
          <SideBarButton active={false} icon={Icons.Settings} title={"الدعم"} />
          <SideBarButton
            active={false}
            icon={Icons.Settings}
            title={"تسجيل الخروج"}
          />
        </SideBarFooter>
      </SideBar>
      <MainContent className={"bg-bg-primary"}>
        <Outlet />
      </MainContent>
    </SideBarProvider>
  );
}
