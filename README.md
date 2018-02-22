# TypeScript
TypeScriptというか、ここのところのJavaScript界隈に全く追いついていないのでちょっとは追いつきたい

## 旧石器時代から
- 仕事で使うなら古い環境を当分サポートしないとダメでしょう
- その意味でもTypeScriptは優秀
- TypeScript使ってclassの糖衣構文を使っていこー
- ReactでスマホのSPAとかまで行きたいところ(願望)
- 旧石器時代のおじさんなのでjQueryほしいと思って入れたけど結構手こずった(文法理解していない)

## 情報が錯綜している
- gulpで色々頑張ろうとして迷った
- ちょっと前のRubyと同じでGoogle検索半年以内で
- webpackで！
- vscodeでブレークポイントとか夢見てた(できるのかもしれないけど)
- chromeでブレークポイントできるから良しとする
- Expressではvscodeでブレークポイントできるらしいで
- tsだけならvscodeで案外かんたんにいけるらしいけど
- vscodeでgitとかめんどくさい。だまってターミナルでgit

## とりあえずコマンドメモ
```bash
npm run webpack -- --watch
```
と
```
Browser Sync
```
(vscodeの拡張入れる、relative path=build)  
※windowsではvscodeからの起動でlivereload効かない。  
＝＞cmdから起動する(下記コマンド)
```cmd
npm install -g browser-sync
cd build
browser-sync start --server --files "*.html,css/*.css,js/*.js,img/*"
```
Macでも上記コマンドのほうが筋が良いのかもしれない。

## コマンドとかはよくわからんのでまとめないといけない
Evernoteに記事をとりこんだのでそれ見ればよい気しかしていない。

## 雑記
VSCode素敵。Emacsがいらなくなってきている。markdownもライブプレビューできることがわかった今日

## LOG
### 2018/02/19
- 環境の理解とか
- 開発ワークフローの作成
- jQueryの読み込み
### 2018/02/20
- Windows環境での開発環境構築、ワークフローの構築
- 一つ目のURLを完了(復習必要)

## TODO
- TypeScriptの文法理解
  1. https://www.buildinsider.net/language/quicktypescript/01
  1. http://www.atmarkit.co.jp/ait/articles/1611/08/news029.html
  1. http://www.atmarkit.co.jp/ait/articles/1611/08/news029_2.html
  1. http://www.atmarkit.co.jp/ait/articles/1611/08/news029_3.html
  1. https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a
  1. https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#typescript-21
  1. http://azu.github.io/promises-book/
  1. await/async https://qiita.com/soarflat/items/1a9613e023200bbebcb3

## 所要時間
- 2018/02/19 5H
- 2018/02/20 3H