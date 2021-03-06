(function(exports){
    'use strict';
    function Template(){
        console.log("Template Constructor executed");

        this.defaultTemplate = '<li data-id="{{id}}" class="{{completed}} todo-item">' +
                '<div class="view">' +
                    '<input class="toggle" type="checkbox" {{checked}}>' +
                    '<label class="title">{{title}}</label>' +
                    '<button class="destroy"></button>' +
                '</div>' +
            '</li>';
        this.editingTemplate = document.createElement('input');
        this.editingTemplate.classList.add('edit');
    }

    Template.prototype.makeList = function(data){
        var lists = '';
        
        for(var i=0; i<data.length; i++){
            var template = this.defaultTemplate;
            var completed = '';
            var checked = '';

            if(data[i].completed){
                checked = 'checked';
                completed = 'completed';
            }
            
            template = template.replace('{{id}}', data[i].id);
            template = template.replace('{{completed}}', completed);
            template = template.replace('{{checked}}', checked);
            template = template.replace('{{title}}', data[i].title);

            lists = lists + template;
        }
        return lists;
    };

    Template.prototype.makeCounter = function(totalTodos){
        var plural = totalTodos === 1 ? '' : 's';
        
        return '<strong>'+totalTodos+'</strong> item' + plural + ' left';
    }


    exports.app = exports.app || {};
    exports.app.Template = Template;
})(this);