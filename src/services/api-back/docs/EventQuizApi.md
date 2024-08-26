# NexEventApi.EventQuizApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventQuizControllerAlterQuizStatus**](EventQuizApi.md#eventQuizControllerAlterQuizStatus) | **PATCH** /api/event-quiz/v1/event-quiz/{slug}/quiz/{quizId}/alter-status | Alter quiz status
[**eventQuizControllerCreateQuiz**](EventQuizApi.md#eventQuizControllerCreateQuiz) | **POST** /api/event-quiz/v1/event-quiz/{slug}/create-quiz | Create event quiz
[**eventQuizControllerCreateQuizQuestions**](EventQuizApi.md#eventQuizControllerCreateQuizQuestions) | **POST** /api/event-quiz/v1/event-quiz/{slug}/quiz/{quizId}/create-questions | Create new quiz questions
[**eventQuizControllerFindAllQuizzes**](EventQuizApi.md#eventQuizControllerFindAllQuizzes) | **GET** /api/event-quiz/v1/event-quiz/{slug}/find-all-quizzes | Find all quizzes for an event
[**eventQuizControllerQuizDashboard**](EventQuizApi.md#eventQuizControllerQuizDashboard) | **GET** /api/event-quiz/v1/event-quiz/{slug}/quiz-dashboard/{quizId} | Get quiz dashboard details
[**eventQuizControllerQuizParticipantResponse**](EventQuizApi.md#eventQuizControllerQuizParticipantResponse) | **GET** /api/event-quiz/v1/event-quiz/{slug}/quiz-participants/{quizId}/{quizParticipantId} | Get quiz participants responses
[**eventQuizControllerQuizParticipantsResponse**](EventQuizApi.md#eventQuizControllerQuizParticipantsResponse) | **GET** /api/event-quiz/v1/event-quiz/{slug}/quiz-participants/{quizId} | Get quiz participants responses



## eventQuizControllerAlterQuizStatus

> String eventQuizControllerAlterQuizStatus(slug, quizId)

Alter quiz status

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventQuizApi();
let slug = "slug_example"; // String | 
let quizId = "quizId_example"; // String | 
apiInstance.eventQuizControllerAlterQuizStatus(slug, quizId, (error, data, response) => {
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
 **quizId** | **String**|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventQuizControllerCreateQuiz

> EventQuizCreatedResponseDto eventQuizControllerCreateQuiz(slug, eventQuizCreateDto)

Create event quiz

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventQuizApi();
let slug = "slug_example"; // String | 
let eventQuizCreateDto = new NexEventApi.EventQuizCreateDto(); // EventQuizCreateDto | 
apiInstance.eventQuizControllerCreateQuiz(slug, eventQuizCreateDto, (error, data, response) => {
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
 **eventQuizCreateDto** | [**EventQuizCreateDto**](EventQuizCreateDto.md)|  | 

### Return type

[**EventQuizCreatedResponseDto**](EventQuizCreatedResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventQuizControllerCreateQuizQuestions

> EventQuizCreatedResponseDto eventQuizControllerCreateQuizQuestions(slug, quizId, requestBody)

Create new quiz questions

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventQuizApi();
let slug = "slug_example"; // String | 
let quizId = "quizId_example"; // String | 
let requestBody = [null]; // [Object] | 
apiInstance.eventQuizControllerCreateQuizQuestions(slug, quizId, requestBody, (error, data, response) => {
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
 **quizId** | **String**|  | 
 **requestBody** | [**[Object]**](Object.md)|  | 

### Return type

[**EventQuizCreatedResponseDto**](EventQuizCreatedResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventQuizControllerFindAllQuizzes

> EventQuizFindAllResponse eventQuizControllerFindAllQuizzes(slug, page, perPage)

Find all quizzes for an event

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventQuizApi();
let slug = "slug_example"; // String | 
let page = 3.4; // Number | 
let perPage = 3.4; // Number | 
apiInstance.eventQuizControllerFindAllQuizzes(slug, page, perPage, (error, data, response) => {
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
 **page** | **Number**|  | 
 **perPage** | **Number**|  | 

### Return type

[**EventQuizFindAllResponse**](EventQuizFindAllResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventQuizControllerQuizDashboard

> EventQuizDashboarDto eventQuizControllerQuizDashboard(slug, quizId)

Get quiz dashboard details

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventQuizApi();
let slug = "slug_example"; // String | 
let quizId = "quizId_example"; // String | 
apiInstance.eventQuizControllerQuizDashboard(slug, quizId, (error, data, response) => {
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
 **quizId** | **String**|  | 

### Return type

[**EventQuizDashboarDto**](EventQuizDashboarDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventQuizControllerQuizParticipantResponse

> EventParticipantResponseDto eventQuizControllerQuizParticipantResponse(slug, quizId, quizParticipantId)

Get quiz participants responses

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventQuizApi();
let slug = "slug_example"; // String | 
let quizId = "quizId_example"; // String | 
let quizParticipantId = "quizParticipantId_example"; // String | 
apiInstance.eventQuizControllerQuizParticipantResponse(slug, quizId, quizParticipantId, (error, data, response) => {
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
 **quizId** | **String**|  | 
 **quizParticipantId** | **String**|  | 

### Return type

[**EventParticipantResponseDto**](EventParticipantResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventQuizControllerQuizParticipantsResponse

> EventQuizParticipantsResponse eventQuizControllerQuizParticipantsResponse(slug, quizId, page, perPage)

Get quiz participants responses

### Example

```javascript
import NexEventApi from 'nex_event_api';
let defaultClient = NexEventApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NexEventApi.EventQuizApi();
let slug = "slug_example"; // String | 
let quizId = "quizId_example"; // String | 
let page = 3.4; // Number | 
let perPage = 3.4; // Number | 
apiInstance.eventQuizControllerQuizParticipantsResponse(slug, quizId, page, perPage, (error, data, response) => {
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
 **quizId** | **String**|  | 
 **page** | **Number**|  | 
 **perPage** | **Number**|  | 

### Return type

[**EventQuizParticipantsResponse**](EventQuizParticipantsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

