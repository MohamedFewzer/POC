//append_imports_start

import * as sd_5dPR0hc0mVAUEM1S from 'app/sd-services/userDataClient'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_5dPR0hc0mVAUEM1S: sd_5dPR0hc0mVAUEM1S.userDataClient
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
