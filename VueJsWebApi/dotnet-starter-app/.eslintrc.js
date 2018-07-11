module.exports = {
    "extends": "airbnb-base",
    // copied from airbnb config to add ignore for vuex store param
    "rules":{
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "acc", // for reduce accumulators
                    "accumulator", // for reduce accumulators
                    "e", // for e.returnvalue
                    "ctx", // for Koa routing
                    "req", // for Express requests
                    "request", // for Express requests
                    "res", // for Express responses
                    "response", // for Express responses
                    "$scope", // for Angular 1 scopes
                    "state" // for Vuex store
                ]
            }
        ]
    },
    "settings": {
      "import/resolver": {
        "alias": [
          ["src/services", "./src/services"],
          ["src/store", "./src/store"],
          ["src/components", "./src/components"],
         ]
      }
    }
};
