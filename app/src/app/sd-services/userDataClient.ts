/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class userDataClient {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_userDataClient

  async formClientData(dataValue: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          dataValue: dataValue,
        },
        local: {
          data: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_XXaSCMmIWUTIyjPW(bh);
      //appendnew_next_formClientData
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0V4nEg6HTYj915oW');
    }
  }

  //appendnew_flow_userDataClient_start

  async sd_XXaSCMmIWUTIyjPW(bh) {
    try {
      console.log('enterclienttt', bh.input.dataValue);

      //console.log("enterclienttt2",bh.local.dataFormVal.name)

      bh = await this.sd_KAkNbhPy6zpAa4hO(bh);
      //appendnew_next_sd_XXaSCMmIWUTIyjPW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XXaSCMmIWUTIyjPW');
    }
  }

  async sd_KAkNbhPy6zpAa4hO(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `inserVal/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.dataValue,
      };
      bh.local.data = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_KAkNbhPy6zpAa4hO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KAkNbhPy6zpAa4hO');
    }
  }

  async sd_4CSIje1LgO0sYnUO(bh) {
    try {
      console.log('catching err in client');
      //appendnew_next_sd_4CSIje1LgO0sYnUO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4CSIje1LgO0sYnUO');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_RCwc5Aw0RX8sCnii(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_RCwc5Aw0RX8sCnii(bh) {
    const catchConnectedNodes = ['sd_4CSIje1LgO0sYnUO'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_4CSIje1LgO0sYnUO(bh);
    //appendnew_next_sd_RCwc5Aw0RX8sCnii
    return true;
  }
  //appendnew_flow_userDataClient_Catch
}
