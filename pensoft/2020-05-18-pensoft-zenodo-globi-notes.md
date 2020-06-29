---
status: unlisted
---


Globi Pensoft Plazi technology brainstorming @ Mon May 18, 2020 7am - 8am (PDT)

See also https://docs.google.com/document/d/1EPZRD-oCR0kWa_9b-KcSTlQ4uYerYg0iO4_xxrTX9JE .

## Meeting Agenda

Add more detail to existing (some active!) data integration profiles as outlined on pages https://www.globalbioticinteractions.org/plazi-zenodo/ and https://www.globalbioticinteractions.org/pensoft

## Attendees:

Jorrit Poelen (GloBI)
Teodor Georgiev (Pensoft)
Guido Sautter (Pensoft)
Lyubomir Penev (Pensoft)
Mariya Dimitrova (Pensoft)
Georgi Zhelezov (Pensoft)
Donat Agosti (Plazi)

### Pensoft integration profiles:
openbiodiv - Through OpenBiodiv SPARQL endpoint (e.g. querying dwc:habitats to discover possible interactions) https://github.com/globalbioticinteractions/globalbioticinteractions/issues/483
Update: to be replaced with linked data fragments 

arpha-table - Indexing of tables from articles having dwc archives:
https://github.com/globalbioticinteractions/globalbioticinteractions/issues/481

arpha-dwc - Indexing of dwc archives:
https://github.com/globalbioticinteractions/globalbioticinteractions/issues/480

### Plazi integration profiles:
google-sheets - Manual extraction of interactions
https://github.com/globalbioticinteractions/globalbioticinteractions/issues/490

zotero - 
https://github.com/globalbioticinteractions/globalbioticinteractions/issues/487

zenodo - https://github.com/globalbioticinteractions/globalbioticinteractions/issues/488


## Meeting notes

Jorrit - How to link to DwC-A from Pensoft IPT to the publication?
In the (EML) XML there should be the document UUID (doc.id) of the publication

Mariya - discussing indexing tables from articles, including manual mapping schema’s . The manual mapping is ok, but the new linked data tables would be easier to index.

Mariya - suggests to use rdf instead of indexing tables, but the “old” tables are still around, so manual work is still needed for authors that do not use the (new) linked data tables. 

Jorrit - How to find interesting tables in Pensoft’s articles? (interesting = containing biotic interactions.

Guido -Plazi’s processing of Pensoft articles can help to identify articles which contain tables.  Plazi has 17,164 tables see eg http://tb.plazi.org/GgServer/dioStats/stats?outputFields=doc.articleUuid+cont.tabCount&groupingFields=doc.articleUuid+cont.tabCount&limit=100&FP-cont.tabCount=1-&format=HTML  whereas UUID is the journal article. The question is though to Guido how to get access to them

Here are the tables in Pensoft journals that are processed by Plazi

Overview of Pensoft articles with tables: https://tb.plazi.org/GgServer/dioStats/stats?outputFields=doc.articleUuid+doc.name+doc.doi+doc.gbifId+doc.uploadUser+doc.uploadDate+doc.updateUser+doc.updateDate+cont.pageCount+cont.tabCount&groupingFields=doc.articleUuid+doc.name+doc.doi+doc.gbifId+doc.uploadUser+doc.uploadDate+doc.updateUser+doc.updateDate+cont.pageCount+cont.tabCount&orderingFields=cont.tabCount&FP-doc.uploadUser=pensoft&FP-cont.tabCount=1-&format=HTML

Guido: resolve the DOI and use xpath to get to the table 
Extracting the tables along with the captions is something Plazi wants to do

Donat - can start working on that in the fall/spring; can assign rows with DwC value

Mariya - We extract tables from the XMLs and their captions as well. We can flag potentially interesting tables by searching for keywords. 
Jorrit - the idea could work 

Lyubomir - The key thing is to notify GLOBI whenever Pensoft publishes a Linked Data Table. (e.g. through RSS). Making the workflow work for semantic tables is the direction Pensoft would take instead of concentrating on the old ones (published tables).

Donat - not many tables include biotic interactions though

Jorrit - find a fast-track workflow to pursue (e.g. Linked Data Table)
Lyubo - could run a filter over Pensoft articles to discover biotic interactions through the mentioning of OBO RO terms. Same can be done for full text searches in the XML versions of the publications.


Mariya - we can try to use openbiodiv to preselect article sections that are tables, and run those through the annotator. 

Jorrit - I’d very much like to see some worked out examples that helps me to manually find the tables in publications. Then, I can automate the “integration profile” and include it in the regular GloBI indexing. 

Mariya - This is a great use case for the annotator. 

Guido - Indexing tables (+ precision tests) can be a good research material 


Mariya - Made some progress with Linked Data Fragments : 
Screenshot: https://user-images.githubusercontent.com/43512677/82215231-bea8f080-991f-11ea-8f24-8f4b3af6466b.png

https://github.com/globalbioticinteractions/globalbioticinteractions/issues/483#issuecomment-630165314

Jorrit - How do you index all of OpenBiodiv in an efficient way? Linked Data Fragments could be a good way to do it. 
The client decomposes a complicated query into triple patterns and is a way to optimise performance. 

Mariya - Pensoft aims to improve ways to publish linked data tables and expose them through RDF. And, we can also think of better ways to expose “old” or “existing” tables by filtering tables captions and content via the XML. 
Semantic publishing of Linked Data Tables -> RDF
Indexing old tables 

Guido - XHTML as export of the tables: Did Pensoft do some experiments with this?

Guido - Correctly formatted tables published by Pensoft can be harvested by Plazi and put in Zenodo but generally speaking indexing tables is a source of many errors

Donat: how do you cite the tables? Add them to BLR and get a DOI or keep the one from Pensoft as being done in articles and figures. Create the respective metadata, may be create a data subtype “table”. The real value of semantic tables is that you can create a DWC archive that could be attached as an extra file, simiilary to what we now can do with taxonomic treatments.

Donat: The question is as well who will be the primary user of the table: a human or machine. If machine, we can just point to the last most curated file.



Lyubo:

Guido - tables are subject to correction and they can’t be QC in an automated way. Either 1) make users QC tables 2) put in separate repository where it is QCd


