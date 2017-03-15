//This file is used to read the keys from the configuration file and provide the values to the application.

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { MyErrorHandler } from '../utility/errorhandler';

@Injectable()
export class Config {
    private config: Object
    abc: any ='en';
    constructor(private http: Http, private errorHandler: MyErrorHandler) {
    }

    //Loads the config json file before the application bootstraps and load.
    load() {
        return new Promise((resolve) => {
            this.http.get('../../../configuration/messages.xlf').map(res => res)
                .subscribe(configData => {
                    this.config = configData;
                    resolve();
                }, err => this.errorHandler.handleFailureResponse(err));
        });
    }

    //Returns the value for given key from the config file(json file)
    getEnv(key: any) {
        return this.config[key];
    }
};