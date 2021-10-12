/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormBuilder, FormControl, Validators } from '@angular/forms'; //_splitter_
import { HttpClient } from '@angular/common/http'; //_splitter_
import { userDataClient } from 'app/sd-services/userDataClient'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-UserData',
  templateUrl: './UserData.template.html',
})
export class UserDataComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_79I6F8TVxHexX1IU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_79I6F8TVxHexX1IU(bh) {
    try {
      bh = this.sd_T75dnoF8Cv1xgHwz(bh);
      //appendnew_next_sd_79I6F8TVxHexX1IU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_79I6F8TVxHexX1IU');
    }
  }

  submitForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { dataFormVal: undefined, alertSuccess: undefined };
      bh = this.sd_Ws0tePWIAla2RcTg(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FFLwJYOB1fy7uhHR');
    }
  }

  //appendnew_flow_UserDataComponent_start

  sd_T75dnoF8Cv1xgHwz(bh) {
    try {
      this.page.fb = undefined;
      this.page.todaysDate = undefined;
      bh = this.sd_VVWDfiUFPeSmq8Dt(bh);
      //appendnew_next_sd_T75dnoF8Cv1xgHwz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T75dnoF8Cv1xgHwz');
    }
  }

  sd_VVWDfiUFPeSmq8Dt(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_QVuj3rM48RF62exQ(bh);
      //appendnew_next_sd_VVWDfiUFPeSmq8Dt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VVWDfiUFPeSmq8Dt');
    }
  }

  sd_QVuj3rM48RF62exQ(bh) {
    try {
      this.page.http = this.__page_injector__.get(HttpClient);
      bh = this.sd_Cs3jCc9HxC68J3IJ(bh);
      //appendnew_next_sd_QVuj3rM48RF62exQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QVuj3rM48RF62exQ');
    }
  }

  sd_Cs3jCc9HxC68J3IJ(bh) {
    try {
      this.page.myClient = this.__page_injector__.get(userDataClient);
      bh = this.sd_nCxfMxUIV89EAPLJ(bh);
      //appendnew_next_sd_Cs3jCc9HxC68J3IJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cs3jCc9HxC68J3IJ');
    }
  }

  sd_nCxfMxUIV89EAPLJ(bh) {
    try {
      const page = this.page;
      page.dataForm = page.fb.group({
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern(
              `(?:(?:\\+|0{0,2})91(\\s*[\\- ]\\s*)?|[0 ]?)?[789]\\d{9}|(\\d[ -]?){10}\\d`
            ),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
          ],
        ],
        dob: ['', Validators.required],
        age: [
          '',
          [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$')],
        ],
        userName: [
          '',
          [
            Validators.required,
            Validators.pattern(
              `^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$`
            ),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
            ),
          ],
        ],
      });
      page.todaysDate = new Date();
      console.log(page.todaysDate);

      //appendnew_next_sd_nCxfMxUIV89EAPLJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nCxfMxUIV89EAPLJ');
    }
  }

  sd_Ws0tePWIAla2RcTg(bh) {
    try {
      const page = this.page;
      console.log(page.dataForm);
      if (page.dataForm.status == 'VALID') {
        bh.local.dataFormVal = page.dataForm.value;
        page.myClient.formClientData(bh.local.dataFormVal);
        bh.local.alertSuccess = true;
        // alert("Your data is saved successfully")
        //window.location.reload()
      } else {
        bh.local.alertSuccess = false;
        //alert("Please fill every field")
      }

      //console.log(bh.local.dataFormVal);
      bh = this.sd_2feWAkNg5BhqPvke(bh);
      //appendnew_next_sd_Ws0tePWIAla2RcTg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ws0tePWIAla2RcTg');
    }
  }

  sd_2feWAkNg5BhqPvke(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.alertSuccess,
          true,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Og0NKyeZNjxYZ5V0(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.local.alertSuccess,
          false,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_XLAJMXEYNXyob5D4(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2feWAkNg5BhqPvke');
    }
  }

  sd_Og0NKyeZNjxYZ5V0(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Data saved successfully', 'close', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Og0NKyeZNjxYZ5V0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Og0NKyeZNjxYZ5V0');
    }
  }

  sd_XLAJMXEYNXyob5D4(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please fill every field', 'close', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_XLAJMXEYNXyob5D4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XLAJMXEYNXyob5D4');
    }
  }

  sd_NNIld3PS5qX3KzzJ(bh) {
    try {
      const page = this.page;
      console.log('catching err');
      //appendnew_next_sd_NNIld3PS5qX3KzzJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NNIld3PS5qX3KzzJ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_vvWF66KOKKIdqEa8(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_vvWF66KOKKIdqEa8(bh) {
    const catchConnectedNodes = ['sd_NNIld3PS5qX3KzzJ'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_NNIld3PS5qX3KzzJ(bh);
    //appendnew_next_sd_vvWF66KOKKIdqEa8
    return true;
  }
  //appendnew_flow_UserDataComponent_Catch
}
