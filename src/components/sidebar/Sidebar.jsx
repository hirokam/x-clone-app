import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { SidebarOption } from "./SidebarOption";
import { PrimaryButton } from "../button/PrimaryButton";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar__frame">
      <div className="sidebar">
        {/* エックスアイコン */}
        <XIcon
          sx={{ fontSize: 30, marginLeft: 1.2 }}
          className="sidebar__xIcon"
        />

        {/**SidebarOption */}
        <SidebarOption Icon={HomeIcon}>ホーム</SidebarOption>
        <SidebarOption Icon={SearchIcon}>話題を検索</SidebarOption>
        <SidebarOption Icon={NotificationsIcon}>通知</SidebarOption>
        <SidebarOption Icon={MailIcon}>メッセージ</SidebarOption>
        <SidebarOption Icon={ListAltIcon}>リスト</SidebarOption>
        <SidebarOption Icon={BookmarkBorderIcon}>ブックマーク</SidebarOption>
        <SidebarOption Icon={PeopleOutlinedIcon}>コミュニティ</SidebarOption>
        <SidebarOption Icon={PermIdentityIcon}>プロフィール</SidebarOption>
        <SidebarOption Icon={MoreHorizIcon}>もっと見る</SidebarOption>
        {/**SidebarOption */}

        {/**ポストボタン */}
        <PrimaryButton style={{ height: "50px", width: "200px" }}>
          ポストする
        </PrimaryButton>
      </div>
    </div>
  );
};
