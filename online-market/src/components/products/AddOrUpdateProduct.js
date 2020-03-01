import React, { useEffect, useState } from "react"; //useeffect compdidmount vsnin birlesimi,usestate setstate
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./productDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history, //daha önce geldigim sayfalara yonlendirme yapabilmek icin (reacttan geliyor)
  ...props //usttekileri bu fonksiyonun proplarına eklemek
}) {
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]); //useEffect butun lifecycleları yonetmeye calistigi icin sonsuz donguye girmemesi icin.prop.sproducti izle doma yerlestiginde bitir.

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(previousProduct => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors(previousErrors => ({
        ...previousErrors,
        productName: "Ürün ismi olmalıdır"
      }));
    } else {
      setErrors(previousErrors => ({
        ...previousErrors,
        productName: ""
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}
export function getProductById(products, productId) {
  let product = products.find(product => product.id == productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer
  };
}

//hooksta kullanimi bu sekilde;
const mapDispatchToProps = {
  getCategories,
  saveProduct
};

export default connect( mapStateToProps,
  mapDispatchToProps
  )(AddOrUpdateProduct);
