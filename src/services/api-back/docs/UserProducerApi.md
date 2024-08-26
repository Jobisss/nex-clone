# NexEventApi.UserProducerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userProducerControllerCreateUserProducer**](UserProducerApi.md#userProducerControllerCreateUserProducer) | **POST** /api/user-producer/v1/user-producer/sign-up | Register user producer
[**userProducerControllerFindOneUserProducer**](UserProducerApi.md#userProducerControllerFindOneUserProducer) | **GET** /api/user-producer/v1/user-producer/profile | Get user production
[**userProducerControllerFinishSignUp**](UserProducerApi.md#userProducerControllerFinishSignUp) | **PATCH** /api/user-producer/v1/user-producer/finish-register | Finish register user producer
[**userProducerControllerUpdatePassword**](UserProducerApi.md#userProducerControllerUpdatePassword) | **PATCH** /api/user-producer/v1/user-producer/change-password | Change password
[**userProducerControllerUploadFacialPhoto**](UserProducerApi.md#userProducerControllerUploadFacialPhoto) | **POST** /api/user-producer/v1/user-producer/profile/upload-facial | Upload a user facial photo
[**userProducerControllerUploadProfilePhoto**](UserProducerApi.md#userProducerControllerUploadProfilePhoto) | **POST** /api/user-producer/v1/user-producer/profile/upload-photo | Upload a user profile photo
[**userProducerControllerUploadVideo**](UserProducerApi.md#userProducerControllerUploadVideo) | **POST** /api/user-producer/video | 
[**userProducerControllerUserHaveFacial**](UserProducerApi.md#userProducerControllerUserHaveFacial) | **GET** /api/user-producer/v1/user/have-facial | User have facial



## userProducerControllerCreateUserProducer

> LoginResponseDto userProducerControllerCreateUserProducer(userProducerCreateDto)

Register user producer

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.UserProducerApi();
let userProducerCreateDto = new NexEventApi.UserProducerCreateDto(); // UserProducerCreateDto | 
apiInstance.userProducerControllerCreateUserProducer(userProducerCreateDto, (error, data, response) => {
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
 **userProducerCreateDto** | [**UserProducerCreateDto**](UserProducerCreateDto.md)|  | 

### Return type

[**LoginResponseDto**](LoginResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userProducerControllerFindOneUserProducer

> UserProducerResponseDto userProducerControllerFindOneUserProducer()

Get user production

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.UserProducerApi();
apiInstance.userProducerControllerFindOneUserProducer((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserProducerResponseDto**](UserProducerResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userProducerControllerFinishSignUp

> String userProducerControllerFinishSignUp(userProducerFinishSignUpDto)

Finish register user producer

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.UserProducerApi();
let userProducerFinishSignUpDto = new NexEventApi.UserProducerFinishSignUpDto(); // UserProducerFinishSignUpDto | 
apiInstance.userProducerControllerFinishSignUp(userProducerFinishSignUpDto, (error, data, response) => {
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
 **userProducerFinishSignUpDto** | [**UserProducerFinishSignUpDto**](UserProducerFinishSignUpDto.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userProducerControllerUpdatePassword

> String userProducerControllerUpdatePassword(oldPassword, newPassword)

Change password

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.UserProducerApi();
let oldPassword = "oldPassword_example"; // String | 
let newPassword = "newPassword_example"; // String | 
apiInstance.userProducerControllerUpdatePassword(oldPassword, newPassword, (error, data, response) => {
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
 **oldPassword** | **String**|  | 
 **newPassword** | **String**|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userProducerControllerUploadFacialPhoto

> String userProducerControllerUploadFacialPhoto(email, opts)

Upload a user facial photo

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.UserProducerApi();
let email = "email_example"; // String | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.userProducerControllerUploadFacialPhoto(email, opts, (error, data, response) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## userProducerControllerUploadProfilePhoto

> String userProducerControllerUploadProfilePhoto(opts)

Upload a user profile photo

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.UserProducerApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.userProducerControllerUploadProfilePhoto(opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## userProducerControllerUploadVideo

> userProducerControllerUploadVideo(opts)



### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.UserProducerApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.userProducerControllerUploadVideo(opts, (error, data, response) => {
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


## userProducerControllerUserHaveFacial

> Boolean userProducerControllerUserHaveFacial()

User have facial

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.UserProducerApi();
apiInstance.userProducerControllerUserHaveFacial((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Boolean**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

