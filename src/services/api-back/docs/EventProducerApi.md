# NexEventApi.EventProducerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventProducerControllerCreateEvent**](EventProducerApi.md#eventProducerControllerCreateEvent) | **POST** /api/event-producer/v1/event-producer/create-event | Create event
[**eventProducerControllerCreateEventPhoto**](EventProducerApi.md#eventProducerControllerCreateEventPhoto) | **POST** /api/event-producer/v1/event-producer/{eventId}/upload-photo | Upload a event photo
[**eventProducerControllerCreateEventTerms**](EventProducerApi.md#eventProducerControllerCreateEventTerms) | **POST** /api/event-producer/v1/event-producer/{eventId}/create-terms | Upload a event photo
[**eventProducerControllerFinancialDashboard**](EventProducerApi.md#eventProducerControllerFinancialDashboard) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/dashboard-financial | Get general dashboard
[**eventProducerControllerFindAllEvents**](EventProducerApi.md#eventProducerControllerFindAllEvents) | **GET** /api/event-producer/v1/event-producer/events/find-all | Get all events
[**eventProducerControllerFindAllParticipants**](EventProducerApi.md#eventProducerControllerFindAllParticipants) | **GET** /api/event-producer/v1/event-producer/{slug}/participants/find-all | Get general dashboard
[**eventProducerControllerFindOneDashboard**](EventProducerApi.md#eventProducerControllerFindOneDashboard) | **GET** /api/event-producer/v1/event-producer/{slug}/dashboard | Get event dashboard
[**eventProducerControllerFindOneDashboardParticipantPanel**](EventProducerApi.md#eventProducerControllerFindOneDashboardParticipantPanel) | **GET** /api/event-producer/v1/event-producer/{slug}/dashboard/participant-panel | Get event dashboard
[**eventProducerControllerGeneralDashboard**](EventProducerApi.md#eventProducerControllerGeneralDashboard) | **GET** /api/event-producer/v1/event-producer/general-dashboard | Get general dashboard
[**eventProducerControllerGetEventsPrintAutomatic**](EventProducerApi.md#eventProducerControllerGetEventsPrintAutomatic) | **GET** /api/event-producer/v1/event-producer/get-events-print-automatic | Get event dashboard
[**eventProducerControllerGetPartClient**](EventProducerApi.md#eventProducerControllerGetPartClient) | **GET** /api/event-producer/v1/event-producer/{eventId}/print-participant | Get event dashboard
[**eventProducerControllerUpdateEvent**](EventProducerApi.md#eventProducerControllerUpdateEvent) | **PATCH** /api/event-producer/v1/event-producer/{slug}/update-event | Update event
[**eventProducerControllerUpdateIsPrint**](EventProducerApi.md#eventProducerControllerUpdateIsPrint) | **PATCH** /api/event-producer/v1/event-producer/{eventId}/print-participant | Get event dashboard



## eventProducerControllerCreateEvent

> String eventProducerControllerCreateEvent(eventCreateDto)

Create event

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let eventCreateDto = new NexEventApi.EventCreateDto(); // EventCreateDto | 
apiInstance.eventProducerControllerCreateEvent(eventCreateDto, (error, data, response) => {
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
 **eventCreateDto** | [**EventCreateDto**](EventCreateDto.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventProducerControllerCreateEventPhoto

> String eventProducerControllerCreateEventPhoto(eventId, opts)

Upload a event photo

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let eventId = "eventId_example"; // String | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.eventProducerControllerCreateEventPhoto(eventId, opts, (error, data, response) => {
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
 **eventId** | **String**|  | 
 **file** | **File**|  | [optional] 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## eventProducerControllerCreateEventTerms

> String eventProducerControllerCreateEventTerms(eventId, name, signature, opts)

Upload a event photo

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let eventId = "eventId_example"; // String | 
let name = "name_example"; // String | 
let signature = "signature_example"; // String | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.eventProducerControllerCreateEventTerms(eventId, name, signature, opts, (error, data, response) => {
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
 **eventId** | **String**|  | 
 **name** | **String**|  | 
 **signature** | **String**|  | 
 **file** | **File**|  | [optional] 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## eventProducerControllerFinancialDashboard

> EventDashboardPanelFinancialDto eventProducerControllerFinancialDashboard(eventSlug)

Get general dashboard

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let eventSlug = "eventSlug_example"; // String | Event slug
apiInstance.eventProducerControllerFinancialDashboard(eventSlug, (error, data, response) => {
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

[**EventDashboardPanelFinancialDto**](EventDashboardPanelFinancialDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerControllerFindAllEvents

> [EventAllResponseDtoInner] eventProducerControllerFindAllEvents(opts)

Get all events

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let opts = {
  'page': "1", // String | 
  'perPage': "10", // String | 
  'searchable': "teste" // String | 
};
apiInstance.eventProducerControllerFindAllEvents(opts, (error, data, response) => {
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
 **page** | **String**|  | [optional] 
 **perPage** | **String**|  | [optional] 
 **searchable** | **String**|  | [optional] 

### Return type

[**[EventAllResponseDtoInner]**](EventAllResponseDtoInner.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerControllerFindAllParticipants

> ResponseEventParticipants eventProducerControllerFindAllParticipants(slug, opts)

Get general dashboard

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let slug = "slug_example"; // String | Event slug
let opts = {
  'page': 1, // Number | 
  'perPage': 1, // Number | 
  'name': "name_example", // String | 
  'ticketTitle': ["null"] // [String] | 
};
apiInstance.eventProducerControllerFindAllParticipants(slug, opts, (error, data, response) => {
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
 **slug** | **String**| Event slug | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **ticketTitle** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResponseEventParticipants**](ResponseEventParticipants.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerControllerFindOneDashboard

> EventDashboardResponseDto eventProducerControllerFindOneDashboard(slug)

Get event dashboard

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let slug = "slug_example"; // String | Event slug
apiInstance.eventProducerControllerFindOneDashboard(slug, (error, data, response) => {
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
 **slug** | **String**| Event slug | 

### Return type

[**EventDashboardResponseDto**](EventDashboardResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerControllerFindOneDashboardParticipantPanel

> FindOneDashboardParticipantPanelDto eventProducerControllerFindOneDashboardParticipantPanel(slug)

Get event dashboard

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let slug = "slug_example"; // String | Event slug
apiInstance.eventProducerControllerFindOneDashboardParticipantPanel(slug, (error, data, response) => {
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
 **slug** | **String**| Event slug | 

### Return type

[**FindOneDashboardParticipantPanelDto**](FindOneDashboardParticipantPanelDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerControllerGeneralDashboard

> GeneralDashboardResponseDto eventProducerControllerGeneralDashboard()

Get general dashboard

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
apiInstance.eventProducerControllerGeneralDashboard((error, data, response) => {
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

[**GeneralDashboardResponseDto**](GeneralDashboardResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerControllerGetEventsPrintAutomatic

> GetEventsPrintAutomatic eventProducerControllerGetEventsPrintAutomatic(opts)

Get event dashboard

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let opts = {
  'page': "1", // String | 
  'perPage': "10" // String | 
};
apiInstance.eventProducerControllerGetEventsPrintAutomatic(opts, (error, data, response) => {
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
 **page** | **String**|  | [optional] 
 **perPage** | **String**|  | [optional] 

### Return type

[**GetEventsPrintAutomatic**](GetEventsPrintAutomatic.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerControllerGetPartClient

> [EventPrintAllPartsDtoInner] eventProducerControllerGetPartClient(eventId)

Get event dashboard

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventProducerApi();
let eventId = "eventId_example"; // String | Event id
apiInstance.eventProducerControllerGetPartClient(eventId, (error, data, response) => {
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
 **eventId** | **String**| Event id | 

### Return type

[**[EventPrintAllPartsDtoInner]**](EventPrintAllPartsDtoInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventProducerControllerUpdateEvent

> String eventProducerControllerUpdateEvent(slug, eventProducerUpdateDto)

Update event

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerApi();
let slug = "slug_example"; // String | 
let eventProducerUpdateDto = new NexEventApi.EventProducerUpdateDto(); // EventProducerUpdateDto | 
apiInstance.eventProducerControllerUpdateEvent(slug, eventProducerUpdateDto, (error, data, response) => {
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
 **slug** | **String**|  | 
 **eventProducerUpdateDto** | [**EventProducerUpdateDto**](EventProducerUpdateDto.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventProducerControllerUpdateIsPrint

> eventProducerControllerUpdateIsPrint(eventId, participantId)

Get event dashboard

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventProducerApi();
let eventId = "eventId_example"; // String | Event Id
let participantId = "participantId_example"; // String | Participant ID
apiInstance.eventProducerControllerUpdateIsPrint(eventId, participantId, (error, data, response) => {
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
 **eventId** | **String**| Event Id | 
 **participantId** | **String**| Participant ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

