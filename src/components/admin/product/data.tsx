export const productData = [
    {
        key: "1",
        code: "#1",
        name: "Giày cool ngầu (đen)",
        price: 799000,  // Loại bỏ chữ "Đ", chỉ giữ số
        description: "ádfasdfadsf",
        brand: "Adidas",
        categoryIds: '',  // Thêm vào cho Category
        image: "https://placehold.co/600x400",
        status: "Đã lên kệ",
        qty: 10,  // Thêm trường số lượng sản phẩm mặc định
        total: 799000 * 10,  // Tính giá thành tiền mặc định khi load dữ liệu
    },
    {
        key: "2",
        code: "#2",
        name: "Giày thể thao (trắng)",
        price: 799000,
        description: "",
        brand: "Nike",
        categoryIds: '',
        image: "https://placehold.co/600x400",
        status: "Chưa lên kệ",
        qty: 5,
        total: 799000 * 5,
    },
    {
        key: "3",
        code: "#3",
        name: "Giày thể thao (đen)",
        price: 799000,
        description: "",
        brand: "Puma",
        categoryIds: '',
        image: "https://placehold.co/600x400",
        status: "Đã lên kệ",
        qty: 8,
        total: 799000 * 8,
    },
];
