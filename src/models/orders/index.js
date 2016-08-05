'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.MODELS.WORKORDERS
 ***********************************************************************************************************************************************
 * @description
 */

import Resource from '../../system/resource';

/**
 * WORKORDERS RESOURCE
 */
let Orders = new Resource('orders', {});
    Orders.States = new Resource('orders/states', {});
    Orders.Types = new Resource('orders/types', {});

export default Orders;