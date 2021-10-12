//append_imports_start

import * as cors from 'cors'; //_splitter_
//append_imports_end
export let Middlewares = {
  sd_Tp9jNbUvUZ1kJnAn: () => {
    let corsOptions = {
      origin: ['http://localhost:4200'],

      credentials: false,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  //appendnew_flow
};
