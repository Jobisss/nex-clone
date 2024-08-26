# NexEventApi.EventParticipantApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventParticipantControllerCheckTicketIsAvaible**](EventParticipantApi.md#eventParticipantControllerCheckTicketIsAvaible) | **GET** /api/event-participant/v1/event-participant/{slug}/{linkId}/verify-is-avaible | Get one event public
[**eventParticipantControllerCreateNetwork**](EventParticipantApi.md#eventParticipantControllerCreateNetwork) | **POST** /api/event-participant/v1/event-participant/create-network | 
[**eventParticipantControllerCreateParticipant**](EventParticipantApi.md#eventParticipantControllerCreateParticipant) | **POST** /api/event-participant/v1/event-participant/{eventTicketLinkId}/create-participant | Create event
[**eventParticipantControllerCreateParticipantFacial**](EventParticipantApi.md#eventParticipantControllerCreateParticipantFacial) | **POST** /api/event-participant/v1/event-participant/{participantId}/create-participant-facial | Create event participant facial
[**eventParticipantControllerCreateParticipantNetworks**](EventParticipantApi.md#eventParticipantControllerCreateParticipantNetworks) | **POST** /api/event-participant/v1/event-participant/{participantId}/create-participant-network | Create event participant network
[**eventParticipantControllerCreateQuizResponses**](EventParticipantApi.md#eventParticipantControllerCreateQuizResponses) | **POST** /api/event-participant/v1/event-participant/{quizId}/response-quiz | Get quiz
[**eventParticipantControllerEventAddViewCount**](EventParticipantApi.md#eventParticipantControllerEventAddViewCount) | **PATCH** /api/event-participant/v1/event-participant/{eventSlug}/increment-view-count | increment view count
[**eventParticipantControllerEventTicketInfo**](EventParticipantApi.md#eventParticipantControllerEventTicketInfo) | **GET** /api/event-participant/v1/event-participant/{eventSlug}/event-ticket-info | Get event information
[**eventParticipantControllerEventTicketSell**](EventParticipantApi.md#eventParticipantControllerEventTicketSell) | **POST** /api/event-participant/v1/event-participant/event-ticket-buy | 
[**eventParticipantControllerFindAllPublicEvents**](EventParticipantApi.md#eventParticipantControllerFindAllPublicEvents) | **GET** /api/event-participant/v1/event-participant/find-all-events-public | Get all events public
[**eventParticipantControllerFindAllPublicEventsHome**](EventParticipantApi.md#eventParticipantControllerFindAllPublicEventsHome) | **GET** /api/event-participant/v1/event-participant/get-events-home | get Events More View
[**eventParticipantControllerFindByEmail**](EventParticipantApi.md#eventParticipantControllerFindByEmail) | **GET** /api/event-participant/v1/event-participant/{email}/find-user-by-email | Get event information
[**eventParticipantControllerFindEventInfo**](EventParticipantApi.md#eventParticipantControllerFindEventInfo) | **GET** /api/event-participant/v1/event-participant/{eventTicketLinkId}/event-info | Get event information
[**eventParticipantControllerFindOnePublicEvent**](EventParticipantApi.md#eventParticipantControllerFindOnePublicEvent) | **GET** /api/event-participant/v1/event-participant/{slug}/find-one-event-public | Get one event public
[**eventParticipantControllerGetAllParticipantNetworks**](EventParticipantApi.md#eventParticipantControllerGetAllParticipantNetworks) | **GET** /api/event-participant/v1/event-participant/get-social-networks | get social networks of event participant
[**eventParticipantControllerGetEventsMoreView**](EventParticipantApi.md#eventParticipantControllerGetEventsMoreView) | **GET** /api/event-participant/v1/event-participant/get-events-more-views | get Events More View
[**eventParticipantControllerGetQuiz**](EventParticipantApi.md#eventParticipantControllerGetQuiz) | **GET** /api/event-participant/v1/event-participant/{quizId}/get-quiz | Get quiz
[**eventParticipantControllerGetTicketInfoByLink**](EventParticipantApi.md#eventParticipantControllerGetTicketInfoByLink) | **GET** /api/event-participant/v1/event-participant/{eventTicketLinkId}/get-info | Get one event public
[**eventParticipantControllerListTickets**](EventParticipantApi.md#eventParticipantControllerListTickets) | **GET** /api/event-participant/v1/event-participant/list-tickets | Get event information
[**eventParticipantControllerNetworkHistoric**](EventParticipantApi.md#eventParticipantControllerNetworkHistoric) | **GET** /api/event-participant/v1/event-participant/network-historic | 
[**eventParticipantControllerNetworkParticipant**](EventParticipantApi.md#eventParticipantControllerNetworkParticipant) | **GET** /api/event-participant/v1/event-participant/network/{qrcode} | 
[**eventParticipantControllerParticipantTicket**](EventParticipantApi.md#eventParticipantControllerParticipantTicket) | **GET** /api/event-participant/v1/event-participant/{participantId}/ticket | Get event participant ticket
[**eventParticipantControllerThanksScreen**](EventParticipantApi.md#eventParticipantControllerThanksScreen) | **GET** /api/event-participant/v1/event-participant/{partId}/thanks-screen | Get one event public
[**eventParticipantControllerUserIsParticipantInEventByLinkId**](EventParticipantApi.md#eventParticipantControllerUserIsParticipantInEventByLinkId) | **GET** /api/event-participant/v1/event-participant/{linkId}/is-participant-by-link-id | Get quiz
[**eventParticipantControllerUserIsParticipantInEventByQuizId**](EventParticipantApi.md#eventParticipantControllerUserIsParticipantInEventByQuizId) | **GET** /api/event-participant/v1/event-participant/{quizId}/is-participant-by-quiz-id | Get quiz



## eventParticipantControllerCheckTicketIsAvaible

> Boolean eventParticipantControllerCheckTicketIsAvaible(slug, linkId)

Get one event public

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let slug = "slug_example"; // String | Event slug
let linkId = "linkId_example"; // String | Link id
apiInstance.eventParticipantControllerCheckTicketIsAvaible(slug, linkId, (error, data, response) => {
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
 **linkId** | **String**| Link id | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerCreateNetwork

> eventParticipantControllerCreateNetwork(qrcode)



### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventParticipantApi();
let qrcode = "qrcode_example"; // String | 
apiInstance.eventParticipantControllerCreateNetwork(qrcode, (error, data, response) => {
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
 **qrcode** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## eventParticipantControllerCreateParticipant

> String eventParticipantControllerCreateParticipant(userEmail, updateUser, eventTicketLinkId, eventParticipantCreateDto)

Create event

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let userEmail = "userEmail_example"; // String | 
let updateUser = true; // Boolean | 
let eventTicketLinkId = "eventTicketLinkId_example"; // String | 
let eventParticipantCreateDto = new NexEventApi.EventParticipantCreateDto(); // EventParticipantCreateDto | 
apiInstance.eventParticipantControllerCreateParticipant(userEmail, updateUser, eventTicketLinkId, eventParticipantCreateDto, (error, data, response) => {
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
 **userEmail** | **String**|  | 
 **updateUser** | **Boolean**|  | 
 **eventTicketLinkId** | **String**|  | 
 **eventParticipantCreateDto** | [**EventParticipantCreateDto**](EventParticipantCreateDto.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventParticipantControllerCreateParticipantFacial

> String eventParticipantControllerCreateParticipantFacial(participantId, opts)

Create event participant facial

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let participantId = "participantId_example"; // String | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.eventParticipantControllerCreateParticipantFacial(participantId, opts, (error, data, response) => {
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
 **participantId** | **String**|  | 
 **file** | **File**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## eventParticipantControllerCreateParticipantNetworks

> String eventParticipantControllerCreateParticipantNetworks(participantId, eventParticipantCreateDtoNetworksInner)

Create event participant network

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let participantId = "participantId_example"; // String | 
let eventParticipantCreateDtoNetworksInner = [new NexEventApi.EventParticipantCreateDtoNetworksInner()]; // [EventParticipantCreateDtoNetworksInner] | 
apiInstance.eventParticipantControllerCreateParticipantNetworks(participantId, eventParticipantCreateDtoNetworksInner, (error, data, response) => {
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
 **participantId** | **String**|  | 
 **eventParticipantCreateDtoNetworksInner** | [**[EventParticipantCreateDtoNetworksInner]**](EventParticipantCreateDtoNetworksInner.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventParticipantControllerCreateQuizResponses

> QuizCreateResponseDto eventParticipantControllerCreateQuizResponses(quizId, userEmail, createParticipantQuizDto)

Get quiz

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let quizId = "quizId_example"; // String | 
let userEmail = "userEmail_example"; // String | 
let createParticipantQuizDto = new NexEventApi.CreateParticipantQuizDto(); // CreateParticipantQuizDto | 
apiInstance.eventParticipantControllerCreateQuizResponses(quizId, userEmail, createParticipantQuizDto, (error, data, response) => {
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
 **quizId** | **String**|  | 
 **userEmail** | **String**|  | 
 **createParticipantQuizDto** | [**CreateParticipantQuizDto**](CreateParticipantQuizDto.md)|  | 

### Return type

[**QuizCreateResponseDto**](QuizCreateResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventParticipantControllerEventAddViewCount

> eventParticipantControllerEventAddViewCount(eventSlug)

increment view count

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let eventSlug = "eventSlug_example"; // String | 
apiInstance.eventParticipantControllerEventAddViewCount(eventSlug, (error, data, response) => {
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
 **eventSlug** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## eventParticipantControllerEventTicketInfo

> EventTicketInfoDto eventParticipantControllerEventTicketInfo(eventSlug)

Get event information

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventParticipantApi();
let eventSlug = "eventSlug_example"; // String | 
apiInstance.eventParticipantControllerEventTicketInfo(eventSlug, (error, data, response) => {
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

[**EventTicketInfoDto**](EventTicketInfoDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerEventTicketSell

> eventParticipantControllerEventTicketSell(updateUser, eventTicketSellDto)



### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventParticipantApi();
let updateUser = true; // Boolean | 
let eventTicketSellDto = new NexEventApi.EventTicketSellDto(); // EventTicketSellDto | 
apiInstance.eventParticipantControllerEventTicketSell(updateUser, eventTicketSellDto, (error, data, response) => {
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
 **updateUser** | **Boolean**|  | 
 **eventTicketSellDto** | [**EventTicketSellDto**](EventTicketSellDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## eventParticipantControllerFindAllPublicEvents

> FindAllPublicEvents eventParticipantControllerFindAllPublicEvents(page, perPage, opts)

Get all events public

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let page = "page_example"; // String | 
let perPage = "perPage_example"; // String | 
let opts = {
  'title': "title_example", // String | 
  'category': "category_example", // String | 
  'initialDate': "initialDate_example", // String | 
  'finalDate': "finalDate_example" // String | 
};
apiInstance.eventParticipantControllerFindAllPublicEvents(page, perPage, opts, (error, data, response) => {
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
 **page** | **String**|  | 
 **perPage** | **String**|  | 
 **title** | **String**|  | [optional] 
 **category** | **String**|  | [optional] 
 **initialDate** | **String**|  | [optional] 
 **finalDate** | **String**|  | [optional] 

### Return type

[**FindAllPublicEvents**](FindAllPublicEvents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerFindAllPublicEventsHome

> [FindAllPublicEventsDtoInner] eventParticipantControllerFindAllPublicEventsHome()

get Events More View

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
apiInstance.eventParticipantControllerFindAllPublicEventsHome((error, data, response) => {
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

[**[FindAllPublicEventsDtoInner]**](FindAllPublicEventsDtoInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerFindByEmail

> FindByEmailDto eventParticipantControllerFindByEmail(email)

Get event information

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let email = "email_example"; // String | 
apiInstance.eventParticipantControllerFindByEmail(email, (error, data, response) => {
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

### Return type

[**FindByEmailDto**](FindByEmailDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerFindEventInfo

> FindEventInfoDto eventParticipantControllerFindEventInfo(eventTicketLinkId)

Get event information

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let eventTicketLinkId = "eventTicketLinkId_example"; // String | 
apiInstance.eventParticipantControllerFindEventInfo(eventTicketLinkId, (error, data, response) => {
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
 **eventTicketLinkId** | **String**|  | 

### Return type

[**FindEventInfoDto**](FindEventInfoDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerFindOnePublicEvent

> FindOnePublicEventsDto eventParticipantControllerFindOnePublicEvent(slug)

Get one event public

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let slug = "slug_example"; // String | Event slug
apiInstance.eventParticipantControllerFindOnePublicEvent(slug, (error, data, response) => {
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

[**FindOnePublicEventsDto**](FindOnePublicEventsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerGetAllParticipantNetworks

> ParticipantSocialNetworks eventParticipantControllerGetAllParticipantNetworks()

get social networks of event participant

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventParticipantApi();
apiInstance.eventParticipantControllerGetAllParticipantNetworks((error, data, response) => {
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

[**ParticipantSocialNetworks**](ParticipantSocialNetworks.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerGetEventsMoreView

> [FindAllPublicEventsDtoInner] eventParticipantControllerGetEventsMoreView()

get Events More View

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
apiInstance.eventParticipantControllerGetEventsMoreView((error, data, response) => {
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

[**[FindAllPublicEventsDtoInner]**](FindAllPublicEventsDtoInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerGetQuiz

> QuizDto eventParticipantControllerGetQuiz(quizId)

Get quiz

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let quizId = "quizId_example"; // String | 
apiInstance.eventParticipantControllerGetQuiz(quizId, (error, data, response) => {
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
 **quizId** | **String**|  | 

### Return type

[**QuizDto**](QuizDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerGetTicketInfoByLink

> FindTicketByLinkResponseDto eventParticipantControllerGetTicketInfoByLink(eventTicketLinkId)

Get one event public

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let eventTicketLinkId = "eventTicketLinkId_example"; // String | 
apiInstance.eventParticipantControllerGetTicketInfoByLink(eventTicketLinkId, (error, data, response) => {
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
 **eventTicketLinkId** | **String**|  | 

### Return type

[**FindTicketByLinkResponseDto**](FindTicketByLinkResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerListTickets

> ListTickets eventParticipantControllerListTickets(page, perPage, opts)

Get event information

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventParticipantApi();
let page = "page_example"; // String | 
let perPage = "perPage_example"; // String | 
let opts = {
  'searchable': "searchable_example", // String | 
  'initialDate': "initialDate_example", // String | 
  'finalDate': "finalDate_example" // String | 
};
apiInstance.eventParticipantControllerListTickets(page, perPage, opts, (error, data, response) => {
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
 **page** | **String**|  | 
 **perPage** | **String**|  | 
 **searchable** | **String**|  | [optional] 
 **initialDate** | **String**|  | [optional] 
 **finalDate** | **String**|  | [optional] 

### Return type

[**ListTickets**](ListTickets.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerNetworkHistoric

> eventParticipantControllerNetworkHistoric(page, perPage)



### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventParticipantApi();
let page = "page_example"; // String | 
let perPage = "perPage_example"; // String | 
apiInstance.eventParticipantControllerNetworkHistoric(page, perPage, (error, data, response) => {
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
 **page** | **String**|  | 
 **perPage** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## eventParticipantControllerNetworkParticipant

> eventParticipantControllerNetworkParticipant(qrcode)



### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let qrcode = "qrcode_example"; // String | 
apiInstance.eventParticipantControllerNetworkParticipant(qrcode, (error, data, response) => {
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
 **qrcode** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## eventParticipantControllerParticipantTicket

> ParticipantTicketDto eventParticipantControllerParticipantTicket(participantId)

Get event participant ticket

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let participantId = "participantId_example"; // String | 
apiInstance.eventParticipantControllerParticipantTicket(participantId, (error, data, response) => {
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
 **participantId** | **String**|  | 

### Return type

[**ParticipantTicketDto**](ParticipantTicketDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerThanksScreen

> ThanksScreenDto eventParticipantControllerThanksScreen(partId)

Get one event public

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let partId = "partId_example"; // String | Participant ID
apiInstance.eventParticipantControllerThanksScreen(partId, (error, data, response) => {
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
 **partId** | **String**| Participant ID | 

### Return type

[**ThanksScreenDto**](ThanksScreenDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerUserIsParticipantInEventByLinkId

> UserIsParticipantInEventByLinkIdResponseDto eventParticipantControllerUserIsParticipantInEventByLinkId(linkId, userEmail)

Get quiz

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let linkId = "linkId_example"; // String | 
let userEmail = "userEmail_example"; // String | 
apiInstance.eventParticipantControllerUserIsParticipantInEventByLinkId(linkId, userEmail, (error, data, response) => {
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
 **linkId** | **String**|  | 
 **userEmail** | **String**|  | 

### Return type

[**UserIsParticipantInEventByLinkIdResponseDto**](UserIsParticipantInEventByLinkIdResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventParticipantControllerUserIsParticipantInEventByQuizId

> Boolean eventParticipantControllerUserIsParticipantInEventByQuizId(quizId, userEmail)

Get quiz

### Example

```javascript
import NexEventApi from 'nex_event_api';

let apiInstance = new NexEventApi.EventParticipantApi();
let quizId = "quizId_example"; // String | 
let userEmail = "userEmail_example"; // String | 
apiInstance.eventParticipantControllerUserIsParticipantInEventByQuizId(quizId, userEmail, (error, data, response) => {
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
 **quizId** | **String**|  | 
 **userEmail** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

