/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getAllCategoriesAPI } from "../../utils/CategoryAPI";
import FilterSection from "./FilterSection";

const Filter = (props) => {
  const [categories, setCategories] = useState([]);
  const [queryCategory, setQueryCategory] = useState('')
  const [queryBrand, setQueryBrand] = useState('')
  const { query, setQuery } = props
  const getAllCategories = async () => {
    const result = await getAllCategoriesAPI();
    setCategories(result.data);
    console.log(result);
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    setQuery(`CategoryId=${queryCategory}&Brand=${queryBrand}`)
    console.log(query);

  }, [queryCategory, queryBrand])

  const filterData = [
    {
      title: "Loại giày",
      options: categories.map((category) => ({
        label: category.name,
        value: category.id,
      })),
      key: 'CategoryId'
    },
    {
      title: "Thương hiệu",
      options: [
        { label: "Adidas", value: "adidas" },
        { label: "Nike", value: "nike" },
        { label: "Puma", value: "puma" },
      ],
      key: 'Brand'
    },
  ];



  return (
    <div>
      {filterData.map((filter, index) => (
        <FilterSection
          key={index}
          title={filter.title}
          options={filter.options}
          nameQuery={filter.key}
          setQueryCategory={setQueryCategory}
          setQueryBrand={setQueryBrand}
          queryBrand={queryBrand}
          queryCategory={queryCategory}
        />

      ))}
    </div>
  );
};

export default Filter;
