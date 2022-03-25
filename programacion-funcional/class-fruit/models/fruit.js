const fruit = ({
  colors,
  weights,
  quantity,
  sizes,
  flavors,
  texture,
  price,
}) => {
  const getColors = () => {
    return colors.join(", ");
  };
  const getWeights = () => {
    return weights.join(", ");
  };
  const getSizes = () => {
    return sizes.join(", ");
  };
  const getFlavors = () => {
    return flavors.join(", ");
  };
  const getPriceTotal = () => {
    return price * quantity;
  };
  return {
    colors,
    weights,
    quantity,
    sizes,
    flavors,
    texture,
    price,
    getColors,
    getWeights,
    getSizes,
    getFlavors,
    getPriceTotal,
  };
};
