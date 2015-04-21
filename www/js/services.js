angular.module('starter.services', [])

.factory('temanService', function($http) {
   // var baseUrl = 'http://herudi-sahimar.16mb.com/simplecrud/';
   //var baseUrl = 'http://localhost/restapi/web/index.php/country/';
   var baseUrl = 'http://192.168.0.128/restapi/web/index.php/country/';
    return {
        /*getAll: function() {
            return $http.get(baseUrl+'select.php');
        }, */
		getAll: function() {
            return $http.get(baseUrl+'index');
        },
        getId: function (temanId){
            //return $http.get(baseUrl+'index.php?id='+temanId);
            return $http.get(baseUrl+'view/'+temanId);
        },
        create: function (datateman){
            return $http.post(baseUrl+'insert.php',datateman,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        update: function (datateman){
            return $http.post(baseUrl+'update.php',datateman,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        delete: function  (id){
            return $http.get(baseUrl+'delete.php?id='+id);
        }
    };
    
});
