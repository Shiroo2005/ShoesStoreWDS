
export const fetchProducts = async (page = 1) => {
    try {
      const response = await fetch(`http://localhost:8080/products?p=${page}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer <Your-Token>',  
          'Content-Type': 'application/json',
        }
      });
  
      if (!response.ok) {
        throw new Error('Unauthorized or API error');
      }
  
      const data = await response.json();
      return data;  
    } catch (error) {
      console.error('Có lỗi khi lấy dữ liệu:', error.message);
      throw error;  
    }
  };
  