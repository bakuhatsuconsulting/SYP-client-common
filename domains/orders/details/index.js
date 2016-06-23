'use strict';

/***********************************************************************************************************************************************
 * 
 ***********************************************************************************************************************************************
 * @description
 */
import Model from '/app/src/models/orders';
import Customers from '/app/src/models/customers';
import q from 'q';

export default {view};

/**
 * [view description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function view(id) {
  var def = q.defer();
  let data = {}

  Model.find(id)
    .then(function(order) {
      return Customers.find(order.customer)
        .then(function(customer) {
          order.customer = customer;
          return order;
        });
    }).then(function(order) {
      Model.request('get', 'orders/'+order.id+'/items')
        .then(function(items) {
          let services = [];
          order.items = JSON.parse(items.text) || [];

          order.items.forEach(function(item) {
            item.services = [];

            services.push(Model.request('get', 'orders/'+order.id+'/items/'+item.id+'/services'));
          });

          q.all(services)
            .then(function(services) {
              services.forEach(function(service) {

                service = service.text && (JSON.parse(service.text))[0] || {};
                
                order.items.filter(function(item) {
                  return service.item_id === item.id;
                })[0].services.push(service);
              });

              data.order = order;
            }).then(function() {
              Model.request('get', 'orders/types')
                .then(function(types) {
                  data.types = JSON.parse(types.text);

                   Model.request('get', 'orders/states')
                    .then(function(states) {
                      data.states = JSON.parse(states.text);
                      def.resolve(data);
                    });
                });
            });
        }); 
    }).catch(function(err) {
      def.reject(err);
    });

  return def.promise;
}