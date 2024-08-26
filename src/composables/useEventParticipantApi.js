// src/hooks/useEventParticipantHook.js
import api from '@/services/api'; // Importe a instância do Axios

function useEventParticipantHook() {
  const eventParticipantControllerFindAllPublicEvents = async (
    perPage,
    page,
    title,
    category
  ) => {
    try {
      const { data, status, statusText } = await api.get('/event-participant/v1/event-participant/find-all-events-public', {
        params: { page, perPage, title, category }
      });
      return {
        status,
        message: statusText,
        data,
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || 'An error occurred',
      };
    }
  };

  const eventParticipantControllerFindOnePublicEvent = async (slug) => {
    try {
      const { data, status, statusText } = await api.get(`/events/${slug}`);
      return {
        status,
        message: statusText,
        data,
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || 'An error occurred',
      };
    }
  };

  const eventParticipantControllerGetEventsMoreView = async () => {
    try {
      const { data, status, statusText } = await api.get('/events/more-view');
      return {
        status,
        message: statusText,
        data,
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || 'An error occurred',
      };
    }
  };

  const eventParticipantControllerFindAllPublicEventsHome = async () => {
    try {
      const { data, status, statusText } = await api.get('/events/home');
      return {
        status,
        message: statusText,
        data,
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || 'An error occurred',
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
