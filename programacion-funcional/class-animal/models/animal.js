const animal = ({ quantityLegs, colors, skinsTypes, sexTypes, age }) => {
  const getQuantityLegs = () => {
    return quantityLegs.join(", ");
  };

  const getColors = () => {
    return colors.join(", ");
  };
  const getSkinsTypes = () => {
    return skinsTypes.join(", ");
  };
  const getSexTypes = () => {
    return sexTypes.join(", ");
  };
  return {
    quantityLegs,
    colors,
    skinsTypes,
    sexTypes,
    age,
    getColors,
    getSkinsTypes,
    getSexTypes,
    getQuantityLegs,
  };
};
