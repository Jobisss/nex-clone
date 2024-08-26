# NexEventApi.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerFile**](AuthApi.md#authControllerFile) | **GET** /api/auth/v1/storage/file/{key} | Find an file especific
[**authControllerLogin**](AuthApi.md#authControllerLogin) | **POST** /api/auth/v1/auth/login | Login
[**authControllerLoginWithFacial**](AuthApi.md#authControllerLoginWithFacial) | **POST** /api/auth/v1/auth/login-with-facial | Login user with facial
[**authControllerMoloniTest**](AuthApi.md#authControllerMoloniTest) | **GET** /api/auth/moloni-test | 
[**authControllerTest**](AuthApi.md#authControllerTest) | **POST** /api/auth/webhook | 
[**authControllerValidateWithFacial**](AuthApi.md#authControllerValidateWithFacial) | **POST** /api/auth/v1/auth/validate-facial | Validate user with facial



## authControllerFile

> File authControllerFile(key)

Find an file especific

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.AuthApi();
let key = "/face/file.jpg"; // String | File source
apiInstance.authControllerFile(key, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| File source | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/jpeg


## authControllerLogin

> LoginResponseDto authControllerLogin(authLoginDto)

Login

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.AuthApi();
let authLoginDto = new NexEventApi.AuthLoginDto(); // AuthLoginDto | 
apiInstance.authControllerLogin(authLoginDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authLoginDto** | [**AuthLoginDto**](AuthLoginDto.md)|  | 

### Return type

[**LoginResponseDto**](LoginResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authControllerLoginWithFacial

> LoginResponseDto authControllerLoginWithFacial(email, opts)

Login user with facial

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.AuthApi();
let email = "email_example"; // String | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.authControllerLoginWithFacial(email, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **file** | **File**|  | [optional] 

### Return type

[**LoginResponseDto**](LoginResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## authControllerMoloniTest

> authControllerMoloniTest()



### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.AuthApi();
apiInstance.authControllerMoloniTest((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## authControllerTest

> authControllerTest()



### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.AuthApi();
apiInstance.authControllerTest((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## authControllerValidateWithFacial

> authControllerValidateWithFacial(opts)

Validate user with facial

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.AuthApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.authControllerValidateWithFacial(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

