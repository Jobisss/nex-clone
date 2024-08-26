# NexEventApi.EventProducerNetworksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventNetworkProducerControllerCreateEventNetworks**](EventProducerNetworksApi.md#eventNetworkProducerControllerCreateEventNetworks) | **POST** /api/event-producer/v1/event-producer/{eventSlug}/create-networks | Create event networks
[**eventNetworkProducerControllerFindAllEventNetworks**](EventProducerNetworksApi.md#eventNetworkProducerControllerFindAllEventNetworks) | **GET** /api/event-producer/v1/event-producer/{eventSlug}/get-networks | Get event networks



## eventNetworkProducerControllerCreateEventNetworks

> String eventNetworkProducerControllerCreateEventNetworks(eventSlug, eventNetworksProducerCreateDtoInner)

Create event networks

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerNetworksApi();
let eventSlug = "eventSlug_example"; // String | 
let eventNetworksProducerCreateDtoInner = [new NexEventApi.EventNetworksProducerCreateDtoInner()]; // [EventNetworksProducerCreateDtoInner] | 
apiInstance.eventNetworkProducerControllerCreateEventNetworks(eventSlug, eventNetworksProducerCreateDtoInner, (error, data, response) => {
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
 **eventNetworksProducerCreateDtoInner** | [**[EventNetworksProducerCreateDtoInner]**](EventNetworksProducerCreateDtoInner.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventNetworkProducerControllerFindAllEventNetworks

> EventNetworksResponse eventNetworkProducerControllerFindAllEventNetworks(eventSlug, page, perPage)

Get event networks

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventProducerNetworksApi();
let eventSlug = "eventSlug_example"; // String | 
let page = 3.4; // Number | 
let perPage = 3.4; // Number | 
apiInstance.eventNetworkProducerControllerFindAllEventNetworks(eventSlug, page, perPage, (error, data, response) => {
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

### Return type

[**EventNetworksResponse**](EventNetworksResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

