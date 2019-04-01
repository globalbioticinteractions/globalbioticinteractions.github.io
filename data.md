---
layout: default
title: data
---

Species interaction datasets supported by GloBI can be accessed in various ways. For most, this website and its pages may be helpful to poke around the data. Other projects like [GoMexSI](http://gomexsi.tamucc.edu), [Encyclopedia of Life](http://eol.org), and [Ecosystem Explorer](http://danielabar.github.io/globi-proto) present GloBI data in a human readable format. 

Exploratory, interactive queries can be executed through [SPARQL](https://lod.globalbioticinteractions.org/globi/sparql?query=SELECT+*+WHERE+%7B%3FX+%3FP+%3FY%7D+LIMIT+10&output=json&stylesheet=%2Fxml-to-html.xsl&force-accept=text%2Fplain) and [Cypher](http://tinyurl.com/whatthingsdohumanseat) (see more [examples](https://github.com/jhpoelen/eol-globi-data/wiki/Cypher)) endpoints or by using the REST-y [GloBI Web API](https://github.com/jhpoelen/eol-globi-data/wiki/API). For those that use [R](http://r-project.org), [rglobi](http://cran.r-project.org/package=rglobi) is available to explore interaction data. [rglobi](http://cran.r-project.org/package=rglobi) can also be used to execute Cypher queries. 

GloBI's [incomplete](./contribute) aggregated interaction dataset archives:

 * [interactions.tsv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/tsv/interactions.tsv.gz) contains species interactions tabulated as pair-wise interactions in a gzipped tab-separated values format.
 * [interactions.csv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/csv/interactions.csv.gz) contains species interactions tabulated as pair-wise interactions in a gzipped comma-separated values format. 
 * [interactions.nq.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/interactions.nq.gz) contains species interactions expressed in the [resource definition framework](https://www.w3.org/RDF/) in a gzipped rdf/quads format.
 * [taxonMap.tsv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/taxa/taxonMap.tsv.gz) describes how names in existing datasets were mapped into existing naming schemes in a gzipped tab-separated values format.
 * [taxonCache.tsv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/taxa/taxonCache.tsv.gz) contains hierarchies and identifiers associated with names from naming schemes in a gzipped tab-separated values format. 
 * [darwin core-ish archive](https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core.zip) contains species interactions data as a [Darwin Core Archive](http://rs.tdwg.org/dwc/) using a custom, occurrence level, association extension. 
 * [darwin core-ish archive aggregated by study](https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core-aggregated.zip) contains species interactions data as a [Darwin Core Archive](http://rs.tdwg.org/dwc/) aggregated by study using a custom, occurrence level, association extension. 
 * [neo4j v2.3.12 graph database](https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-neo4j-graph-db.zip) contains a [neo4j](https://neo4j.org) database snapshot containing a graph representation of the species interaction data. 

When using this data, please make sure to attribute the original data contributors.

In case the provided methods to access species interactions data do not quite suit your needs, please [open an issue](https://github.com/jhpoelen/eol-globi-data/issues/new) or contact the author(s) of [doi:10.1016/j.ecoinf.2014.08.005](http://dx.doi.org/10.1016/j.ecoinf.2014.08.005).  

For more information, please visit [Accessing Species Interaction Data](https://github.com/jhpoelen/eol-globi-data/wiki#accessing-species-interaction-data) wiki page.
