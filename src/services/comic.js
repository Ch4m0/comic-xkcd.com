import axios from "axios";

const DOMAIN = "https://xkcd-microservice-hppr9mjy9.now.sh/";

export default new (class Comic {
  /*
   *get a specific comic
   */
  getMovie(numberRandom) {
    return axios({
      url: `${DOMAIN}${numberRandom}/`,
      method: "GET"
    })
      .then(resp => {
        return resp;
      })
      .catch(err => {
        return err;
      });
  }
})();
