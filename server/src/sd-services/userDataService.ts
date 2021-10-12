let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class userDataService {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'userDataService';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new userDataService(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_userDataService_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: userDataService');

    //appendnew_flow_userDataService_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: userDataService');

    if (!this.swaggerDocument['paths']['/inserVal']) {
      this.swaggerDocument['paths']['/inserVal'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/inserVal']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/inserVal`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_RmvJ9Z3bfe79ko0m(bh);
          //appendnew_next_sd_3IIBPc73Vqtkntak
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3IIBPc73Vqtkntak');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_userDataService_HttpIn
  }
  //   service flows_userDataService

  //appendnew_flow_userDataService_start

  async sd_RmvJ9Z3bfe79ko0m(bh) {
    try {
      bh.local.data = await MongoPersistance.getInstance().insertOne(
        'sd_5A6o4bC3HR7rx9Qo',
        'dataInfo',
        bh.input.body,
        {}
      );
      bh = await this.sd_LzPG0TX4oB8PMezY(bh);
      //appendnew_next_sd_RmvJ9Z3bfe79ko0m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RmvJ9Z3bfe79ko0m');
    }
  }

  async sd_LzPG0TX4oB8PMezY(bh) {
    try {
      console.log('serviceCalling');
      await this.sd_ZZWs6a1bEqVvFRoI(bh);
      //appendnew_next_sd_LzPG0TX4oB8PMezY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LzPG0TX4oB8PMezY');
    }
  }

  async sd_ZZWs6a1bEqVvFRoI(bh) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZZWs6a1bEqVvFRoI');
    }
  }

  async sd_KQzQNiNAbresF0E5(bh) {
    try {
      console.log('catching err in service');
      //appendnew_next_sd_KQzQNiNAbresF0E5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KQzQNiNAbresF0E5');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_aWudJgW4ZImF0ahL(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_aWudJgW4ZImF0ahL(bh) {
    const catchConnectedNodes = ['sd_KQzQNiNAbresF0E5'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_KQzQNiNAbresF0E5(bh);
    //appendnew_next_sd_aWudJgW4ZImF0ahL
    return true;
  }
  //appendnew_flow_userDataService_Catch
}
