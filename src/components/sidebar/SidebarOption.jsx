import "./sidebarOption.css";

export const SidebarOption = (props) => {
  const { Icon, children } = props;
  return (
    <div className="sidebar__option">
      <Icon sx={{ fontSize: 30 }} />
      <h2 className="sidebar__inner-menu">{children}</h2>
    </div>
  );
};
