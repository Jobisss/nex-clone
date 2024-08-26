# NexEventApi.SponsorUserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sponsorUserControllerCreateSponsorUser**](SponsorUserApi.md#sponsorUserControllerCreateSponsorUser) | **POST** /api/sponsor-user/v1/sponsor-user | Create Sponsor User
[**sponsorUserControllerGetSponserUser**](SponsorUserApi.md#sponsorUserControllerGetSponserUser) | **GET** /api/sponsor-user/v1/sponsor-user | Get Sponsor User
[**sponsorUserControllerUpdate**](SponsorUserApi.md#sponsorUserControllerUpdate) | **PATCH** /api/sponsor-user/v1/sponsor-user | Update Sponsor User



## sponsorUserControllerCreateSponsorUser

> ResponseSponsorUserDto sponsorUserControllerCreateSponsorUser(createSponsorUserDto)

Create Sponsor User

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.SponsorUserApi();
let createSponsorUserDto = new NexEventApi.CreateSponsorUserDto(); // CreateSponsorUserDto | 
apiInstance.sponsorUserControllerCreateSponsorUser(createSponsorUserDto, (error, data, response) => {
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
 **createSponsorUserDto** | [**CreateSponsorUserDto**](CreateSponsorUserDto.md)|  | 

### Return type

[**ResponseSponsorUserDto**](ResponseSponsorUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sponsorUserControllerGetSponserUser

> ResponseSponsorUserDto sponsorUserControllerGetSponserUser()

Get Sponsor User

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.SponsorUserApi();
apiInstance.sponsorUserControllerGetSponserUser((error, data, response) => {
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

[**ResponseSponsorUserDto**](ResponseSponsorUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sponsorUserControllerUpdate

> ResponseSponsorUserDto sponsorUserControllerUpdate(updateSponsorUserDto)

Update Sponsor User

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.SponsorUserApi();
let updateSponsorUserDto = new NexEventApi.UpdateSponsorUserDto(); // UpdateSponsorUserDto | 
apiInstance.sponsorUserControllerUpdate(updateSponsorUserDto, (error, data, response) => {
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
 **updateSponsorUserDto** | [**UpdateSponsorUserDto**](UpdateSponsorUserDto.md)|  | 

### Return type

[**ResponseSponsorUserDto**](ResponseSponsorUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

