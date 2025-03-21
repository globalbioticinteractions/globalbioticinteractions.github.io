---
layout: default
title: data
permalink: data
---

**Data indexed by GloBI is generously provided by researchers and collections openly sharing their datasets. When using this data, please make sure to attribute the original data contributors, including citing the specific datasets in derivative work.** Each record indexed by GloBI contains a reference and dataset citation. Also, please consider to [contribute](./contribute) to improve access to existing species interaction data.

Species interaction datasets indexed by GloBI can be accessed in various ways. For most, this website and its pages may be helpful to poke around the data. Other projects like [Encyclopedia of Life](http://eol.org), and [Ecosystem Explorer](http://danielabar.github.io/globi-proto) present GloBI data in a human readable format. 


Exploratory, interactive queries can be executed through GloBI [Search](/index.html)/[Browse](/browse) pages, or by using the REST-y [GloBI Web API](https://github.com/globalbioticinteractions/globalbioticinteractions/wiki/API). For those that use [R](http://r-project.org), [rglobi](http://cran.r-project.org/package=rglobi) is available to explore interaction data.

For research or other data intensive project, please use GloBI's stable versioned integrated data published via [doi:10.5281/zenodo.3950589](https://doi.org/10.5281/zenodo.3950589) or, perhaps even better, consider using the original underlying datasets. Please see the [process](/process) page to better understand how GloBI integrates data so that you can make an informed decision on what data to use for your studies. These data products also include a neo4j archive as well as a rdf/nquads if you'd like to load GloBI data into your own graph/triple store. 

Other alternatives to independently discover the indexed GloBI interaction data include using small, but mighty, database technologies like [DuckDB](#duckdb) and [SQLite](#sqlite). You'd be surprised how much you can do on your own laptop, especially with [DuckDB](#duckdb).

If you feel adventurous and would like to have the most recent data, you can use provided instable snapshots.  

## Data Schema and Definitions
You can find information related to the schema and definitions of field names for both the API and downloadable products. The definitions are in various formats including [Java source code](https://github.com/globalbioticinteractions/globalbioticinteractions/blob/5ed1ac15ba3b6b58d8da00aca97ac00459715753/eol-globi-rest/src/main/java/org/eol/globi/server/util/ResultField.java#L129-L128), [JSON](https://api.globalbioticinteractions.org/interactionFields?type=json) and [CSV](https://api.globalbioticinteractions.org/interactionFields?type=csv). The documentation may be incomplete or outdated so we welcome questions and comments via [opening an issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new?title=globi%20data%20definitions&body=Hi!%20I%20was%20just%20looking%20at%20your%20data%20definitions%20and%20...).


## Interaction Data Indexes

Table below is available as tab-separated values table via [data.tsv](data.tsv).

 {% assign products = site.data.data | sort: "id" -%}
 data | description
 --- | ---
{% for product in products -%}
{% assign stable = product.url_stable | strip -%}
{% if stable and stable.size == 0 -%}
[{{ product.name }}]({{ product.url_snapshot }}) <br/> ~~stable~~ / [snapshot]({{ product.url_snapshot }}) | {{ product.description }}
{% else -%}
[{{ product.name }}]({{ product.url_stable }}) <br/> [stable]({{ product.url_stable }}) / [snapshot]({{ product.url_snapshot }}) | {{ product.description }}
{% endif -%}
{% endfor -%} 
 <span id="sqlite"></span>[SQLite](https://sqlite.org), the most used database engine in the world. | create a sqlite3 database file ```interactions.sqlite``` using:<br/> ```curl -L https://zenodo.org/record/14640564/files/interactions.tsv.gz | gunzip | sqlite3 interactions.sqlite ".mode tabs" ".import /dev/stdin interactions"``` . <br/>If you'd like to reduce your database size, you can drop columns before importing them using powertools like [```cut```](https://en.wikipedia.org/wiki/Cut_(Unix)) or [```mlr/miller```](https://github.com/johnkerl/miller). See also [importing csv files](https://sqlite.org/cli.html#importing_csv_files).
 <span id="duckdb"></span>[DuckDB](https://duckdb.org) is a high-performance analytical database system. | Create a DuckDB database file ```interactions.duckdb``` using:<br/> ```curl -L https://zenodo.org/record/14640564/files/interactions.tsv.gz | gunzip | duckdb interactions.duckdb -c "CREATE TABLE interactions AS SELECT * FROM read_csv('/dev/stdin');"```. 

If you'd like to better understand how the above integrated data products came about, please visit the [Data Integration Process](/process) page.  Also, see the [Accessing Species Interaction Data](https://github.com/globalbioticinteractions/globalbioticinteractions/wiki#accessing-species-interaction-data) wiki page for additional information about data access methods.

In case the provided methods to access species interactions data do not quite suit your needs, please [open an issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new) or contact the author(s) of [doi:10.1016/j.ecoinf.2014.08.005](http://dx.doi.org/10.1016/j.ecoinf.2014.08.005).  

