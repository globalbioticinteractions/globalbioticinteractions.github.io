---
layout: default
title: data
---

Species interaction datasets supported by GloBI can be accessed in various ways. For most, this website and its pages may be helpful to poke around the data. Other projects like [GoMexSI](http://gomexsi.tamucc.edu), [Encyclopedia of Life](http://eol.org), and [Ecosystem Explorer](http://danielabar.github.io/globi-proto) present GloBI data in a human readable format. 

Exploratory, interactive queries can be executed through [SPARQL](https://lod.globalbioticinteractions.org/globi/sparql?query=SELECT+*+WHERE+%7B%3FX+%3FP+%3FY%7D+LIMIT+10&output=json&stylesheet=%2Fxml-to-html.xsl&force-accept=text%2Fplain) and [Cypher](http://tinyurl.com/whatthingsdohumanseat) (see more [examples](https://github.com/jhpoelen/eol-globi-data/wiki/Cypher)) endpoints or by using the REST-y [GloBI Web API](https://github.com/jhpoelen/eol-globi-data/wiki/API). For those that use [R](http://r-project.org), [rglobi](http://cran.r-project.org/package=rglobi) is available to explore interaction data. [rglobi](http://cran.r-project.org/package=rglobi) can also be used to execute Cypher queries. 

GloBI's aggregated interaction data publications/archives include:

<ul>
<li>gzipped tab-separated values (tsv) file (<a href="https://depot.globalbioticinteractions.org/snapshot/target/data/tsv/interactions.tsv.gz">download</a>) </li>
<li>gzipped comma-separated values (csv) file (<a href="https://depot.globalbioticinteractions.org/snapshot/target/data/csv/interactions.csv.gz">download</a>) </li>
<li>darwin core-ish archive (<a href="https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core.zip">download</a>) </li>
<li>darwin core-ish archive aggregated by study (<a href="https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core-aggregated.zip">download</a>) </li>
<li>rdf/quads archive (<a href="https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-nq.tar.gz">download</a>)</li>
<li>neo4j v1.9.9 database (<a href="https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-neo4j-graph-db.zip">download</a>)</li>
</ul>

In case the provided methods to access species interactions data do not quite suit your needs, please [open an issue](https://github.com/jhpoelen/eol-globi-data/issues/new) or contact the author(s) of [doi:10.1016/j.ecoinf.2014.08.005](http://dx.doi.org/10.1016/j.ecoinf.2014.08.005).  

For more information, please visit [Accessing Species Interaction Data](https://github.com/jhpoelen/eol-globi-data/wiki#accessing-species-interaction-data) wiki page.
