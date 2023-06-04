import axios from 'axios';

var post = function post(url, params, props) {
  if (props && props.onStart) props.onStart();
  axios.post(url, params).then(function (response) {
    if (props && props.onResponse) props.onResponse(response.data);
    if (props && props.onFinish) props.onFinish();
  })["catch"](function (error) {
    if (props && props.onError) props.onError(error);
  });
};

var put = function put(url, params, props) {
  if (props.onStart) props.onStart();
  axios.put(url, params).then(function (response) {
    if (props.onResponse) props.onResponse(response.data);
    if (props.onFinish) props.onFinish();
  })["catch"](function (error) {
    if (props.onError) props.onError(error);
  });
};

var get = function get(url, props) {
  if (props.onStart) props.onStart();
  axios.get(url).then(function (response) {
    if (props.onFinish) props.onFinish();
    if (props.onResponse) props.onResponse(response.data);
  })["catch"](function (error) {
    if (props.onError) props.onError(error);
  });
};

var request = {
  put: put,
  post: post,
  get: get
};

export { request };
//# sourceMappingURL=index.modern.js.map
