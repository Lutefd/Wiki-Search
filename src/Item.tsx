const Item = ({
  snippet,
  title,
  pageid,
}: {
  snippet: any;
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
