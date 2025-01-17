import FilterSection from "./FilterSection";

const Filter = () => {
  const filterData = [
    {
      title: "Loại giày",
      options: [
        "Giày chạy bộ",
        "Giày bóng rổ",
        "Giày đá bóng",
        "Giày thời trang",
      ],
    },
    {
      title: "Màu sắc",
      options: ["Đen", "Trắng", "Đỏ", "Be"],
    },
    {
      title: "Thương hiệu",
      options: ["Adidas", "Nike", "Puma"],
    },
  ];
  return (
    <div>
      {filterData.map((filter, index) => (
        <FilterSection
          key={index}
          title={filter.title}
          options={filter.options}
        />
      ))}
    </div>
  );
};

export default Filter;
