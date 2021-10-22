import { dinheiroMask } from "masks-br";

const PriceHandler = {
  parse(price) {
    return price ? dinheiroMask(price) : 0;
  },
};

export default PriceHandler;
