--
layout: default
title: data access
---

Species interaction datasets included in GloBI can be accessed in various ways. For most, this website and its pages may be helpful to poke around the data. Other projects like [GoMexSI](http://gomexsi.tamucc.edu), [Encyclopedia of Life](http://eol.org), and [Ecosystem Explorer](http://danielabar.github.io/globi-proto) present GloBI data in a human readable format. 

For those that use [R](http://r-project.org), [rglobi](http://cran.r-project.org/package=rglobi) is available to retrieve interaction data for further analysis in the R environment. [rglobi](http://cran.r-project.org/package=rglobi) can also be used to execute Cypher queries. 

If you would like to have it all, a [complete dump of the neo4j database](https://s3.amazonaws.com/globi/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-neo4j-graph-db.zip) is available as well as a [rdf/quads archive](https://s3.amazonaws.com/globi/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-nq.tar.gz), darwin core archives ([all](https://s3.amazonaws.com/globi/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core.tar.gz), [aggregated by study](https://s3.amazonaws.com/globi/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core-aggregated.tar.gz)) and a [single table tsv dump](https://s3.amazonaws.com/globi/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-tsv.zip). These whole data dumps should be suitable for large scale number crunching or archiving of a version of GloBI. GloBI is designed to be continously (and automatically) upgraded to include the most recent snapshot of available interaction data and associated linkages. 

Exploratory, interactive queries can be executed through [SPARQL](http://lod.globalbioticinteractions.org/globi/sparql?query=SELECT+*+WHERE+%7B%3FX+%3FP+%3FY%7D+LIMIT+10&output=json&stylesheet=%2Fxml-to-html.xsl&force-accept=text%2Fplain) and [Cypher](http://tinyurl.com/whatthingsdohumanseat) endpoints or by using the REST-y [GloBI Web API](https://github.com/jhpoelen/eol-globi-data/wiki/API).

In case the provided methods to access species interactions data do not quite suit your needs, please [open an issue](https://github.com/jhpoelen/eol-globi-data/issues/new) or contact the author(s) of [doi:10.1016/j.ecoinf.2014.08.005](http://dx.doi.org/10.1016/j.ecoinf.2014.08.005). 

For more information, please visit [Accessing Species Interaction Data](https://github.com/jhpoelen/eol-globi-data/wiki#accessing-species-interaction-data) wiki page.
