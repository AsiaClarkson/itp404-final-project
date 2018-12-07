import { helper } from "@ember/component/helper";

export function genreGradient(params) {
  let gradient =
    "background-image: linear-gradient(24deg, " +
    params[0] +
    " 0%," +
    params[1] +
    " 40%," +
    params[2] +
    " 100%);";

  return gradient;
}

export default helper(genreGradient);
