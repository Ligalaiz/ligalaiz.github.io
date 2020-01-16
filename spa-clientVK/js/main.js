import Model from "../model/model.js";
import View from "../view/view.js";
import Router from "../router/router.js";

(async () => {
  try {
    const header = document.querySelector("#header");
    await Model.login(5267932, 2 | 8192);
    const [me] = await Model.getUser({ name_case: "gen" });

    header.innerHTML = View.render("header", me);
    Router.init();
  } catch (e) {
    console.error(e);
    alert("Error: " + e.message);
  }
})();
