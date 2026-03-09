var obj = JSON.parse($response.body);

if ($request) {
  let headers = $request.headers;
  delete headers["x-revenuecat-etag"];
  delete headers["X-RevenueCat-ETag"];
  $done({ headers });
}

if ($response) {
  let obj = JSON.parse($response.body);

  obj.subscriber = obj.subscriber || {};
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};

  obj.subscriber.subscriptions["locket_gold"] = {
    "expires_date": "2099-12-31T23:59:59Z",
    "purchase_date": "2022-01-01T00:00:00Z",
    "store": "app_store"
  };

  obj.subscriber.entitlements["Gold"] = {
    "expires_date": "2099-12-31T23:59:59Z",
    "product_identifier": "locket_gold",
    "purchase_date": "2022-01-01T00:00:00Z"
  };

  $done({ body: JSON.stringify(obj) });
}
