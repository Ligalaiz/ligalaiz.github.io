import Model from "../model/model.js";

export default {
  async friendsRoute(params) {
    if (params.id) {
      const [friend] = await Model.getUser({
        user_ids: params.id,
        fields: "photo_100,city, country,bdate"
      });
      console.log(friend);
    } else {
      const friends = await Model.getFriends({ fields: "photo_100,bdate" });
      console.log(friends);
    }
  },
  async newsRoute() {
    const news = await Model.getNews({ filters: "post", count: 20 });
    console.log(news);
  }
};
