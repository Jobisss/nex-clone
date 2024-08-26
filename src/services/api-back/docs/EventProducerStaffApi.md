# NexEventApi.EventProducerStaffApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventProducerStaffControllerCreateStaff**](EventProducerStaffApi.md#eventProducerStaffControllerCreateStaff) | **POST** /api/event-producer/v1/event-producer/{eventSlug}/staff/create | Create event staff
[**eventProducerStaffControllerDelete**](EventProducerStaffApi.md#eventProducerStaffControllerDelete) | **DELETE** /api/event-producer/v1/event-producer/{eventSlug}/staff/delete/{staffId} | Delete event staff
[**eventProducerStaffControllerListEventStaff**](EventProducerStaffApi.md#eventProducerStaffControllerListEventStaff) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/staff/list | List event staff
[**eventProducerStaffControllerRecommendStaffs**](EventProducerStaffApi.md#eventProducerStaffControllerRecommendStaffs) | **GET** /api/event-producer/v1/event-producer/recommend-staffs | List event staff
[**eventProducerStaffControllerResendInviteEmail**](EventProducerStaffApi.md#eventProducerStaffControllerResendInviteEmail) | **POST** /api/event-producer/v1/event-producer/staff/resend-invite-email/{staffId} | Resend invite email to staff
[**eventProducerStaffControllerStaffEvents**](EventProducerStaffApi.md#eventProducerStaffControllerStaffEvents) | **GET** /api/event-producer/v1/event-producer/staff/get-events | Retrieve events that the user is staff
[**eventProducerStaffControllerUpdateEventStaff**](EventProducerStaffApi.md#eventProducerStaffControllerUpdateEventStaff) | **PATCH** /api/event-producer/v1/event-producer/{eventSlug}/staff/invite | Update event staff



## eventProducerStaffControllerCreateStaff

> String eventProducerStaffControllerCreateStaff(eventSlug, eventProducerCreateStaffDto)

Create event staff

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerStaffApi();
let eventSlug = "eventSlug_example"; // String | 
let eventProducerCreateStaffDto = new NexEventApi.EventProducerCreateStaffDto(); // EventProducerCreateStaffDto | 
apiInstance.eventProducerStaffControllerCreateStaff(eventSlug, eventProducerCreateStaffDto, (error, data, response) => {
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
 **eventSlug** | **String**|  | 
 **eventProducerCreateStaffDto** | [**EventProducerCreateStaffDto**](EventProducerCreateStaffDto.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventProducerStaffControllerDelete

> String eventProducerStaffControllerDelete(eventSlug, staffId)

Delete event staff

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerStaffApi();
let eventSlug = "eventSlug_example"; // String | 
let staffId = "staffId_example"; // String | 
apiInstance.eventProducerStaffControllerDelete(eventSlug, staffId, (error, data, response) => {
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
 **eventSlug** | **String**|  | 
 **staffId** | **String**|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerStaffControllerListEventStaff

> EventStaffsResponse eventProducerStaffControllerListEventStaff(eventSlug, opts)

List event staff

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerStaffApi();
let eventSlug = "eventSlug_example"; // String | 
let opts = {
  'page': 3.4, // Number | 
  'perPage': 3.4, // Number | 
  'staffEmail': "staffEmail_example" // String | 
};
apiInstance.eventProducerStaffControllerListEventStaff(eventSlug, opts, (error, data, response) => {
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
 **eventSlug** | **String**|  | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **staffEmail** | **String**|  | [optional] 

### Return type

[**EventStaffsResponse**](EventStaffsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerStaffControllerRecommendStaffs

> EventProducerRecommendedStaffs eventProducerStaffControllerRecommendStaffs(opts)

List event staff

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerStaffApi();
let opts = {
  'page': 3.4, // Number | 
  'perPage': 3.4, // Number | 
  'staffName': "staffName_example", // String | 
  'staffEmail': "staffEmail_example", // String | 
  'eventTitle': "eventTitle_example" // String | 
};
apiInstance.eventProducerStaffControllerRecommendStaffs(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **staffName** | **String**|  | [optional] 
 **staffEmail** | **String**|  | [optional] 
 **eventTitle** | **String**|  | [optional] 

### Return type

[**EventProducerRecommendedStaffs**](EventProducerRecommendedStaffs.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerStaffControllerResendInviteEmail

> String eventProducerStaffControllerResendInviteEmail(staffId)

Resend invite email to staff

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerStaffApi();
let staffId = "staffId_example"; // String | 
apiInstance.eventProducerStaffControllerResendInviteEmail(staffId, (error, data, response) => {
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
 **staffId** | **String**|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerStaffControllerStaffEvents

> ResponseStaffEvents eventProducerStaffControllerStaffEvents(opts)

Retrieve events that the user is staff

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerStaffApi();
let opts = {
  'page': 3.4, // Number | 
  'perPage': 3.4, // Number | 
  'searchable': "searchable_example" // String | 
};
apiInstance.eventProducerStaffControllerStaffEvents(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **searchable** | **String**|  | [optional] 

### Return type

[**ResponseStaffEvents**](ResponseStaffEvents.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerStaffControllerUpdateEventStaff

> String eventProducerStaffControllerUpdateEventStaff(eventSlug, opts)

Update event staff

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerStaffApi();
let eventSlug = "eventSlug_example"; // String | 
let opts = {
  'acceptedInvite': "acceptedInvite_example" // String | 
};
apiInstance.eventProducerStaffControllerUpdateEventStaff(eventSlug, opts, (error, data, response) => {
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
 **eventSlug** | **String**|  | 
 **acceptedInvite** | **String**|  | [optional] 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