Jorrit - We can have another conversation again once when GLOBI starts indexing a lot of these tables and observing changes to the tables.

Guido - Primary files attached to deposition cannot be modified in Zenodo => Zenodo is not my preferred place for storing tables at this point.

Teodor - Why do we even want to upload the tables to Zenodo?

Donat - A lot of important data is in tables

Lyubo - We do this for supplementary files, images, etc. Tables are next.

Mariya - in the next month, I can work on: 1. Old tables and 2. Openbiodiv as Linked Data Fragments and 3. Annotator-related progress (workflow to process tables row by row)



Plazi

Jorrit - How about annotation of interactions in zenodo?
Donat - we find publications which include biotic interactions, then create metadata fields to flag them. In the long term it would be a good idea to convince publishers to include this type of metadata in their publishing process/

Jorrit - Zenodo uses key-value pairs; with a trick you can use that to create triples 


https://www.zotero.org/groups/2470546/plazi_coronavirus_virus-hosts_library/library

https://docs.google.com/spreadsheets/d/1Rq57pmrA3V3k_PrKWGG0Y65-ZN9TRR497lmUu9wx0Cc/edit#gid=0

Key - value 

HostOf (verb) - “Homo sapiens:some tick” (subj:obj)
Homo sapiens (subj) - ‘hostOf:some tick” (verb:obj)

http://purl.obolibrary.org/obo/RO_0002455 (verb) - “Apis:Plantae” (subj/obj)
pollinates (verb) - “Apis:Plantae” (subj/obj)
pollinates (verb) - “NCBI_123:NCBI_3245” (subj/obj)


?q=hostOf

Lyubo - It’s a good idea to create nanopublications server. e.g. Biotic information, habitat preferences, taxonomic relations 
Guido - Agree.

Jorrit - GloBI has preliminary support for nanopublication .  https://arxiv.org/abs/1809.06532 . 

Lyubo - When we modelled some types of nanopublication a couple of years ago we got stuck at:  Anyone can post nanopublications but who will review them? Now we cn base this metaservices only for published information on the top of  we all three fo

Jorrit - Review by use of nanopublications. As they are linked and shared they can be reviewed.

Jorrit - Schedule another meeting in a month or two?
Lyubo - a month

Date: 22/06/2020 
TODO for Mariya: Create Google calendar invite

Donat shares the citation count by journal in 30k processed articles:

Guido - Number of bibliography strings in reference list pointing to these journals 


Add  to ZooKeys (in the system as Zookeys

