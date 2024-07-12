import SearchIcon from "@mui/icons-material/Search";

export const Widget = () => {
  return (
    <>
      <div className="widget">
        <div>
          <SearchIcon />
          <input type="text" placeholder="検索" />
              </div>
              <div>
                  <h2>いまどうしてる？</h2>
              </div>
      </div>
    </>
  );
};
