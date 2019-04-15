export default async function request(api, options) {
  try {
    const response = await api(options);
    if (response.ok) {
      if (response.data.success) {
        return {
          success: true, message: response.data.message, data: response.data
        };
      } else {
        return {
          success: false, message: response.data.message, data: null
        };
      }
    } else {
      return {
        success: false, message: response.problem, data: response
      };
    }
  } catch (err) {
    return {
      success: false, message: 'Galat tidak diketahui, periksa kembali jaringan anda', data: null
    };
  }
}
