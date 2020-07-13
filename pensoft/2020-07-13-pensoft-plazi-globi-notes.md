

## GloBI support for Pensoft-annotated species interaction tables

### methods

1. generate article table citation using OpenBioDiv and provided article_doi 
1. parse html table content of ```table_content```
1. extract table schema from table header or, if missing, from first data row
1. duplicate value in rowspanned columns
1. duplicate rows on encountering taxa lists row column values
1. expand taxonomic names to include taxon hierarchy using OpenBioDiv
1. merge overlapping taxon hierarchy in single row (e.g., host plant family + host plant species -> host plant species)
1. species interaction assumed iff two non-overlapping taxa are found in single column (using general term "interacts with" http://purl.obolibrary.org/obo/RO_0002437)

### (preliminary) results
1. workflow produced 2378 interactions from 46 out of 233 tables (results need review, see [interactions-pensoft-tables-2020-07-12.tsv.gz](interactions-pensoft-tables-2020-07-12.tsv.gz))
1. 


### next steps/ discussion

