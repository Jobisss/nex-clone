# NexEventApi.OtpApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**otpControllerChangePassword**](OtpApi.md#otpControllerChangePassword) | **PATCH** /api/otp/v1/otp/change-password | Validate otp code
[**otpControllerForgotPassword**](OtpApi.md#otpControllerForgotPassword) | **POST** /api/otp/v1/otp/forgot-password | Forgot password
[**otpControllerValidateOtp**](OtpApi.md#otpControllerValidateOtp) | **GET** /api/otp/v1/otp/validate-code | Validate otp code
[**otpControllerVerifyEmail**](OtpApi.md#otpControllerVerifyEmail) | **POST** /api/otp/v1/otp/verify-email | Forgot password
[**otpControllerVerifyEmailCode**](OtpApi.md#otpControllerVerifyEmailCode) | **POST** /api/otp/v1/otp/verify-email-code | Forgot password



## otpControllerChangePassword

> LoginResponseDto otpControllerChangePassword(hash, number, password)

Validate otp code

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.OtpApi();
let hash = "hash_example"; // String | 
let number = "number_example"; // String | 
let password = "password_example"; // String | 
apiInstance.otpControllerChangePassword(hash, number, password, (error, data, response) => {
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
 **hash** | **String**|  | 
 **number** | **String**|  | 
 **password** | **String**|  | 

### Return type

[**LoginResponseDto**](LoginResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## otpControllerForgotPassword

> otpControllerForgotPassword(email)

Forgot password

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.OtpApi();
let email = "email_example"; // String | 
apiInstance.otpControllerForgotPassword(email, (error, data, response) => {
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
 **email** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## otpControllerValidateOtp

> otpControllerValidateOtp(hash, number)

Validate otp code

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.OtpApi();
let hash = "hash_example"; // String | 
let number = "number_example"; // String | 
apiInstance.otpControllerValidateOtp(hash, number, (error, data, response) => {
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
 **hash** | **String**|  | 
 **number** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## otpControllerVerifyEmail

> otpControllerVerifyEmail(email)

Forgot password

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.OtpApi();
let email = "email_example"; // String | 
apiInstance.otpControllerVerifyEmail(email, (error, data, response) => {
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
 **email** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## otpControllerVerifyEmailCode

> otpControllerVerifyEmailCode(email, code)

Forgot password

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.OtpApi();
let email = "email_example"; // String | 
let code = "code_example"; // String | 
apiInstance.otpControllerVerifyEmailCode(email, code, (error, data, response) => {
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
 **email** | **String**|  | 
 **code** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

