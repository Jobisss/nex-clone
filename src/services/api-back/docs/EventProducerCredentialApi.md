# NexEventApi.EventProducerCredentialApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventProducerAccreditationControllerAccreditParticipant**](EventProducerCredentialApi.md#eventProducerAccreditationControllerAccreditParticipant) | **POST** /api/event-producer/v1/event-producer/{eventSlug}/accreditation/accredit | Accredit a participant
[**eventProducerAccreditationControllerCheckOutInAllParticipants**](EventProducerCredentialApi.md#eventProducerAccreditationControllerCheckOutInAllParticipants) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/accreditation/check-out-all-participants | Get event accreditation qrcode
[**eventProducerAccreditationControllerFindByFacial**](EventProducerCredentialApi.md#eventProducerAccreditationControllerFindByFacial) | **POST** /api/event-producer/v1/event-producer/{eventSlug}/accreditation/facial | Get event accreditation qrcode
[**eventProducerAccreditationControllerFindByQrCode**](EventProducerCredentialApi.md#eventProducerAccreditationControllerFindByQrCode) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/accreditation/qrcode | Get event accreditation qrcode
[**eventProducerAccreditationControllerGetEventConfig**](EventProducerCredentialApi.md#eventProducerAccreditationControllerGetEventConfig) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/accreditation/event-config | Get event config
[**eventProducerAccreditationControllerLastAccreditedParticipants**](EventProducerCredentialApi.md#eventProducerAccreditationControllerLastAccreditedParticipants) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/accreditation/historic-participants | Get accreditation historic
[**eventProducerAccreditationControllerRePrintParticipant**](EventProducerCredentialApi.md#eventProducerAccreditationControllerRePrintParticipant) | **PATCH** /api/event-producer/v1/event-producer/{eventSlug}/accreditation/re-printer | Get event config



## eventProducerAccreditationControllerAccreditParticipant

> String eventProducerAccreditationControllerAccreditParticipant(eventSlug, participantId)

Accredit a participant

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerCredentialApi();
let eventSlug = "eventSlug_example"; // String | Event slug
let participantId = "participantId_example"; // String | Event Participant ID
apiInstance.eventProducerAccreditationControllerAccreditParticipant(eventSlug, participantId, (error, data, response) => {
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
 **eventSlug** | **String**| Event slug | 
 **participantId** | **String**| Event Participant ID | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerAccreditationControllerCheckOutInAllParticipants

> String eventProducerAccreditationControllerCheckOutInAllParticipants(eventSlug)

Get event accreditation qrcode

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerCredentialApi();
let eventSlug = "eventSlug_example"; // String | Event slug
apiInstance.eventProducerAccreditationControllerCheckOutInAllParticipants(eventSlug, (error, data, response) => {
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
 **eventSlug** | **String**| Event slug | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerAccreditationControllerFindByFacial

> FindByFacialResponseDto eventProducerAccreditationControllerFindByFacial(eventSlug, opts)

Get event accreditation qrcode

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerCredentialApi();
let eventSlug = "eventSlug_example"; // String | Event slug
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.eventProducerAccreditationControllerFindByFacial(eventSlug, opts, (error, data, response) => {
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
 **eventSlug** | **String**| Event slug | 
 **file** | **File**|  | [optional] 

### Return type

[**FindByFacialResponseDto**](FindByFacialResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## eventProducerAccreditationControllerFindByQrCode

> String eventProducerAccreditationControllerFindByQrCode(eventSlug, qrcode)

Get event accreditation qrcode

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerCredentialApi();
let eventSlug = "eventSlug_example"; // String | Event slug
let qrcode = "qrcode_example"; // String | Event accreditation qrcode
apiInstance.eventProducerAccreditationControllerFindByQrCode(eventSlug, qrcode, (error, data, response) => {
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
 **eventSlug** | **String**| Event slug | 
 **qrcode** | **String**| Event accreditation qrcode | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerAccreditationControllerGetEventConfig

> GetEventConfigDto eventProducerAccreditationControllerGetEventConfig(eventSlug)

Get event config

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerCredentialApi();
let eventSlug = "eventSlug_example"; // String | Event slug
apiInstance.eventProducerAccreditationControllerGetEventConfig(eventSlug, (error, data, response) => {
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
 **eventSlug** | **String**| Event slug | 

### Return type

[**GetEventConfigDto**](GetEventConfigDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerAccreditationControllerLastAccreditedParticipants

> LastAccreditedParticipantsResponse eventProducerAccreditationControllerLastAccreditedParticipants(eventSlug, opts)

Get accreditation historic

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerCredentialApi();
let eventSlug = "eventSlug_example"; // String | Event slug
let opts = {
  'page': "1", // String | 
  'perPage': "10" // String | 
};
apiInstance.eventProducerAccreditationControllerLastAccreditedParticipants(eventSlug, opts, (error, data, response) => {
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
 **eventSlug** | **String**| Event slug | 
 **page** | **String**|  | [optional] 
 **perPage** | **String**|  | [optional] 

### Return type

[**LastAccreditedParticipantsResponse**](LastAccreditedParticipantsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerAccreditationControllerRePrintParticipant

> eventProducerAccreditationControllerRePrintParticipant(eventSlug, participantId)

Get event config

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerCredentialApi();
let eventSlug = "eventSlug_example"; // String | Event slug
let participantId = "participantId_example"; // String | Event participant id
apiInstance.eventProducerAccreditationControllerRePrintParticipant(eventSlug, participantId, (error, data, response) => {
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
 **eventSlug** | **String**| Event slug | 
 **participantId** | **String**| Event participant id | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

