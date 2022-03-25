const productoDeAseo = ({
  colors,
  smells,
  quantity,
  price,
  statusMaterial,
}) => {
  const getColors = () => {
    return colors.join(", ");
  };
  const getPriceProducts = () => {
    return price * quantity;
  };
  const getStatusMaterial = () => {
    return statusMaterial.join(", ");
  };
  const getSmells = () => {
    return smells.join(", ");
  };
  return {
    colors,
    smells,
    quantity,
    price,
    statusMaterial,
    getColors,
    getPriceProducts,
    getStatusMaterial,
    getSmells,
  };
};
