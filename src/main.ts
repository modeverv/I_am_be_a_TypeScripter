import * as $ from 'jquery'

namespace module1 {
    export class foo{
        // JQueryオブジェクトを受け取る
        // Jは大文字
        constructor(public element:JQuery){}

        // 色を変更する
        public color(color:string){
            this.element.css('color',color);
        }   
    }
}

$(function(){
  var foo = new module1.foo($('div'));
  foo.color('green'); 
  foo.element.css('font-size','2em');
});

