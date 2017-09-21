export const app = {
  defaultLanguage: "eng",
  env: "local",
  endpoints: {
    local: {
      host: "http://localhost:4200/",
      suffix: "assets/stubs/",
      url: function () {
        return this.host + this.suffix;
      }
    },
    dev: {
      host: "http://10.205.1.0:3000/",
      suffix: "entSDK/v1/",
      url: function () {
        return this.host + this.suffix;
      }
    }
  }
};