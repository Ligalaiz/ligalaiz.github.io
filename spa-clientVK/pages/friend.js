import View from "../view/view";

const resultsNode = document.querySelector("#results");

let friend = {};

export default {
  setData(newFriend) {
    friend = newFriend;
  },

  render() {
    resultsNode.innerHTML = View.render("friend", friend);
  }
};
