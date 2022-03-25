const prenda = ({ colors, sizes, quantity, decorations, cloths }) => {
  const getColors = () => {
    return colors.join(", ");
  };
  const getSizes = () => {
    return sizes.join(", ");
  };
  const getDecorations = () => {
    return decorations.join(", ");
  };
  const getCloths = () => {
    return cloths.join(", ");
  };
  return {
    colors,
    sizes,
    quantity,
    decorations,
    cloths,
    getSizes,
    getDecorations,
    getCloths,
    getColors,
  };
};
