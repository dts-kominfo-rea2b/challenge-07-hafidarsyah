const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  const resultIXX = await promiseTheaterIXX();
  const resultVGC = await promiseTheaterVGC();
  let angry = 0,
    notAngry = 0;

  const YesOrNoAngry = (data) => {
    data.forEach((item) => {
      if (item.hasil === "marah") {
        angry++;
      } else {
        notAngry++;
      }
    });
  };

  YesOrNoAngry(resultIXX);
  YesOrNoAngry(resultVGC);

  return emotion === "marah" ? angry : notAngry;
};

module.exports = {
  promiseOutput,
};
