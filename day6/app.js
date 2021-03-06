/*

*/

(function(){
    'use strict';
    function App(dbName){
        this.storage = new app.Storage(dbName);
        this.model   = new app.Model(this.storage);
        this.template = new app.Template();
        this.view = new app.View(this.template);
        this.controller = new app.Controller(this.model, this.view);
    }
    var todoListApp = new App("todos");
})();