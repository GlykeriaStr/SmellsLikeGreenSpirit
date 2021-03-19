// Not using this file just yet

import axios from 'axios';

export default axios.create({
  baseURL:
    'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_LICENSE_API_KEY}`,
  },
});
