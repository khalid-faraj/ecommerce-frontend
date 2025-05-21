import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

interface ICategory {
   
  id?: number;
  title: string;
  cat_prefix: string;
  img: string;

}

const Category = ({ title, img, cat_prefix }: ICategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${cat_prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;