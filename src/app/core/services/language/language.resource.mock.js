/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import languages from './fixtures/languages.json!json';
import {Run, Inject} from '../../../ng-decorator'; // jshint unused: false

//start-non-standard
@Run()
//end-non-standard
class LanguageResourceMock {
    constructor($httpBackend) {
        $httpBackend.whenGET(/\/languages/)
            .respond( (method, url) => {
                console.log('GET',url);
                return [200, languages];
            });
    }
    static runFactory($httpBackend){
        LanguageResourceMock.instance = new LanguageResourceMock($httpBackend);
        return LanguageResourceMock.instance;
    }
}
LanguageResourceMock.runFactory.$inject = ['$httpBackend'];



