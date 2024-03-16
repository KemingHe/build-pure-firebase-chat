// src/devcomponents/devDBSeedData.js
//
// Modularized DB seeding data file:
export const seedData = {
  "users": {
    "u0001": {
      "uid": "u0001",
      "displayName": "Mr. Apple"
    },
    "u0002": {
      "uid": "u0002",
      "displayName": "Ms. Orange"
    },
    "u0003": {
      "uid": "u0003",
      "displayName": "Mr. Banana"
    },
    "u0004": {
      "uid": "u0004",
      "displayName": "Ms. Cherry"
    },
    "u0005": {
      "uid": "u0005",
      "displayName": "Mr. Grape"
    }
  },
  "chatRooms": {
    "c0001": {
      "cId": "c0001",
      "cUids": {
        "u0001": true,
        "u0005": true
      }
    },
    "c0002": {
      "cId": "c0002",
      "cUids": {
        "u0003": true,
        "u0004": true
      }
    },
    "c0003": {
      "cId": "c0003",
      "cUids": {
        "u0002": true,
        "u0005": true
      }
    }
  },
  "chatMessages": {
    "c0001": {
      "1459361875337": {
        "uid": "u0001",
        "text": "hello world!",
        "time": "1459361875337"
      },
      "1459361875340": {
        "uid": "u0005",
        "text": "hi there too",
        "time": "1459361875340"
      },
      "1459361876000": {
        "uid": "u0001",
        "text": "wow, cool",
        "time": "1459361876000"
      }
    },
    "c0002": {
      "1459361875337": {
        "uid": "u0003",
        "text": "world hello",
        "time": "1459361875337"
      },
      "1459361875340": {
        "uid": "u0004",
        "text": "wow, generic",
        "time": "1459361875340"
      }
    },
    "c0003": {
      "1459361875337": {
        "uid": "u0002",
        "text": "so empty here...",
        "time": "1459361875337"
      }
    }
  }
};
