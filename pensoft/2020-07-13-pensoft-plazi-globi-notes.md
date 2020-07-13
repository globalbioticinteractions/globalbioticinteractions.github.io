
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

### discussion
1. When to enable automated review and indexing of Pensoft interaction tables? 
2. How to support manual curation of table schemas? (GloBI has support for custom table schemas via https://w3c.github.io/csvw/syntax/ , e.g. https://github.com/globalbioticinteractions/ncbi-virus)
3. How to improve tagging of subject - verb - object of interactions in tables? Re-use inline taxon-name tag approach?
4. Decide on way to provide feedback on indexed Pensoft interaction tables. Feedback link? Email? 
5. How to properly cite a table? How to link straight into a published table? 
6. Can indexed interaction be used to generate nanopublication drafts? To be used as curation and communication. 

### action 

1. (Jorrit/Mariya) share/review the sparql queries in GloBI code (see https://github.com/pensoft/pensoft-interaction-tables/issues/3 https://github.com/pensoft/pensoft-interaction-tables/issues/6)
1. (Mariya) make github public (https://github.com/pensoft/pensoft-interaction-tables/issues/5)
1. (Jorrit, done) add globi.json and .travis.yml to github repo to enable indexing and review (https://github.com/pensoft/pensoft-interaction-tables/issues/5)
1. review the tables that were not indexed 
1. (Mariya) add annotated table captions to include taxonomic names (https://github.com/pensoft/pensoft-interaction-tables/issues/2)
1. (Jorrit) share example of how to read the review.tsv (https://github.com/pensoft/pensoft-interaction-tables/issues/7)
1. (Jorrit) share example for review by Lyubo, Mariya et al. of nanopub extracted from interaction tables using ```elton nanopubs``` (https://github.com/pensoft/pensoft-interaction-tables/issues/8)
1. (Lyubo, Mariya) to propose improvements/changes/alternate to existing ```elton nanopubs``` output  (https://github.com/pensoft/pensoft-interaction-tables/issues/8)
1. (Mariya) write blog post about progress
