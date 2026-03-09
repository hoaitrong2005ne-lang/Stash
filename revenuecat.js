let obj = JSON.parse($response.body);

obj.subscriber = {
  "subscriptions": {
    "locket_gold": {
      "expires_date": "2099-12-31T23:59:59Z",
      "purchase_date": "2022-01-01T00:00:00Z",
      "store": "app_store"
    }
  },
  "entitlements": {
    "Gold": {
      "expires_date": "2099-12-31T23:59:59Z",
      "product_identifier": "locket_gold",
      "purchase_date": "2022-01-01T00:00:00Z"
    }
  }
};

$done({ body: JSON.stringify(obj) });
