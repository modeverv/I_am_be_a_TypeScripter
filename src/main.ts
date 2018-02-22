"use strict";

import * as $ from 'jquery'

namespace module1 {
    var o = (str: any): void => {
        $("#output").html("\n<li>" + str + "</li>\n" + $("#output").html());
    }

    // exportとはなんぞや？
    export class foo {
        // JQueryオブジェクトを受け取る
        // Jは大文字
        constructor(public element: JQuery) { }

        // 色を変更する
        public color(color: string) {
            this.element.css('color', color);
        }
    }

    // クラスとプロパティ
    class ClassName {
        x;

        get getX(): any {
            return this.x;
        }

        set setX(arg: any) {
            this.x = arg;
        }
    }

    // インターフェース
    interface Hoge {
        str: string;
        method(): string;
    }

    // クラスと実装
    class Fuga implements Hoge {
        str: string;
        method(): string {
            return "I am " + this.str;
        }
    }
    // Enum
    enum Color {
        Red,
        Blue,
        Yellow
    }
    var rN: number = Color.Red;
    var rS: string = Color[rN];
    o(rN + "," + rS);
    // オブジェクtリテラル
    var objD: { name: string, like: string } = { name: "vvakame", like: "お肉" };

    // 構造的部分型
    // ダックタイピングのことかしら
    class Options {
        sync: boolean;
    }
    function doProcess(options: Options): void {
        // optionsの値を基に何らかの処理を行う
    }
    // 要求通り、doProcess関数にOptionsのインスタンスを渡す
    var opts = new Options();
    opts.sync = true;
    doProcess(opts);
    // 求められる性質を満たせば指定された型の直接の値以外も渡せる！
    doProcess({
        sync: true
    });

    // ジェネリクス
    // Tは型パラメータ
    class DataContainer<T> {
        data: T;
        get(): T {
            return this.data;
        }
        set(value: T): void {
            this.data = value;
        }
    }

    // Tをstring型として具体化し、インスタンスを作成する
    var strContainer = new DataContainer<string>();
    strContainer.set("string1");
    o(strContainer.get());

    // Tをboolean型として具体化し、インスタンスを作成する
    var booleanContainer = new DataContainer<boolean>();
    booleanContainer.set(true);
    o(booleanContainer.get());

    // アロー関数
    // 引数にstringを1つ取り、返り値にstringを返す関数
    var func: (word: string) => string;

    // 見慣れた書き方
    func = function (word: string): string { return "Hi, " + word; };
    // アロー関数式での書き方
    func = (word: string) => "Hi, " + word;
    // アロー関数式と中かっこを使った書き方
    func = (word: string) => { return "Hi, " + word; };

    // アロー関数式はthisの値を変更しない
    class Sample {
        name: string;

        // stringを返す関数を返す
        helloA(): () => string {
            return () => "Hello, " + this.name;
        }

        // stringを返す関数を返す
        helloB(): () => string {
            return function () { return "Hello, " + this.name; };
        }
    }
    var obj = new Sample();
    obj.name = "Instance";
    var name = "Global";

    // Hello, Instance and Hello, Global と表示される
    o(obj.helloA() + " and " + obj.helloB());

    // コンストラクタと引数プロパティ宣言
    class SampleA {
        // 自動で nameがpublicが宣言される
        constructor(public name: string) { }
    }

    // SampleA と等価
    class SampleB {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    var objA = new SampleA("vvakame");
    var objB = new SampleB("vvakame");

    o(objA.name + "," + objB.name);

    // ? を付けると省略可能引数になる
    function helloA(word?: string): string {
        if (word) {
            return "Hello, " + word;
        } else {
            return "Hello, world";
        }
    }

    // = 値 で代入すると値が指定されなかった時のデフォルト値を指定できる
    function helloB(word = "world"): string {
        return "Hello, " + word;
    }

    o(helloA());
    o(helloA("TypeScript"));
    o(helloB());
    o(helloB("ts"));

    // タプル
    var tuple: [number, string] = [1, "Hi!"];

