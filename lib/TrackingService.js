import CONFIG from '../config/client_config.js';
import { IS_BROWSER } from './ClientCheck.js';

class TrackingService {
  constructor(){
    this.ReactGA;

    if (IS_BROWSER){
      this.ReactGA = require('react-ga');

      this.ReactGA.initialize(CONFIG.GOOGLE_ANALYTICS_ID);
    }
  }

  pageView(){
    if (IS_BROWSER) {
      const page = window.location.pathname;
      console.log("PAGE VIEW: "+page);
      this.ReactGA.set({ page });
      this.ReactGA.pageview(page);
    }
  }

  event(category,action,params = {}){
    if (IS_BROWSER) {
      params.category = category;
      params.action = action;
      this.ReactGA.event(params);
    }
  }
}

export default new TrackingService();
