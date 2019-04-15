import apisauce from 'apisauce'

const create = (baseURL = 'http://103.65.96.238/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  });

  const login = (payload) => api.post('apisolday/api/v1/login', payload);
  const todayStatus = (id) => api.get(`attendance/timesheet/status/${id}`);
  const locationActive = () => api.get(`attendance/location/active`);
  const checkin = ({ username, payload }) => api.post(`attendance/timesheet/checkIn/${username}`, payload);
  const checkout = ({ telkomnik, payload }) => api.post(`attendance/timesheet/checkOut/${telkomnik}`, payload);

  return {
    api,
    login,
    todayStatus,
    locationActive,
    checkin,
    checkout
  }
};

export default {
  create
}
