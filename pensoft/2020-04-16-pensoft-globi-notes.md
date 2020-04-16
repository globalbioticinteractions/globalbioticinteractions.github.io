---
status: unlisted
---


Pensoft - GloBI meeting  - exploring a bidirectional exchange of species interactions data 

## Context
CETAF - biodiversity-related knowledge hub on COVID-19
https://docs.google.com/document/d/1qizBMYK3xjyQ2zDsQyXn3AN0cqpTYPxSdkefkJNYWFw/edit?ts=5e95cba8#heading=h.jia835vae59i

## Location / time
April 16 2020 16:00 CET at https://app.gotomeeting.com/XXX

## Attendees
 * Jorrit (GloBI)
* Mariya Dimitrova (Pensoft)
* Lyubo Penev (Pensoft)

## Agenda

0. propose agenda
1. introductions
2. ....


## Action Items

 * Mariya/Luybo - provide examples on integration methods in https://github.com/globalbioticinteractions/globalbioticinteractions/issues/480 https://github.com/globalbioticinteractions/globalbioticinteractions/issues/481 https://github.com/globalbioticinteractions/globalbioticinteractions/issues/483

 * Jorrit - get GloBI sparql endpoint back up / see https://github.com/globalbioticinteractions/globalbioticinteractions/issues/482 .

 * all - report notes to the COVID-19 group

## Notes

Lyubo - We are exploring ways to annotate publications (Pensoft pubs / treatments) in freetext. Maria is planning to work on her PhD.  We will soon have more than 200 000 RDF-ized treatments from Plazi inside OpenBiodiv that can also be a source of knowledge.  We use pensoft annotator  tool to annotate text with various ontologies (1 or multiple). We can run the annotator against any ontology and this could help to identify possible biotic interactions (after curation). 

Jorrit - The Pensoft annotator tool is similar to Biodiversity Observations Miner:

Muñoz, G., Kissling, W.D. & van Loon, E.E., 2019. Biodiversity Observations Miner: A web application to unlock primary biodiversity data from published literature. Biodiversity Data Journal. Available at: https://doi.org/10.3897/bdj.7.e28737.
A similar approach is taken by Ann Thessen, around 2013.  https://github.com/EOL/pseudonitzchia 
Extraction of species interactions from the EoL. 
GloBI has a system to support and refute species interactions, which is important because it allows disagreements -> discovery. Curation is done by deleting existing records which is a destructive way of curation. The system allows curation without deletion and the researcher decides which curation idea to trust.

Lyubo - what happens after the annotation ? How to curate the annotation ? Hesitation to allow community curation of annotations.

Jorrit  - GloBi uses DWC-A but even DWC-A have data issues/inconsistencies. It would be great to find a way to scan and index existing tables of information and expose them with GloBi.

Lyubo - today we discussed three methods for pensoft to supply to GloBI:

1. annotations, extraction from freetext
2. appendices (tables in publication text) - create a format / standardize which can then be easily extracted from pensoft xml including semantics - you can have a standard tables for various kinds of data - suggest to standardize tables to allow for more automated extraction of knowledge : tables -> xml -> rdf  
3. darwin core archive produced from the Pensoft biodiversity data journals (<--- are available through apis) https://github.com/globalbioticinteractions/globalbioticinteractions/issues/480 

We can use DWC terms for table column names. How to represent such tables in RDF? Nanopublications?

Jorrit - DWC-A is widely used. Might be good idea to index the DWC files across Pensoft publications. 

Lyubo - Need to agree on a format/way to represent such information. Which format is better for harvesting?
Need to think about a template for appendeces to make them standard across all articles. Pensoft produces DWC archives and submits them to GBIF. 

Jorrit - How to narrow the search of Pensoft articles to find ones which contain species interactions?

Lyubo -  No easy way but you can search for words like "Host" "parasite", etc. in the search bar of BDJ or through SRARQL queries in OpenBiodiv. 

Jorrit - github issues for expanded indexing of GloBI https://github.com/globalbioticinteractions/globalbioticinteractions/issues/480 (dwca)  / 

Lyubo - after publishing paper "..." / invite authors to contribute 

Jorrit - how can GloBI best index the tables extracted from the articles in Pensoft? 

Mariya - when extracting dwc terms - re: associatedTaxa / occurrenceOccurrences . export as triples.

Lyubo - is there a way to query on the use of the dwc:associatedTaxa? 

Mariya - only specific ones are 

Jorrit - dwc example: associatedTaxa -> "ex: Homo sapiens" ... really says: specimen X was extracted from a specimen that was classified as a Homo sapiens. dwc:scientificName . See example https://www.globalbioticinteractions.org/parasitetracker/#supported-terms .


Lyubo - We can look for articles in BDJ describing species interactions. They may have relevant fields in the DWC archives. 

Jorrit - Can you please add some example BDJ articles to https://github.com/globalbioticinteractions/globalbioticinteractions/issues/480 ?
DWC archive harvesting and  reading is done automatically.

Mariya  - http://graph.openbiodiv.net/sparql?name=&infer=true&sameAs=true&query=PREFIX+dwc%3A+%3Chttp%3A%2F%2Frs.tdwg.org%2Fdwc%2Fterms%2F%3E%0Aselect+%3Fentity+%3Fhabitat+where+%7B+%0A%09%3Fentity+dwc%3Ahabitat+%3Fhabitat+.%0A++filter(regex(%3Fhabitat%2C+%22on%22%2C+%22i%22+))+%0A%7D+limit+100+%0A

Jorrit - Can you please outline a method for GloBI to tranverse and extract DwC-A from relevant publications https://github.com/globalbioticinteractions/globalbioticinteractions/issues/480 ?


Jorrit - how about an action plan for the 2nd method (the table approach) - 

Lyubo - 
1. Discuss the table published in the exemplary bat paper of Patterson et al.
2. We refine the format and template of the appendices
2.5 - to create prototype for a journal <> GloBI integration based on a sample of such publication using the new template  (like doing a line check - checking the "audio")
3. We invite authors, especilaly from the COVID-19 TaF community to publish papers in the special issue
4. At some point we fix the template and make it a routine practice across all Pensoft journals 
5. We also discuss the way we convert the table into RDF in OpenBiodiv

We need to elaborate a standard format/template  as well as instructions or guidelines for authors to publish such tables. After authors have published several similar tables we can polish the template further.

Jorrit - placeholder to keep track of the pensoft table <> GloBI integration -  https://github.com/globalbioticinteractions/globalbioticinteractions/issues/481

Jorrit - suggest to review https://github.com/globalbioticinteractions/template-dataset . Model roughly: source interats with a target . Source and target can be associated with taxonomy, lifestage, occurrenceId, etc. Most terms have both ids and label (names). Ids are for machine. Name/labels are for humans. And we need both. 

Lyubo - we need two templates - specimen and taxon table

Jorrit - both specimen and taxon table can incorporate species interactions

Mariya - I am interested to look for papers that contain species interactions. Also posted a sparql related to dwc:habitat with a pattern ("in:*").  How do I contribute a single interaction to GloBI ?

Jorrit - https://globalbioticinteractions.org/contribute - one method create a github repostory using the https://github.com/globalbioticinteractions/template-dataset  and replace the sample data with the whatever you find. 

Mariya - is the https://lod.globalbioticinteractions.org offline ?

Jorrit - yes - will work in getting it back online. Meanwhile, please have a look at the exported nquads via . https://www.globalbioticinteractions.org/data . 
