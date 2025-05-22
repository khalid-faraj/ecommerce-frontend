import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import Category from "@components/eCommerce/Category/Category";
import GridList from "@components/common/GridList/GridList";
import { Loading } from "@components/feedback";
export type TCategory = {
  id?: number;
  title: string;
  prefix: string;
  img: string;
};
const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Loading loading={loading} error={error}>
      <GridList<TCategory>
        records={records}
        renderItem={(record) => <Category {...record} />}
      />
    </Loading>
  );
};

export default Categories;