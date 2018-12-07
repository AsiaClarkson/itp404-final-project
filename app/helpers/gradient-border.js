import { helper } from "@ember/component/helper";

export function gradientBorder(params /*, hash*/) {
  let gradient =
    "border-image: linear-gradient(24deg, " +
    params[0] +
    " 0%," +
    params[1] +
    " 40%," +
    params[2] +
    " 100%);";

  return gradient;
}

export default helper(gradientBorder);
