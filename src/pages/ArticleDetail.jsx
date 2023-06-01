import React, { useEffect, useState } from "react";
import { PRE_STYLES } from "../styles";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import { useSelector } from "react-redux";
const ArticleDetail = () => {
  const { userDetail } = useSelector((state) => state.user);
  // console.log(userDetail);
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [html, setHtml] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`http://localhost:3001/articles/${articleId}`);
      const data = await res.json();

      setArticle(data.articles[0]);
      setHtml(data.articles[0].artical_body);
    };

    const fetchComments = async () => {
      const res = await fetch(`http://localhost:3001/comment/${articleId}`);
      const data = await res.json();
      setComments(data.comment);
      // setComments();
    };
    fetchArticle();
    fetchComments();
  }, [articleId]);
  console.log("comment", comments);

  const giveCommentHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("user_id", userDetail.userId);
    formData.append("article_id", articleId);
    formData.append("comment_text", commentInput);

    const data = await fetch("http://localhost:3001/comment", {
      method: "POST",
      headers: {
        Authorization: `bearer ${userDetail.token}`,
      },
      body: formData,
    }).then((res) => res.json());

    setCommentInput("");
    alert(data.message);

    setComments((prev) => [...prev, data.comment]);
  };

  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <h3 className='text-black text-[30px] font-bold'>
        {article.artical_title}
      </h3>
      <img
        className='w-full max-h-[400px] object-cover rounded-3xl my-[10px] shadow-lg'
        src={`http://localhost:3001/${article.artical_photo}`}
        alt='Something went wrong'
      />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className='text-slate-700'
      ></div>
      <h2 className='font-bold text-[18px]'>Comment Section</h2>
      <form
        onSubmit={giveCommentHandle}
        className='flex items-center gap-[20px] justify-between my-[10px]'
      >
        <input
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          type='text'
          className='flex-1 outline-none border-b-[2px] px-[10px] py-[10px]'
          placeholder='Please enter a comment'
        />
        <button
          type='submit'
          className='border p-[10px] rounded-md hover:bg-green-500'
        >
          Give comment
        </button>
      </form>
      <div className='flex flex-col gap-[20px] divide-y'>
        {comments.map((com) => (
          <Comment
            key={com.comment_id}
            commentText={com.comment_text}
            commentOwner={com.user.user_name}
            photoURL={com.user.profile_image}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleDetail;
