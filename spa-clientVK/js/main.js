Handlebars.registerHelper("formatTime", time => {
  let minutes = (time / 60).toFixed();
  let seconds = time - minutes * 60;

  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
});

Handlebars.registerHelper("formatBDay", bday => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];
  const [day, month] = (bday || "").split(".");

  return [day, months[month - 1]].join(" ");
});

Handlebars.registerHelper("formatDate", ts => {
  return new Date(ts * 1000).toLocaleString();
});

import Model from "../model/model.js";
import View from "../view/view.js";
import Router from "../router/router.js";

(async () => {
  try {
    const header = document.querySelector("#header");
    await Model.login(7285471, 2 | 8192);
    const [me] = await Model.getUser({ name_case: "gen" });

    header.innerHTML = View.render("header", me);
    Router.init();
  } catch (e) {
    console.error(e);
    window.alert("Ошибка: " + e.message);
  }
})();
