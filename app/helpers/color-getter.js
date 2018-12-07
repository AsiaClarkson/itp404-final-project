import { helper } from "@ember/component/helper";

export function colorGetter(params) {
  //1st genre
  if (params[0] === "pop") {
    return "rgba(34,193,195,1)";
  }
  if (params[0] === "rap") {
    return "rgba(204,43,94,1)";
  }
  if (params[0] === "hip-hop") {
    return "rgba(253,187,45,1)";
  }
  if (params[0] === "vaporwave") {
    return "rgba(131,58,180,1)";
  }
  if (params[0] === "latin") {
    return "rgba(253,29,29,1)";
  }
  if (params[0] === "edm") {
    return "rgba(252,176,69,1)";
  }
  if (params[0] === "country") {
    return "rgba(238,174,202,1)";
  }
  if (params[0] === "rock") {
    return "rgba(70,252,209,1)";
  }
  if (params[0] === "indie") {
    return "rgba(197,252,70,1)";
  }
  if (params[0] === "r&b") {
    return "rgba(0,212,255,1)";
  }
  if (params[0] === "classical") {
    return "rgba(148,187,233,1)";
  }
  if (params[0] === "yacht rock") {
    return "rgba(63,94,251,1)";
  }
}

export default helper(colorGetter);
