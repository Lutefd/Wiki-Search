const paginate = (array: any[], currentPage: number) => {
  const start = currentPage * 10;

  return array.slice(start, start + 10);
};
export default paginate;
