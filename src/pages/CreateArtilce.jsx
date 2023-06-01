import React, { useState } from "react";
import InputTextBox from "../components/InputTextBox";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const INITIAL_ARTICLE_INPUT = {
  "Article Title": "",
  "Article Intro": "",
  path: "",
};
const CreateArtilce = () => {
  const [articleInput, setArticleInput] = useState(INITIAL_ARTICLE_INPUT);
  const [value, setValue] = useState("");
  const { userDetail } = useSelector((state) => state.user);

  const createArtileHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", userDetail.userId);
    formData.append("article_title", articleInput["Article Title"]);
    formData.append("article_intro", articleInput["Article Intro"]);
    formData.append("article_body", value);
    formData.append("path", articleInput["path"]);

    const data = await fetch("http://localhost:3001/article", {
      method: "POST",
      headers: {
        Authorization: `bearer ${userDetail.token}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    }).then((res) => res.json());
    console.log("data", data);
  };

  const changeArtilceInputHandle = (objProperty, value) => {
    setArticleInput((prev) => ({ ...prev, [objProperty]: value }));
  };

  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
      <form
        onSubmit={createArtileHandle}
        className='bg-slate-700 flex flex-col gap-[10px] p-[20px] rounded-xl mx-auto w-[80%] sm:w-[800px]'
      >
        <h1 className='font-bold text-[25px] text-white'>Create Article</h1>
        <InputTextBox
          inputSetStateFunc={changeArtilceInputHandle}
          label='Article Title'
          inputStateValue={articleInput["Article Title"]}
          inputType='text'
        />
        <InputTextBox
          inputSetStateFunc={changeArtilceInputHandle}
          label='Article Intro'
          inputStateValue={articleInput["Article Intro"]}
          inputType='text'
        />
        <InputTextBox
          inputSetStateFunc={changeArtilceInputHandle}
          label='path'
          inputStateValue={articleInput["path"]}
          inputType='file'
        />
        <label className='text-slate-300 font-semibold text-[15px]'>
          Article Body
        </label>
        <div className='bg-white w-full'>
          <ReactQuill
            theme='snow'
            value={value}
            onChange={setValue}
            className='h-full'
          />
        </div>
        <button className='bg-slate-900 py-[10px] text-white rounded-md font-bold'>
          Create Article
        </button>
      </form>
    </div>
  );
};

export default CreateArtilce;
