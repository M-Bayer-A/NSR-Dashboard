export default function SideBarContent({ children, className }) {
  return <div className={`${className} p-4 grow`}>{children}</div>;
}
