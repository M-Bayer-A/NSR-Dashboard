import SideBarProvider from "./components/customSideBar/SideBarProvider";
import SideBar from "./components/customSideBar/SideBar";
import SideBarHeader from "./components/customSideBar/SideBarHeader";
import SideBarContent from "./components/customSideBar/SideBarContent";
import SideBarButton from "./components/customSideBar/SideBarButton";
import SideBarFooter from "./components/customSideBar/SideBarFooter";
import MainContent from "./components/customSideBar/MainContent";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Icons } from "../../assets/icons";

export default function MainLayout() {
  const sectionList = [
    {
      title: "الرئيسة",
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
  return (
    <SideBarProvider
      className={"w-screen h-screen bg-zinc-100 overflow-hidden"}
    >
      <SideBar className={"bg-[#F8F8F8] font-[Cairo]"}>
        <SideBarHeader>
          <h1 className="font-bold text-black text-[20px] text-right truncate">
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
      <MainContent className={"overflow-auto bg-white"}>
        {/* <div
          className="w-full py-3 px-4 border-b border-[#DFDFDF]
          text-right text-[20px] text-black font-[Cairo] font-bold"
        >
          <h1>{sectionList.find((s) => s.url == path)}</h1>
        </div> */}

        <Outlet />
      </MainContent>
    </SideBarProvider>
  );
}
