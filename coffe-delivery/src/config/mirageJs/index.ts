import { createServer, Model } from "miragejs";
import { coffes } from "../../mock/coffes";

const turnOnMirageJs = () => {
  createServer({
    models: {
      coffes: Model,
    },

    seeds(server) {
      server.db.loadData({
        coffes: coffes,
      });
    },

    routes() {
      this.namespace = "api";
      this.urlPrefix = "http://127.0.0.1:5173/";

      this.get("/coffes", () => {
        const response = this.schema.all("coffes");
        return response.models.map((model) => {
          return model.attrs;
        });
      });
    },
  });
};

export { turnOnMirageJs };
