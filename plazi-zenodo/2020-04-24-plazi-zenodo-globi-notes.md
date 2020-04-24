---
status: unlisted
---

 Attendees:
 Donat (Plazi) , Marcus (Plazi Brazil), Jorrit (GloBI), Alex (Zenodo)
 
##  Date
 24 April 2020
 
## Agenda
 1. discuss how to custom meta-data for biotic interactions (e.g., virus-host, predator-prey)
 2. figure out a way to for GloBI to index Plazi/Zenodo mediated Covid-related literature
 

## Notes
 
 Jorrit - how does Plazi capture feedback from users? 
 
 Donat - after using chat/email, we switched to using   https://github.com/plazi/community/issues and e.g.,  https://github.com/plazi/community/issues/31 . Also see https://docs.google.com/document/d/1cKcQfx8X8uAXR6JF96jqZO8OCpwwkYatnxSIyVXvYbo/edit# .
 
 Jorrit - with GloBI, also issues/email are used, but also starting use "datasets with refuted claim". https://github.com/globalbioticinteractions/refuted-interaction-data . 
 
 Donat - we work with Zenodo to add a subtype "taxonomic treatment" with custom meta data.
 
Marcus - going through all reference to that describe virus-host relationship manually. Over 120 references already. Interested in specific virus-host claims. We'd like to find papers by virus-host relationship or by the name of the virus itself. Sometimes we have various names (e.g., common name, scientific name): possible have many names for a single describe virus. We are continuous. 

Jorrit - https://www.globalbioticinteractions.org/status - https://github.com/globalbioticinteractions/light2019 is an example of a small project using google sheets to transcribe interactions from literature . The data is hosted at https://docs.google.com/spreadsheets/u/0/d/1FoGhyDoPlPa7FHyUZO8VEvLdLkoJB84H2f7sgXPFDxY . 
 
 Plazi is indexing virus publications for host virus relationships: https://docs.google.com/spreadsheets/d/1Rq57pmrA3V3k_PrKWGG0Y65-ZN9TRR497lmUu9wx0Cc/edit#gid=0
 that eventuelly will be the base for metadata for the deposits of the articles in BLR
 
 Jorrit is harvesting another dataset on bird diets: https://github.com/hurlbertlab/dietdatabase continous data checks are made via https://travis-ci.org/hurlbertlab/dietdatabase . 
 
 SIB is constructing a CovidVoca to find and mine publications related to COVID https://docs.google.com/spreadsheets/d/1uRtGqYMC_mb1Uj8CRd0g97yHybj1NsmjT0_AH_NYhR8/edit#gid=1967553474Ti
 This will increasingly be the bases for publication Marcus is curating
 
 Marcus - if you look at current spreadsheet, you'll find placeholders for identifiers . The current transcription to build a Zotero literature. This in turn will help to populate the Zenodo placeholder annotations for the actual. Easy solution to get started. 
 
 Donat - we need to know which terms to use to represent biotic interactions.  https://docs.google.com/spreadsheets/d/1uRtGqYMC_mb1Uj8CRd0g97yHybj1NsmjT0_AH_NYhR8/edit#gid=1967553474
 
 what ontology to use for HostOf RO
 
Alex - many Zenodo can have hundreds of custom annotations (key-value pairs). 
 
 Jorrit - we are proposing to use hexastore like approach to encode interaction triples into the key-value pairs stored in Zenodo publication metadata. 
 
 Alex - repeating the key-value pairs when many interactions 
 
Marcus -  use sandbox: use one simple case, one challenging case
 
 Donat - some of the publication might already on Zenodo
 
 Marcus - I can see that we use the spreadsheet to help the manual extraction, and I can see how GloBI indexing would be easier if using the same terms.  I am ok to change the spreadsheet to make it consistent with the terms discussed in design document https://docs.google.com/document/d/1cKcQfx8X8uAXR6JF96jqZO8OCpwwkYatnxSIyVXvYbo/edit#
 
 Link to Plazi Initial virus-host Spreadsheet: https://docs.google.com/spreadsheets/d/1Rq57pmrA3V3k_PrKWGG0Y65-ZN9TRR497lmUu9wx0Cc/edit?usp=sharing
 
Jorrit - using Zotera as a way to managed annotated reference might be very interseting to others, and I am curous to investigate a integration of GloBI with Zotero directly. 

Markus - we chose to use Zotero to help others to contribute into the reference library. A collaborative environment. 

Jorrit - so far I heard three integration points: via google sheets, via Zotero, and via Zenodo. 

Donat - what is the source of truth?

Markus - source of truth: google sheets. we use Zotero to curate and allow others to contribute and keep associate pdfs.  If others contribute to Zotero, we'd update the google sheets to include the extacted associations. Only 1 paper was contributed so far.

Donat - in the context of the task force - we can encourage other to contribute to the Zotero. Data aqcuisition will be sped up by bioinformatics / biomedical community . Nate's rapid proposal will also use this workflow.

Jorrit - I suggest create a page similar to  https://www.globalbioticinteractions.org/pensoft/  to document and keep track of the three plazi-zenodo integration: 1. google sheets 2. zotero 3. zenodo .

Markus - we have to check whether we can export Zotero and connect literature list. 

Donat - for Alex - can we use the meta data usable in treatment also?



Alex: we can add these custom meta data to treatments subtype . 

Donat - to Jorrit can we use other interaction types. such as eats, 

Jorrit- For example of other RO term https://github.com/globalbioticinteractions/nomer/blob/master/nomer/src/test/resources/org/globalbioticinteractions/nomer/match/ro.tsv 

http://purl.obolibrary.org/obo/RO_0002444              parasite of

http://purl.obolibrary.org/obo/RO_0002470              eats
http://purl.obolibrary.org/obo/RO_0002471              is eaten by
http://purl.obolibrary.org/obo/RO_0002453              host of
http://purl.obolibrary.org/obo/RO_0002454              has host

Jorrit - I can prepare a list of commonly used RO terms for Alex. 

Donat - what format would you like the terms in? 

 
 Jorrit -  I created three issues to keep track of the discussed integration points https://github.com/globalbioticinteractions/globalbioticinteractions/issues/487 https://github.com/globalbioticinteractions/globalbioticinteractions/issues/488 https://github.com/globalbioticinteractions/globalbioticinteractions/issues/490 . And one to create an integration status page https://github.com/globalbioticinteractions/globalbioticinteractions/issues/489 .
 
  call ended: 1:42h
  thanks to all that attended this very inspiring, productive meeting
  
 
 
