import { useState } from 'react'
export const TagInput = (params: any) => {
  const { tags } = params;
  const [tagData, setTagData] = useState(tags);
  const removeTagData = (indexToRemove: any) => {
    setTagData([...tagData.filter((_: any, index: number) => index !== indexToRemove)]);
  };
  const addTagData = (event : any) => {
    if (event.target.value !== '') {
      setTagData([...tagData, event.target.value]);
      event.target.value = '';
    }
  };
  return (
    <div className="tag-input">
      <ul className="tags">
        {tagData.map((tag: any, index: number) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span
              className="tag-close-icon"
              onClick={() => removeTagData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={event => (event.key === 'Enter' ? addTagData(event) : null)}
        placeholder="Press enter to add a tag"
      />
    </div>
  );
};