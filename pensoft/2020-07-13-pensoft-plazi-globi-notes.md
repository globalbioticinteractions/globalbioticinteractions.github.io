---
status: unlisted
---

Globi Pensoft Plazi technology brainstorming @ Monday July 13, 2020 18 EEST/17 CEST

See also https://docs.google.com/document/d/1EPZRD-oCR0kWa_9b-KcSTlQ4uYerYg0iO4_xxrTX9JE 

# Meeting Agenda

1. Follow up on the action plan from last time
1. Issues with the extraction
1. How to cite tables
1. Annotator
1. Nanopublications - https://docs.google.com/presentation/d/1udAa5_iNOVdqbqCT0XvCoaPH_1b0rNwy-Aj5Pr1E0R8/edit?usp=sharing


# Attendees:
Mariya Dimitrova

Lyubomir Penev

Georgi Zhelezov

Guido Sautter 

Jorrit Poelen

# Notes:

Jorrit presents current state of biotic interaction extraction and preliminary workflow:

## GloBI support for Pensoft-annotated species interaction tables

### methods
1. generate article table citation using OpenBioDiv and provided article_doi (e.g., [```10.3897/zookeys.306.5455```](https://doi.org/10.3897/zookeys.306.5455))
1. parse html table content of ```table_content```
1. extract table schema from table header or, if missing, from first data row
1. duplicate value in rowspanned columns 
1. duplicate rows on encountering taxa lists row column values
1. expand taxonomic names to include taxon hierarchy using OpenBioDiv
1. merge overlapping taxon hierarchy in single row (e.g., host plant family + host plant species -> host plant species)
1. species interaction assumed iff two non-overlapping taxa are found in single column (using general term "interacts with" http://purl.obolibrary.org/obo/RO_0002437)

### (preliminary) results
1. workflow produced 2378 interactions from 46 out of 233 tables (results need review, see [interactions-pensoft-tables-2020-07-12.tsv.gz](interactions-pensoft-tables-2020-07-12.tsv.gz)) provided by Mariya via https://github.com/pensoft/pensoft-interaction-tables / https://github.com/pensoft/pensoft-interaction-tables/blob/master/bi_tables_20200630.json . Also see commentable [google sheets copy](https://docs.google.com/spreadsheets/d/1cXf_8WIgQzPDB0dxfHsiNZHw8Szprq2UB12R5_Qe1mk/edit?usp=sharing).
1. workflow issued 7569 unique sparql queries to resolve article dois and taxon hierarchies
1. workflow ready to be integrated into GloBI indexing and review workflows

1. Paper recommendation: Elliott, M.J., Poelen, J.H. & Fortes, J.A.B., 2020. Toward reliable biodiversity dataset references. Ecological Informatics, 59, p.101132. Available at: http://dx.doi.org/10.1016/j.ecoinf.2020.101132.

# Discussion:
## When to enable automated review and indexing of Pensoft interaction tables?
ASAP. Mariya/Teodor will make the github repository public. See necessary steps for automatic GloBI indexing https://github.com/pensoft/pensoft-interaction-tables/issues/5
## How to support manual curation of table schemas? (GloBI has support for custom table schemas via https://w3c.github.io/csvw/syntax/ , e.g. https://github.com/globalbioticinteractions/ncbi-virus)

## How to improve tagging of subject - verb - object of interactions in tables? Re-use inline taxon-name tag approach?
    Mariya suggests POS tagging for ‘simple’ tables (no rowspans/colspans) to determine the directionality of interactions. To be tried in the next few weeks.
Decide on way to provide feedback on indexed Pensoft interaction tables. Feedback link? Email?
Can do github issues for now. We can establish nanopublication messaging service between Pensoft and GloBI. 
## How to properly cite a table? How to link straight into a published table?
Article title, authors, year. Direct link to the published table (html) can be done in the future (see https://zookeys.pensoft.net/article/3038/element/3/21// - link to table)
## Can indexed interaction be used to generate nanopublication drafts? To be used as curation and communication.
    Yes!

Mariya demonstrates the Annotator interface.

Mariya presents about nanopublications and the vision for using nanopublications for data curation, peer review and as a messaging tool https://docs.google.com/presentation/d/1udAa5_iNOVdqbqCT0XvCoaPH_1b0rNwy-Aj5Pr1E0R8/edit?usp=sharing

Mariya: The nanopublication can be used for review. But how do we limit who can write reviews ? (we want only experts)

Jorrit: We don’t have to limit but can leave it up to the client to decide who to trust (“trust is a choice for the person using it”

Lyubo: It is not enough to have the doi in the Provenance part. There should be a ‘method’ - how the nanopublication was created? - e.g. through OpenBiodiv

Jorrit: We can use nanopublications to document suspicious interactions in GloBI. 
We can use different levels of confidence when generating nanopublications (e.g. species sharing the same habitat are more likely to interact, a certain article section is more likely to contain an interaction/habitat data)

Lyubo: We should visualise the source of an assertion (e.g. the article/table it came from); perhaps through a button or link.

Mariya: We can link to the html version of a table published by Pensoft but it is complicated. To be discussed with Teodor. 

Guido: This sounds a lot like Filtered Push but can be promising.

# Action items

1. (Jorrit/Mariya) share/review the sparql queries in GloBI code (see https://github.com/pensoft/pensoft/interaction-tables/issues/3 https://github.com/pensoft/pensoft-interaction-tables/issues/6)
(Mariya) make github public (https://github.com/pensoft/pensoft-interaction-tables/issues/5)
1. (Jorrit, done) add globi.json and .travis.yml to github repo to enable indexing and review (https://github.com/pensoft/pensoft-interaction-tables/issues/5)
1. review the tables that were not indexed
1. (Mariya) add annotated table captions to include taxonomic names (https://github.com/pensoft/pensoft-interaction-tables/issues/2)
1. (Jorrit) share example of how to read the review.tsv (https://github.com/pensoft/pensoft-interaction-tables/issues/7)
1. (Jorrit) share example for review by Lyubo, Mariya et al. of nanopub extracted from interaction tables using ```elton nanopubs``` (https://github.com/pensoft/pensoft-interaction-tables/issues/8)
1. (Lyubo, Mariya) to propose improvements/changes/alternate to existing ```elton nanopubs``` output  (https://github.com/pensoft/pensoft-interaction-tables/issues/8)
1. (Mariya) write blog post about progress
1. Create next meeting for August 17th 18 PM EEST


