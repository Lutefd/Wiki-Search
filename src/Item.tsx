const Item = ({
  snippet,
  title,
  pageid,
}: {
  snippet: string;
  title: string;
  pageid: number;
}) => {
  return (
    <div key={pageid}>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: snippet }}></p>
    </div>
  );
};

export default Item;
