import { Article } from "./Article";
import { TweetBox } from "./TweetBox";
import "./timeline.css";

export const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline__header">
        <h2 className="timeline__header-inner">ホーム</h2>
      </div>
      <TweetBox />
      <Article />
    </div>
  );
};
