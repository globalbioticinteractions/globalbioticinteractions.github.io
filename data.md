---
layout: default
title: data
permalink: data
---

**Data indexed by GloBI is generously provided by researchers and collections openly sharing their datasets. When using this data, please make sure to attribute the original data contributors, including citing the specific datasets in derivative work.** Also, please consider to [contribute](./contribute) to improve access to existing species interaction data.

Species interaction datasets supported by GloBI can be accessed in various ways. For most, this website and its pages may be helpful to poke around the data. Other projects like [GoMexSI](http://gomexsi.tamucc.edu), [Encyclopedia of Life](http://eol.org), and [Ecosystem Explorer](http://danielabar.github.io/globi-proto) present GloBI data in a human readable format. 


Exploratory, interactive queries can be executed through [SPARQL](https://lod.globalbioticinteractions.org/globi/sparql?query=SELECT+*+WHERE+%7B%3FX+%3FP+%3FY%7D+LIMIT+10&output=json&stylesheet=%2Fxml-to-html.xsl&force-accept=text%2Fplain) and [Cypher](http://tinyurl.com/whatthingsdohumanseat) (see more [examples](https://github.com/globalbioticinteractions/globalbioticinteractions/wiki/Cypher)) endpoints, GloBI [Search](/index.html)/[Browse](/browse) pages, or by using the REST-y [GloBI Web API](https://github.com/globalbioticinteractions/globalbioticinteractions/wiki/API). For those that use [R](http://r-project.org), [rglobi](http://cran.r-project.org/package=rglobi) is available to explore interaction data. [rglobi](http://cran.r-project.org/package=rglobi) can also be used to execute Cypher queries. 

For research or other data intensive project, please use GloBI's most recent aggregated interaction datasets below. 

 * [interactions.tsv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/tsv/interactions.tsv.gz) contains species interactions tabulated as pair-wise interactions in a gzipped tab-separated values format.
 * [citations.tsv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/tsv/citations.tsv.gz) contains data citations in a gzipped tab-separated values format.

 * [interactions.csv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/csv/interactions.csv.gz) contains species interactions tabulated as pair-wise interactions in a gzipped comma-separated values format. 
 * [citations.csv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/csv/citations.csv.gz) contains data citations in a in a gzipped comma-separated values format. 
 
 * [interactions.nq.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/interactions.nq.gz) contains species interactions expressed in the [resource description framework](https://www.w3.org/RDF/) in a gzipped rdf/quads format.
 
 * [taxonMap.tsv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/taxa/taxonMap.tsv.gz) describes how names in existing datasets were mapped into existing naming schemes in a gzipped tab-separated values format.
 * [taxonCache.tsv.gz](https://depot.globalbioticinteractions.org/snapshot/target/data/taxa/taxonCache.tsv.gz) contains hierarchies and identifiers associated with names from naming schemes in a gzipped tab-separated values format. 
 
 * [darwin core-ish archive](https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core.zip) contains species interactions data as a [Darwin Core Archive](http://rs.tdwg.org/dwc/) using a custom, occurrence level, association extension. 

* [darwin core-ish archive aggregated by study](https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core-aggregated.zip) contains species interactions data as a [Darwin Core Archive](http://rs.tdwg.org/dwc/) aggregated by study using a custom, occurrence level, association extension. 
 
 * [neo4j v2.3.12 graph database](https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-neo4j-graph-db.zip) contains a [neo4j](https://neo4j.org) database snapshot containing a graph representation of the species interaction data. 

If you'd like to better understand how the above integrated data products came about, please visit the [Data Integration Process](/process) page.  Also, see the [Accessing Species Interaction Data](https://github.com/globalbioticinteractions/globalbioticinteractions/wiki#accessing-species-interaction-data) wiki page for additional information about data access methods.

In case the provided methods to access species interactions data do not quite suit your needs, please [open an issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new) or contact the author(s) of [doi:10.1016/j.ecoinf.2014.08.005](http://dx.doi.org/10.1016/j.ecoinf.2014.08.005).  

