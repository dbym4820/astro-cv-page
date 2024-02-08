---
title: 'HozoPHP'
description: '法造データのJSONコンバータ兼APIライブラリ'
heroImage: '/images/product-images/hobby-products/01-hozophp/hozophp.png'
productType: 'hobby'
systemUrl: 'https://dbym4820.org/hozophp/'
---

XML形式で出力される法造のデータをJSON形式に変換し，データを取得するAPIを提供している．

（法造の本家ホームページは[こちら：https://www.hozo.jp/index_jp.html](https://www.hozo.jp/index_jp.html)）

典型的には，[概念のラベルを指定してその概念データを取得](https://dbym4820.org/hozophp/?type=get-concept-from-label&concept-label=認知活動)したり，[法造内の全基本概念を取り出したり](https://dbym4820.org/hozophp/?type=get-all-concepts)する．


[ファイルをそのまま書き出す](https://dbym4820.org/hozophp/?type=xml-file)こともできる．

基本的にはComposerを経由して各自のシステムにPHPライブラリとして組み込むことを前提としている．


詳細は[Github](https://github.com/dbym4820/hozophp)を参照．