    // 1番目はnumberと指定されている
    o(tuple[0].toFixed());
    // 2番目はstringと指定されている
    o(tuple[1].charAt(0));

    // numberにはcharAtメソッドは存在しないのでコンパイルエラー！
    // tuple[0].charAt(0);

    // これうれしいい
    // 書いたものがそのまま文字列になる。改行もできる
    let str1 = `例えば<br/>
複数行の文字列も<br/>
template literalsなら書ける！`;
    o(str1);

    // ${ } で囲うことで式を埋め込むこともできる
    let str2 = `今日は${Math.random() < 0.5 ? "良い" : "悪い"}日だ。`
    // 今日は良い日だ。 または 今日は悪い日だ。 と表示される。
    o(str2);

    // template literalsの前に関数名を書くと、決まった形式の呼び出しに変換される（tagged templates）
    function tag(strs: TemplateStringsArray, ...values: any[]) {
        o(strs);   // [ 'こんにちは', '・', 'の諸君！' ] と表示される
        o(values); // [ '少年', '少女' ] と表示される
        return "世界はTypeScriptに支配された！";
    }
    let str3 = tag`こんにちは${"少年"}・${"少女"}の諸君！`;
    // 世界はTypeScriptに支配された！ と表示される
    o(str3);

    // for-in
    var hoge = { a: 1, b: 2 };
    var fuga = [1, 2, 3, 4];
    for (let v in hoge) { o(v); }
    for (let v of fuga) { o(v); }

    // 共用体
    function unionfunc(param: string | number): string | number {
        if (typeof param === "string") {
            return "hello " + param;  // パラメーターparamの値はstring型
        }
        //　型アサーション
        return <number>param * 2;  // パラメーターparamの値はnumber型
    }

    o(unionfunc("world"));
    o(unionfunc(10));

    // タグ付き共用型
    interface Cat {  // Cat型
        kind: "cat";   // タグ
        meow: () => void;  // meowは引数なし、戻り値なしの関数
    }

    interface Dog {  // Dog型
        kind: "dog";     // タグ
        bowwow: () => void;  // bowwowは引数なし、戻り値なしの関数
    }

    type Animal = Cat | Dog;

    var cat: Cat = {  // Cat型のオブジェクト
        kind: "cat",
        meow: function () { o("meow"); }
    }

    var dog: Dog = {  // Dog型のオブジェクト
        kind: "dog",
        bowwow: function () { o("bow wow"); }
    }

    var he = (x: Animal) => {
        switch (x.kind) {
            case "cat":
                x.meow();
                break;
            case "dog":
                x.bowwow();
                break;
        }
    }
    he(cat);
    he(dog);

    // 制御フローベースの型解析
    ((x?: string) => {
        if (typeof x === "undefined") {
            x = "foo"
        }
        o(x.toUpperCase());
    })();

    (function (x: number | number[]) {
        if (typeof x === "number") {
            o(x);  // xはnumber型
            return;
        }
        x.forEach(x => o(x * 2));  // if節中でreturnしているので、xはnumber[]型
    })([1, 2, 3, 4]);

    // null非許容
    var s: string | null = null; // 共用型を使ってnullを通す

    // ?は省略可能を表す nullableではないよー
    ((x?) => o("hello"))();

    // async / await
    // IE11ではまだ動かない
    function loadData(url: string) {
        return new Promise(resolve => {
            let xhr = new XMLHttpRequest();
            xhr.onload = () => {
                resolve(xhr.response);
            };
            xhr.open("GET", url);
            xhr.send(null);
        });
    }

    async function start() {
        let obj = await loadData("inde.html");
        console.log(obj);
    }

    start();
}

$(function () {
    var foo = new module1.foo($('div'));
    foo.color('green');
    foo.element.css('font-size', '0.8em');
});

// 型推論
var str1: string = "string1";
// var str2:number = "string2"; // エラー
var str3 = "string3";

var b: boolean = true;
var n: number = 1;

var a: any = true;
a = 1;

// es6ではsymbolもプリミティブ型
// var s: symbol = Symbol.for("s"); //なんか動かない