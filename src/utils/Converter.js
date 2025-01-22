export const convertToOrderTableData = (data) => {
    return data.map((item) => {
        return {

            id: item?.product?.id,
            key: item?.product?.id,
            product: item?.product?.product?.name,
            price: item?.product?.product?.price,
            qty: item?.quantity,
            total: item?.quantity * item?.product?.product?.price,
            details: item?.product?.product?.description,
            image: item?.product?.product?.images?.size ? item?.product?.product?.images[0] : '',
            size: item?.product?.size
        }
    })
}