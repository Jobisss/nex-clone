import { eventParticipantApi } from "@/services/api";

function useEventParticipantHook() { 
    const eventParticipantControllerFindAllPublicEvents = async ( 
        perPage,
        page ,
        title,
        category
      ) => {
        try {
          const { data, status, statusText } =
            await eventParticipantApi.eventParticipantControllerFindAllPublicEvents(
              page,
              perPage,
              title,
              category
            );
          return {
            status: status,
            message: statusText,
            data: data,
          };
        } catch (error) {
            console.log('error', error)
          return {
            status: error.response.data.statusCode,
            message: error.response.data.message,
          };
        }
      };
      const eventParticipantControllerFindOnePublicEvent = async (slug ) => {
        try {
          const { data, status, statusText } =
            await eventParticipantApi.eventParticipantControllerFindOnePublicEvent(
              slug
            );
          return {
            status: status,
            message: statusText,
            data: data,
          };
        } catch (error ) {
          return {
            status: error.response.data.statusCode,
            message: error.response.data.message,
          };
        }
      };
    
      const eventParticipantControllerGetEventsMoreView = async () => {
        try {
          const { data, status, statusText } =
            await eventParticipantApi.eventParticipantControllerGetEventsMoreView();
          return {
            status: status,
            message: statusText,
            data: data,
          };
        } catch (error ) {
          return {
            status: error.response.data.statusCode,
            message: error.response.data.message,
          };
        }
      };

      const eventParticipantControllerFindAllPublicEventsHome = async () => {
        try {
          const { data, status, statusText } =
            await eventParticipantApi.eventParticipantControllerFindAllPublicEventsHome();
          return {
            status: status,
            message: statusText,
            data: data,
          };
        } catch (error) {
          return {
            status: error.response.data.statusCode,
            message: error.response.data.message,
          };
        }
      };
    

      return {
        eventParticipantControllerFindAllPublicEvents,
        eventParticipantControllerFindOnePublicEvent,
        eventParticipantControllerGetEventsMoreView,
        eventParticipantControllerFindAllPublicEventsHome,
      };
}

export default useEventParticipantHook;