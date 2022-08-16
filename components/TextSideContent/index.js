const TextSideComponent = (props) => {
  return (
    <>
      <div className="left-right-wrapper">
        <article className="left-side-content">{props.leftSide}</article>
        <aside className="right-side-content">{props.rightSide}</aside>
      </div>
    </>
  );
};

export default TextSideComponent;
