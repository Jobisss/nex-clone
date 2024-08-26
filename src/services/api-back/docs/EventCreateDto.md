# NexEventApi.EventCreateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Event name | 
**description** | **String** | Event description | 
**eventPublic** | **Boolean** | Event public | [optional] [default to true]
**startAt** | **String** | Event start date | [optional] [default to &#39;Wed Aug 21 2024&#39;]
**endAt** | **String** | Event end date | [optional] [default to &#39;Wed Aug 21 2024&#39;]
**startPublishAt** | **String** | Event publish start date | [optional] [default to &#39;Wed Aug 21 2024&#39;]
**endPublishAt** | **String** | Event publish end date | [optional] [default to &#39;Wed Aug 21 2024&#39;]
**category** | **String** | Event category | 
**location** | **String** | Event location type | 
**latitude** | **String** |  | [optional] 
**longitude** | **String** |  | [optional] 
**address** | **String** |  | [optional] 
**country** | **String** |  | [optional] 
**city** | **String** |  | [optional] 
**state** | **String** |  | [optional] 
**complement** | **String** |  | [optional] 
**number** | **String** |  | [optional] 
**district** | **String** |  | [optional] 
**sellOnThePlatform** | **Boolean** |  | 
**eventSchedule** | [**[EventCreateDtoEventScheduleInner]**](EventCreateDtoEventScheduleInner.md) |  | 
**eventConfig** | [**EventCreateDtoEventConfig**](EventCreateDtoEventConfig.md) |  | 
**eventTickets** | [**[EventCreateDtoEventTicketsInner]**](EventCreateDtoEventTicketsInner.md) |  | 



## Enum: LocationEnum


* `ONLINE` (value: `"ONLINE"`)

* `UNDEFINED` (value: `"UNDEFINED"`)

* `DEFINED` (value: `"DEFINED"`)




