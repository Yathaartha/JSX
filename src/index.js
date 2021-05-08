import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const comments = [
  {
    author: "Sam",
    date: "Today at 6:00PM",
    message: "Nice blog post!!",
    avatar: faker.image.avatar(),
  },
  {
    author: "Alex",
    date: "Yesterday at 8:00PM",
    message: "Good blog post!",
    avatar: faker.image.avatar(),
  },
  {
    author: "Jane",
    date: "Yesterday at 7:00AM",
    message: "Wew blog post!",
    avatar: faker.image.avatar(),
  },
];

const App = () => {
  return (
    <div className="ui container comments">
      {comments.map((comment, index) => {
        return (
          <ApprovalCard>
            <CommentDetail {...comment} key={index} />
          </ApprovalCard>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
