/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import template from './contact-details.html!text';
import {RouteConfig} from '../../../../ng-decorator'; // jshint unused: false

//start-non-standard
@RouteConfig('app.account.contact-details', {
    url: '/contact-details',
    template: template
})
//end-non-standard
class ProfileContactDetails {}
