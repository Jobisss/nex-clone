# NexEventApi.EventProducerTicketsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventTicketProducerControllerCreateEventTicket**](EventProducerTicketsApi.md#eventTicketProducerControllerCreateEventTicket) | **POST** /api/event-producer/v1/event-producer/{eventSlug}/create-ticket | Create event ticket
[**eventTicketProducerControllerCreateEventTicketCoupons**](EventProducerTicketsApi.md#eventTicketProducerControllerCreateEventTicketCoupons) | **POST** /api/event-producer/v1/event-producer/{eventSlug}/create-cupom | Create event ticket cupom
[**eventTicketProducerControllerCreatePrivateTicketLink**](EventProducerTicketsApi.md#eventTicketProducerControllerCreatePrivateTicketLink) | **POST** /api/event-producer/v1/event-producer/{eventSlug}/create-private-link/{ticketBatchId} | Create invite link by private ticket
[**eventTicketProducerControllerCuponsDashboard**](EventProducerTicketsApi.md#eventTicketProducerControllerCuponsDashboard) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/dashboard-cupons | Get event cupons dash
[**eventTicketProducerControllerFindAllEventTicket**](EventProducerTicketsApi.md#eventTicketProducerControllerFindAllEventTicket) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/get-tickets | Get event tickets
[**eventTicketProducerControllerFindAllEventTicketCoupons**](EventProducerTicketsApi.md#eventTicketProducerControllerFindAllEventTicketCoupons) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/get-cupons | Get event cupons
[**eventTicketProducerControllerGetAllLinksWithOneTicket**](EventProducerTicketsApi.md#eventTicketProducerControllerGetAllLinksWithOneTicket) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/tickets/{ticketId}/{ticketPriceId}/links | Get all links with one ticket
[**eventTicketProducerControllerSendInviteLinkByEmail**](EventProducerTicketsApi.md#eventTicketProducerControllerSendInviteLinkByEmail) | **POST** /api/event-producer/v1/event-producer/{eventSlug}/send-invite-link-by-email/{ticketBatchId} | Send invite link participant by email
[**eventTicketProducerControllerUpdateEventTicket**](EventProducerTicketsApi.md#eventTicketProducerControllerUpdateEventTicket) | **PATCH** /api/event-producer/v1/event-producer/{eventSlug}/update-ticket/{eventTicketId} | Update event ticket



## eventTicketProducerControllerCreateEventTicket

> String eventTicketProducerControllerCreateEventTicket(eventSlug, eventTicketCreateDto)

Create event ticket

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
let eventTicketCreateDto = new NexEventApi.EventTicketCreateDto(); // EventTicketCreateDto | 
apiInstance.eventTicketProducerControllerCreateEventTicket(eventSlug, eventTicketCreateDto, (error, data, response) => {
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
 **eventTicketCreateDto** | [**EventTicketCreateDto**](EventTicketCreateDto.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventTicketProducerControllerCreateEventTicketCoupons

> String eventTicketProducerControllerCreateEventTicketCoupons(eventSlug, eventTicketCouponsDto)

Create event ticket cupom

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
let eventTicketCouponsDto = new NexEventApi.EventTicketCouponsDto(); // EventTicketCouponsDto | 
apiInstance.eventTicketProducerControllerCreateEventTicketCoupons(eventSlug, eventTicketCouponsDto, (error, data, response) => {
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
 **eventTicketCouponsDto** | [**EventTicketCouponsDto**](EventTicketCouponsDto.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventTicketProducerControllerCreatePrivateTicketLink

> EventTicketLinkCreateResponseDto eventTicketProducerControllerCreatePrivateTicketLink(eventSlug, ticketBatchId)

Create invite link by private ticket

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
let ticketBatchId = "ticketBatchId_example"; // String | 
apiInstance.eventTicketProducerControllerCreatePrivateTicketLink(eventSlug, ticketBatchId, (error, data, response) => {
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
 **ticketBatchId** | **String**|  | 

### Return type

[**EventTicketLinkCreateResponseDto**](EventTicketLinkCreateResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventTicketProducerControllerCuponsDashboard

> EventTicketCouponDashboardDto eventTicketProducerControllerCuponsDashboard(eventSlug)

Get event cupons dash

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
apiInstance.eventTicketProducerControllerCuponsDashboard(eventSlug, (error, data, response) => {
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

### Return type

[**EventTicketCouponDashboardDto**](EventTicketCouponDashboardDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventTicketProducerControllerFindAllEventTicket

> EventTicketsResponse eventTicketProducerControllerFindAllEventTicket(eventSlug, page, perPage, opts)

Get event tickets

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
let page = 3.4; // Number | 
let perPage = 3.4; // Number | 
let opts = {
  'title': "title_example", // String | 
  'isPrivate': true // Boolean | 
};
apiInstance.eventTicketProducerControllerFindAllEventTicket(eventSlug, page, perPage, opts, (error, data, response) => {
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
 **page** | **Number**|  | 
 **perPage** | **Number**|  | 
 **title** | **String**|  | [optional] 
 **isPrivate** | **Boolean**|  | [optional] 

### Return type

[**EventTicketsResponse**](EventTicketsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventTicketProducerControllerFindAllEventTicketCoupons

> EventTicketCouponsResponse eventTicketProducerControllerFindAllEventTicketCoupons(eventSlug, page, perPage, opts)

Get event cupons

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
let page = 3.4; // Number | 
let perPage = 3.4; // Number | 
let opts = {
  'title': "title_example" // String | 
};
apiInstance.eventTicketProducerControllerFindAllEventTicketCoupons(eventSlug, page, perPage, opts, (error, data, response) => {
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
 **page** | **Number**|  | 
 **perPage** | **Number**|  | 
 **title** | **String**|  | [optional] 

### Return type

[**EventTicketCouponsResponse**](EventTicketCouponsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventTicketProducerControllerGetAllLinksWithOneTicket

> EventTicketLinkResponse eventTicketProducerControllerGetAllLinksWithOneTicket(eventSlug, ticketId, ticketPriceId, page, perPage)

Get all links with one ticket

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
let ticketId = "ticketId_example"; // String | 
let ticketPriceId = "ticketPriceId_example"; // String | 
let page = 3.4; // Number | 
let perPage = 3.4; // Number | 
apiInstance.eventTicketProducerControllerGetAllLinksWithOneTicket(eventSlug, ticketId, ticketPriceId, page, perPage, (error, data, response) => {
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
 **ticketId** | **String**|  | 
 **ticketPriceId** | **String**|  | 
 **page** | **Number**|  | 
 **perPage** | **Number**|  | 

### Return type

[**EventTicketLinkResponse**](EventTicketLinkResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventTicketProducerControllerSendInviteLinkByEmail

> EventTicketLinkByEmailResponse eventTicketProducerControllerSendInviteLinkByEmail(eventSlug, ticketBatchId, opts)

Send invite link participant by email

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
let ticketBatchId = "ticketBatchId_example"; // String | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.eventTicketProducerControllerSendInviteLinkByEmail(eventSlug, ticketBatchId, opts, (error, data, response) => {
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
 **ticketBatchId** | **String**|  | 
 **file** | **File**|  | [optional] 

### Return type

[**EventTicketLinkByEmailResponse**](EventTicketLinkByEmailResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## eventTicketProducerControllerUpdateEventTicket

> String eventTicketProducerControllerUpdateEventTicket(eventSlug, eventTicketId, eventTicketUpdateDto)

Update event ticket

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerTicketsApi();
let eventSlug = "eventSlug_example"; // String | 
let eventTicketId = "eventTicketId_example"; // String | 
let eventTicketUpdateDto = new NexEventApi.EventTicketUpdateDto(); // EventTicketUpdateDto | 
apiInstance.eventTicketProducerControllerUpdateEventTicket(eventSlug, eventTicketId, eventTicketUpdateDto, (error, data, response) => {
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
 **eventTicketId** | **String**|  | 
 **eventTicketUpdateDto** | [**EventTicketUpdateDto**](EventTicketUpdateDto.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

