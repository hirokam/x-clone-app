import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Divider from "@mui/material/Divider";

import { PrimaryButton } from "../button/PrimaryButton";
import "./tweetbox.css";

export const TweetBox = () => {
  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox__avatar-input">
          <Avatar />
          <input
            className="tweetbox__input"
            type="text"
            placeholder="いまどうしてる？"
          />
        </div>
          <Divider variant="middle" component="div" />
        <div className="tweetbox__button">
          <div>
            <InsertPhotoIcon />
          </div>
          <PrimaryButton type="submit">ポストする</PrimaryButton>
        </div>
      </form>
    </div>
  );
};
