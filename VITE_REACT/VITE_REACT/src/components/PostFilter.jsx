import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/mySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={"Search ..."}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={"Sort"}
        options={[
          { value: "title", name: "Of name" },
          { value: "body", name: "Of description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
