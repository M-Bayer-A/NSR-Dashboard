import SideBarProvider from "./components/customSideBar/SideBarProvider";
import SideBar from "./components/customSideBar/SideBar";
import SideBarHeader from "./components/customSideBar/SideBarHeader";
import SideBarContent from "./components/customSideBar/SideBarContent";
import SideBarButton from "./components/customSideBar/SideBarButton";
import SideBarFooter from "./components/customSideBar/SideBarFooter";
import MainContent from "./components/customSideBar/MainContent";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Icons } from "../../assets/icons";
import AppBar from "./components/AppBar";

export default function MainLayout() {
  const sectionList = [
    {
      title: "الرئيسية",
      icon: Icons.Home,
      url: "/home",
    },
    {
      title: "الطلبات",
      icon: Icons.Papers,
      url: "/requests",
    },
    {
      title: "المشرفين",
      icon: Icons.People,
      url: "/supervisors",
    },
    {
      title: "عمال الصيانة",
      icon: Icons.People,
      url: "/workers",
    },
    {
      title: "التقارير المولدة",
      icon: Icons.Report,
      url: "/reports",
    },
  ];
  //
  const navigate = useNavigate();
  let path = useLocation().pathname;
  //
  const appBarTitle = () => {
    let section = sectionList.find((s) => s.url == path);
    return section ? section.title : "";
  };
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
              active={path == section.url}
              icon={section.icon}
              title={section.title}
              onClick={() => navigate(section.url)}
            />
          ))}
        </SideBarContent>
        <SideBarFooter>
          <SideBarButton
            active={false}
            icon={Icons.Setting}
            title={"الإعدادات"}
          />
          <SideBarButton active={false} icon={Icons.Flag} title={"الدعم"} />
          <SideBarButton
            active={false}
            icon={Icons.Logout}
            title={"تسجيل الخروج"}
          />
        </SideBarFooter>
      </SideBar>
      <MainContent className={"flex flex-col bg-bg-primary"}>
        <AppBar title={appBarTitle()} />
        <div className="w-full grow overflow-auto">
          <Outlet />
        </div>
      </MainContent>
    </SideBarProvider>
  );
}
