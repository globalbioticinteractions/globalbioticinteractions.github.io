---
layout: default
title: 出す
i18n-link: contribute
---
Please help translate this page by:

1. editing <a href="https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/edit/master/jp/contibute.md">jp/contribute.md</a> 
1. replace English text with Japanese
1. <a href="https://help.github.com/en/articles/creating-a-pull-request">create a pull request</a> to add your translation

If you have any questions, please <a href="https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/issues/new"> open an issue</a>.

-------

皆さまには様々な方法で,Global Biotic Interactionsの活動に関わることができます。: [Global Biotic Interactionsを利用する](#GLOBIを利用する), [議論に参加する](#議論に参加する), [データを共有する](#データを共有する), [コーディングで貢献する](#コーディングで貢献する) or [寄付をする](#寄付をする).

## GLOBIを利用する
あなたが[GloBI](./data)を利用することで,生物間相互作用のデータセットに皆がアクセスできるというGloBIのミッションを支援していることになります. 

## 議論に参加する
質問やアイデアを共有したり,[メーリングリスト](https://lists.gbif.org/mailman/listinfo/globi) または [github issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new)に参加して情報を得てください. 

## データを共有する
Global Biotic Interactionsを通じて現存する相互作用データを共有する際には様々な方法があります:

1. 写真を撮ってから,その写真を [iNaturalist.org](https://www.inaturalist.org) にアップロードしてください。その際,INaturalistのObservation Fieldsを使って相互作用している生物を同定してください。例えば、[Scott Loarie. 2013. _Haemorhous mexicanus_ eating _Heteromeles arbutifolia_. iNaturalist.org. Accessed at https://inaturalist.org/observations/432688 on 28 Aug 2014](https://www.inaturalist.org/observations/432688)を参照ください. 数少ない例外を除けば、ほとんどの研究グレードのINaturalistの相互作用データはGloBIの中に自動で取り込まれます。GloBIがインポートしているINaturalistのObservation Fieldsの一覧は,[iNaturalist to GloBI interaction map](https://github.com/globalbioticinteractions/inaturalist/blob/master/interaction_types.csv)を見てください. より具体的な説明は,[Ken's how-to-add-an-inaturalist-interaction document](https://docs.google.com/document/d/12jFMA5a6EH1tqW2DcuNV8AQj2tuzx7ZvQoXtxaObaJ0/edit)を読んでください。
1. [Dataset Management page](https://github.com/globalbioticinteractions/globalbioticinteractions/wiki/Dataset-Management)を閲覧し,発見可能なGitHub repositoryを作成ください.(または,始めるために我々のテンプレート [template dataset repository](https://github.com/globalbioticinteractions/template-dataset/generate) をご利用ください). あなたのGloBI互換のデータリポジトリは、自動的にGloBIに含まれます。そして,数日後に[ステータス・ページ](http://globalbioticinteractions.org/status)に表示されます. また, [GitHub<>Zenodo](https://guides.github.com/activities/citable-code/) integrationを利用すると,あなたのデータが引用できるようになります (詳しくは、次のステップをご覧ください). 
1. [Zenodo](https://zenodo.org) 上にあなたのデータセットを発行ください.そして、あなたの発行物を [Zenodo's Global Biotic Interaction community](https://zenodo.org/communities/globalbioticinteractions)に加えてください. 詳細は, [an example data publication](https://zenodo.org/badge/latestdoi/26293374)をお読みください.
1. [Open an issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new)の後,データ参照とともにWebアクセス可能な既存の相互作用データセットの（永続的な）URL情報を提供ください. 構造化データ形式/APIはすべて使用でき,csv/tsvファイル形式が推奨されます. 例には,公開アクセス可能なデータペーパーに対するレファレンスが含まれています (例 [Raymond et al. 2011](http://dx.doi.org/10.1890/10-1907.1),　[Ferrer-Paris et al. 2014](http://dx.doi.org/10.6084/m9.figshare.1168861)), github上にホストされたデータ (e.g. [Hurlbert 2014](https://github.com/hurlbertlab/dietdatabase/)) 一般にアクセス可能なAPIs (例 iNaturalist).  引用にはDOIsが推奨されますが,データソースを示している限りであれば実行できます.まだ,そのようなサービスを持っていないようでしたら, [figshare](http://figshare.com), [dryad](http://datadryad.org/) または [Zenodo](https://zenodo.org) というサービスを利用してみてください.
1. 種間相互作用のデータを含む論文を発行した場合には, [Poelen et al. 2014](http://dx.doi.org/10.1016/j.ecoinf.2014.08.005)を引用してください. GloBIの引用は,あなたの論文を簡単に見つけ,公開されたデータに簡単にアクセスできることに役立ちますので,ご協力ください.
1. データがまだWebでアクセスできない場合, [open an issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new) によりデータセットを記述ください。GloBIを通じでデータを利用可能とする方法についてご相談することができます.
1. オープンに公開されている食物連鎖網データセット（またはあらゆる生物間相互作用データセット）をツイートや[@GlobalBiotic](https://twitter.com/GlobalBiotic)でハッシュタグして発信ください。[GloBI](https://globalbioticinteractions.org)を通じて,それらのデータが簡単に見つけられるようになればと願っております.
毎日,自動的なデータのアップデートを実施していますが,GloBIや[rglobi](http://github.com/ropensci/rglobi)などの関連ライブラリーを通じての更新・修正には1日から2日かかるかもしれません.詳しい情報は,[Poelen et al. 2014](http://dx.doi.org/10.1016/j.ecoinf.2014.08.005)または [GloBIホームページ](http://globalbioticinteractions.org)をご覧ください.

## コーディングで貢献する

[rglobi](https://github.com/ropensci/rglobi), [elton](https://github.com/globalbioticinteractions/elton), [このWEBサイト](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io) or [データ処理ライブラリー](https://github.com/globalbioticinteractions/globalbioticinteractions)のコーディングに協力頂くことで, GloBIの改善に貢献できます.

## 寄付をする

あなたの時間、資金、サーバースペースやデータストレージを寄付頂くことで,GloBIをより有効に使ってもらうとともに,レジリエンスを高めることができます。詳しくは, [2014 GloBI paper](https://doi.org/10.1016/j.ecoinf.2014.08.005)の筆頭著者にご連絡ください.
