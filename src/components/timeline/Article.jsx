import { Avatar } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./article.css";

export const Article = () => {
  return (
    <>
      <article className="article__all">
        <div className="article__avatar">
          <Avatar />
        </div>
        <div className="article__content">
          <div className="article__content-account">
            <div>
              <a href="#" className="display-name">
                かめやまひろき
              </a>
            </div>
            <div className="account-datetime-group">
              <a href="#" className="account-name">
                ＠kamex1987
              </a>
              <span className="breakpoint">・</span>
              <time datetime="" className="datetime">
                2024年7月11日
              </time>
            </div>
          </div>
          <p className="article__body">
            今日も1日reactでXのクローンを作っている。css当ててる時が一番楽しいかも!!デザインをもっと勉強しようかな。。
          </p>
          <img
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
            alt="画像"
            className="article__img"
          />
          <div className="article__action">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <RepeatRoundedIcon fontSize="small" />
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <BarChartIcon fontSize="small" />
            <div className="article__action-right-group">
              <BookmarkBorderOutlinedIcon fontSize="small" />
              <ShareOutlinedIcon fontSize="small" />
            </div>
          </div>
        </div>
      </article>
      <article className="article__all">
        <div className="article__avatar">
          <Avatar />
        </div>
        <div className="article__content">
          <div className="article__content-account">
            <div>
              <a href="#" className="display-name">
                かめやまひろき
              </a>
            </div>
            <div className="account-datetime-group">
              <a href="#" className="account-name">
                ＠kamex1987
              </a>
              <span className="breakpoint">・</span>
              <time datetime="" className="datetime">
                2024年7月11日
              </time>
            </div>
          </div>
          <p className="article__body">
            今日も1日reactでXのクローンを作っている。css当ててる時が一番楽しいかも!!デザインをもっと勉強しようかな。。
          </p>
          <img
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
            alt="画像"
            className="article__img"
          />
          <div className="article__action">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <RepeatRoundedIcon fontSize="small" />
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <BarChartIcon fontSize="small" />
            <div className="article__action-right-group">
              <BookmarkBorderOutlinedIcon fontSize="small" />
              <ShareOutlinedIcon fontSize="small" />
            </div>
          </div>
        </div>
      </article>
      <article className="article__all">
        <div className="article__avatar">
          <Avatar />
        </div>
        <div className="article__content">
          <div className="article__content-account">
            <div>
              <a href="#" className="display-name">
                かめやまひろき
              </a>
            </div>
            <div className="account-datetime-group">
              <a href="#" className="account-name">
                ＠kamex1987
              </a>
              <span className="breakpoint">・</span>
              <time datetime="" className="datetime">
                2024年7月11日
              </time>
            </div>
          </div>
          <p className="article__body">
            今日も1日reactでXのクローンを作っている。css当ててる時が一番楽しいかも!!デザインをもっと勉強しようかな。。
          </p>
          <img
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
            alt="画像"
            className="article__img"
          />
          <div className="article__action">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <RepeatRoundedIcon fontSize="small" />
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <BarChartIcon fontSize="small" />
            <div className="article__action-right-group">
              <BookmarkBorderOutlinedIcon fontSize="small" />
              <ShareOutlinedIcon fontSize="small" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
