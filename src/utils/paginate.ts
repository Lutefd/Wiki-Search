import { Constants } from './constants';
const Paginate = (array: any[], currentPage: number) => {
  const { elementsPerPage } = Constants();
  const start = currentPage * elementsPerPage;
  return array.slice(start, start + elementsPerPage);
};
export default Paginate;
