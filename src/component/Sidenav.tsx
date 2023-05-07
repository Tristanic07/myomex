import Group from "../assets/svg/Group";
import HomeLogo from "../assets/svg/HomeLogo";
import Info from "../assets/svg/Info";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Sidenav() {
  return (
    <div className="flex flex-col gap-2 fixed right-5 top-32 border-2 border-blue-900 rounded-lg p-1 bg-slate-200">
      <AnchorLink href="#home">
        <HomeLogo width="32" height="32" />
      </AnchorLink>
      <AnchorLink href="#info">
        <Info width="32" height="32" />
      </AnchorLink>
      <AnchorLink href="#group">
        <Group width="32" height="32" />
      </AnchorLink>
    </div>
  );
}
