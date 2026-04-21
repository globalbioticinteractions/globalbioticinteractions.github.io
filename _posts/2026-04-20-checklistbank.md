---
layout: post
title: Review of Species Interactions Available Through ChecklistBank
author: Jorrit H. Poelen
date: 2026-04-20
excerpt: "ChecklistBank offers a way to capture species interaction claims via their Catalogue of Life Data Package format. GloBI now supports indexing Catalogue of Life datasets containing descriptions on how taxa interact with each other. An example of a moth parasite association from the Afromoths project is shown."
status: unlisted
---

[![CC0](/assets/cc-zero.svg)](https://creativecommons.org/public-domain/cc0/)

<div id="figure1" class="figure figure-globi right">
  <a href="https://www.afromoths.net/"><img src="/assets/afromoths-net-2026-04-20.png" alt=""/></a>
    <div class="figcaption"><em>Figure 1.</em> Screenshot of <a href="https://www.afromoths.net">Afromoths.net</a> as accessed on 2026-04-20. Afromoths "[...] provides an online database of the Afrotropical moth species (Lepidoptera), updated with the latest information obtained from 10,000+ published sources and our studies.[...]" <a href="#1">[1]</a> .</div>
</div>


On Wed 22 October 2025, [Rod Page](https://orcid.org/0000-0002-7101-9767) gave a talk [```[1]```](#1) in Bogotá, Columbia mentioning the ["Afromoths"](https://www.afromoths.net/) project by [De Prins](https://orcid.org/0000-0001-7637-5755) & [De Prins](https://orcid.org/0000-0002-4430-1425) [```[2]```](#2) as an example. Afromoths is said to cover "all relevant information on every Afrotropical moth species" of Sub-Saharan Africa and includes descriptions of associated (plant) hosts and  parasites [```[3]```](#3). 

Facilitated by the Belgian Biodiversity Platform, Belspo, the Afromoth data is currently available through [ChecklistBank](https://www.checklistbank.org/dataset/2017/) in the [Catalogue of Life Data Package (ColDP)](https://github.com/CatalogueOfLife/coldp) format ([```[4]```](#4), [https://github.com/CatalogueOfLife/coldp](https://github.com/CatalogueOfLife/coldp)). The ColDP format, developed by [Markus Döring](https://orcid.org/0000-0001-7757-1889), [Geoff Ower](https://orcid.org/0000-0002-9770-2345) and colleagues, includes explicit support for [species interactions](https://catalogueoflife.github.io/coldp/#speciesinteraction), similar to how Darwin Core supports species interactions via their [Resource Relationship Extension](https://dwc.tdwg.org/terms/#resourcerelationship). 

An example of the first record in a 2026 copy of their ColDP archive with sha256 and md5 fingerprints [```[5]```](#5) ```hash://sha256/dd778e9038f87067815f9c7afdec1286db2e4cc08a298cbab27fe23dba2e1b44``` and ```hash://md5/7e21ac93fb0e5e786f1254d6bd0a2341``` respectively, was generated using:

```
preston cat \
 --algo md5 \
 --anchor hash://md5/a9aaa7113716ab2f87ede6f6b70297c8 \
 --remote https://zenodo.org \
 'line:zip:hash://md5/7e21ac93fb0e5e786f1254d6bd0a2341!/speciesinteractions.csv!/L1,L2' \
 | mlr --icsv --oxtab cat
```

producing:

```
taxonID                    S100010010
relatedTaxonID             
relatedTaxonScientificName Mesocomys pulchriceps Cameron
type                       has parasite
referenceID                6968
remarks                    
```

This record claims some reference with id ```6968``` that a taxon with id ```S100010010``` has a parasite with a scientific name _Mesocomys pulchriceps_ Cameron . 

After extending [Elton](https://globalbioticinteractions.org/elton)'s support to include [Catalogue of Life Data Package](https://www.checklistbank.org/about/formats#catalogue-of-life-data-package-coldp), you can now access the record without having to join this records with their taxonomic and reference tables via an interpreted interaction record obtained via a published GloBI data review resource [```indexed-interactions.tsv.gz```(https://zenodo.org/records/19389793/files/indexed-interactions.tsv.gz) [```[3]```](#3):

```
preston cat --remote https://zenodo.org hash://md5/0c2373f08dc68ec2a44d18edb45d7139 \
 | gunzip \
 | mlr --itsvlite --oxtab filter '$sourceTaxonId == "S100010010" && $referenceId == "6968"'
 ```

or, by replaying the associated archived review process [```[2]```](#2) and generating interpreted interaction records from the archived ChecklistBank dataset via  

```
preston ls \
 --algo md5 \
 --anchor hash://md5/a9aaa7113716ab2f87ede6f6b70297c8 \
 --remote https://zenodo.org \
 | elton stream --algo md5 --data-dir data --prov-dir data \
 | mlr --itsvlite --oxtab filter '$sourceTaxonId == "S100010010" && $referenceId == "6968"'
```

both of which are expected to produce a result including:

```
argumentTypeId                         https://en.wiktionary.org/wiki/support
[...]                  
sourceTaxonId                          S100010010
sourceTaxonName                        Agrionympha capensis
[...]
interactionTypeId                      http://purl.obolibrary.org/obo/RO_0002445
interactionTypeName                    hasParasite
[...]
targetTaxonName                        Mesocomys pulchriceps Cameron
[...]
referenceCitation                      Prinsloo G. L. & Uys V. M. (Eds.), 2015, Insects of cultivated plants and natural pastures in Southern Africa. vol  issue  pages i–xiv, 1–785
namespace                              urn:lsid:checklistbank.org:dataset:2017
archiveURI                             https://api.checklistbank.org/dataset/2017/archive.zip
lastSeenAt                             2026-03-31T15:23:43.269Z
contentHash                            dd778e9038f87067815f9c7afdec1286db2e4cc08a298cbab27fe23dba2e1b44
eltonVersion                           0.16.10
```

## Discovery and Independent Review of ChecklistBank Associated Interaction Data

To help facilitate automated discovery of species interaction claims embedded in ChecklistBank Datasets, the Elton, a GloBI commandline tool, is now able to list them using:

```
elton ls --online --registry checklistbank 
```

On 2026-04-20, running the Elton command above produced the following list of datasets:

```
urn:lsid:checklistbank.org:dataset:1032
urn:lsid:checklistbank.org:dataset:1049
urn:lsid:checklistbank.org:dataset:1061
urn:lsid:checklistbank.org:dataset:1133
urn:lsid:checklistbank.org:dataset:1166
urn:lsid:checklistbank.org:dataset:1199
urn:lsid:checklistbank.org:dataset:2017
urn:lsid:checklistbank.org:dataset:2169
urn:lsid:checklistbank.org:dataset:2207
urn:lsid:checklistbank.org:dataset:2317
urn:lsid:checklistbank.org:dataset:2362
urn:lsid:checklistbank.org:dataset:124661
urn:lsid:checklistbank.org:dataset:265709
```

This suggests that a little over 10 datasets in ChecklistBank currently describe at least one species interaction claim. As expected, the Afromoth dataset (i.e., [```[2]```](#2), [```urn:lsid:checklistbank.org:dataset:2017```](https://checklistbank.org/dataset/2017)) is included in this list. Other examples include the Universal Chalcidoidea Database (i.e., [```[6]```](#6), [```urn:lsid:checklistbank.org:dataset:124661```](https://checklistbank.org/dataset/124661)) and the Catalogue of the Pterophoroidea of the World (i.e., [```[7]```](#7), [```urn:lsid:checklistbank.org:dataset:1199```](https://checklistbank.org/dataset/1199)). 


This list of dataset identifiers can then be used to track associated datasets, and, if desired, generate interpreted species interaction records. For instance, for the Afromoths dataset with id ```urn:lsid:checklistbank.org:dataset:2017```, the interpreted interaction data of a current dataset version in ChecklistBank can be generated via:

```
elton track 'urn:lsid:checklistbank.org:dataset:2017'
elton interactions 'urn:lsid:checklistbank.org:dataset:2017' \
 > interactions.tsv
```

which is assuming that ChecklistBank is still online, the tool ```elton``` is still available, and the Afromoths dataset is still available is the expected ColDP format. These assumptions are expected to no longer hold in the near future because websites come and go, software tool versions may no longer be available, and dataset formats change or become obsolete. 

To have a more resilient approach to capturing the tracked dataset and the interpretation process, the associated resource can be captured in a so-called "Bill of Material" which includes the digital fingerprints (or signatures) of the resources needed for ```Elton``` to interpret the dataset. This approach is used in the GloBI review process, and can be summarized as follows:

```
elton track --algo md5 --prov-mode 'urn:lsid:checklistbank.org:dataset:2017' \
 | elton tee --algo md5 \
 | preston append --algo md5 \
 | elton stream --algo md5 --data-dir data --prov-dir data \
 | head -n2
```

in which the first line tells ```elton``` to generate the Data Bill of Materials (DataBOM) to document the versioned resources used to track, and interpret, the data associated with ```urn:lsid:checklistbank.org:dataset:2017``` in rdf/nquads via the ```--prov-mode``` argument. Following, elton stores the associated resource in the ```data``` folders and the DataBOM is appended to a local Preston archive. In the second to last line (i.e., ```elton stream ...```), elton is instructed to generate interaction records associated this DataBOM. Finally, in the last line, the first two lines in the resulting interaction record table are printed, resulting, at time of writing 2026-04-21, in the following record expressed in XTAB format:

The results in the ```data/``` folder now contains all resources needed to reproduce this result, including the Data Bill of Materials outlining the process and versioned resources used. Because this DataBOM is a text file expressed in rdf/nquads, their digital fingerprint uniquely identifies the process and associated resources. Now, this DataBOM fingerprint (or signature) can be used to reproduce the process, provided that the referenced digital resource versions are available in ```data/``` folder or elsewhere.

As part of the GloBI review process, such a DataBOM fingerprint (i.e., ```hash://md5/a9aaa7113716ab2f87ede6f6b70297c8```) for the Afromoths dataset was published in [```[3]```](#3) along with their referenced versioned resource. With this, you can re-generated the interpreted interaction records by running:

```
preston ls --algo md5 --remote https://zenodo.org --anchor hash://md5/a9aaa7113716ab2f87ede6f6b70297c8 \
  | elton stream --algo md5 --data-dir data --prov-dir data --anchor hash://md5/a9aaa7113716ab2f87ede6f6b70297c8 \
  | head -n2
```

where the DataBOM fingerprint ```hash://md5/a9aaa7113716ab2f87ede6f6b70297c8``` is used to define (or anchor) the resources needed to produced the interpreted interaction data records. With this, we established a way to reproduce the process to generate interaction records without having the assume that ChecklistBank data sevices remain available and produce expected results. Instead, we rely on an archived copy (e.g., [```[3]```](#3)) of the process and the versioned resources used. And, because digital fingerprints [```[5]```](#5) are location independent and storage media agnostic, this archived copy can be stored in whatever digital storage media may be available. In this case, we used Zenodo to store a copy of the Afromoths archive.  

Additional reviews associated with the ChecklistBank datasets can be found via [GloBI's Zenodo Community](https://zenodo.org/communities/globi-review/?q=%22urn:lsid:checklistbank.org:dataset:%22) or by clicking on the ["archived review"](https://zenodo.org/communities/globi-review/?q=%22urn:lsid:checklistbank.org:dataset:2017%22) badges on [https://globalbioticinteractions.org/datasets](https://globalbioticinteractions.org/datasets) or [search results](https://www.globalbioticinteractions.org/?accordingTo=globi%3Aurn%3Alsid%3Achecklistbank.org%3Adataset%3A2017&interactionType=ecologicallyRelatedTo). 

<div id="figure2" class="figure figure-globi left">
  <a href="/?accordingTo=globi%3Aurn%3Alsid%3Achecklistbank.org%3Adataset%3A2017&interactionType=ecologicallyRelatedTo"><img src="/assets/afromoths-2026-04-20.png" alt=""/></a>
    <div class="figcaption"><em>Figure 2.</em> A search result on <a href="/?accordingTo=globi%3Aurn%3Alsid%3Achecklistbank.org%3Adataset%3A2017&interactionType=ecologicallyRelatedTo">Global Biotic Interactions</a> associated with Afromoth dataset <a href="#2">[2]</a> as seen 2026-04-20.</div>
</div>



## Discussion

Biodiversity data platforms such as ChecklistBank offer the ability to describe species interaction claims through registered datasets (e.g., [```[2]```](#2), [```[6]```](#6), [```[7]```](#7)) using the Catalogue of Life Data Package (CoLDP) format. And, as of early 2026, GloBI helps discover these datasets via their search indexes, reviews and data products. This is yet another example how existing datasets in data infrastructures can be reused and integrated via review and data services associated with Global Biotic Interactions. With this, hopefully, these datasets can be more easily found just like their existing data cousins in the many other available data formats (e.g., [DwC Associated Taxa](https://dwc.tdwg.org/list/#dwc_associatedTaxa), [DwC Assocated Occurrences](https://dwc.tdwg.org/list/#dwc_associatedOccurrences), [DwC Resource Relations](https://www.globalbioticinteractions.org/2023/11/03/dwca-resource-relations/), or whatever other [models happen to be in fashion](https://www.globalbioticinteractions.org/2018/08/16/models-in-fashion/)).

### A Note on CoLDP Schema Discovery and Dialects

[On implementing GloBI's support for extracting species interaction claims from ColDP formatted datasets](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/753), three distinct dialect were found. Because ColDP does not explicitly state the schema of the associated resources nor their location/name, elton implements ths following stategy to help interpret the available datasets:

1. query checklistbank for datasets with species interaction records
2. for each dataset, download their associated ColDP archive
3. inspect each archive and attempt to find the species interaction table by scanning the archive for variations of filenames like ```SpeciesInteractions.txt```, ```SpeciesInteractions.csv```, ```SpeciesInteractions.tsv```, ```speciesinteractions.txt```, ... 
4. inspect the header of the species interaction table found, and attempt to detect one of three dialects used: (a) the [TaxonWorks dialect](https://github.com/globalbioticinteractions/globalbioticinteractions/tree/8683c2f7a5eaafe53704bc5b917e9524a9dcff3a/eol-globi-cache/src/test/resources/org/globalbioticinteractions/dataset/coldp-non-name-usage-taxonworks) (e.g., [```[6]```](#6)) (b) the [Belgium dialect](https://github.com/globalbioticinteractions/globalbioticinteractions/tree/8683c2f7a5eaafe53704bc5b917e9524a9dcff3a/eol-globi-cache/src/test/resources/org/globalbioticinteractions/dataset/coldp) (e.g., [```[2]```](#2)) and (c) the [Hobern dialect](https://github.com/globalbioticinteractions/globalbioticinteractions/tree/8683c2f7a5eaafe53704bc5b917e9524a9dcff3a/eol-globi-cache/src/test/resources/org/globalbioticinteractions/dataset/coldp-non-name-usage-hobern) (e.g., [```[7]```](#7)). See associated [test cases](https://github.com/globalbioticinteractions/globalbioticinteractions/blob/06640481909bd7f50edb6f47a602f270719d30b0/eol-globi-cache/src/test/java/org/globalbioticinteractions/dataset/CatalogueOfLifeDataPackageUtilTest.java) and [data package examples](https://github.com/globalbioticinteractions/globalbioticinteractions/tree/8683c2f7a5eaafe53704bc5b917e9524a9dcff3a/eol-globi-cache/src/test/resources/org/globalbioticinteractions/dataset) for more information. 

Also, note that, unlike the [relationshipOfResourceID](https://dwc.tdwg.org/list/#dwc_relationshipOfResourceID) of [the DwC Resource Relationship Extension](https://dwc.tdwg.org/terms/#resourcerelationship), the species interaction table in ColDP does *not* yet appear to support identifiers for the interaction type terms used. This is why a built-in translation table was introduced to map terms like "parasite of" to their RO equivalent [http://purl.obolibrary.org/obo/RO_0002445](http://purl.obolibrary.org/obo/RO_0002445) with label ```parasiteOf``` . Perhaps, a future version of the ColDP format will introduce support for species interaction type identifiers (e.g., ```typeID```) to help more explicitly link the interaction type to their associated definition.

## References 

<a name="1"></a>[1] Page, R.D.M. (2025). Using links from wikis to help discover content in the Biodiversity Heritage Library (BHL) Wikimedia and Biodiversity Data A Mutualistic Relationship in the Open Knowledge Ecosystem. Presented at Living Data/ Datos Vivos 2025 in Bogotá, Colombia on 2025-10-22. [https://livingdata2025.com/program.html?abstract=7010913](https://livingdata2025.com/program.html?abstract=7010913) [https://youtu.be/wXaHJ85g88A?t=5814](https://youtu.be/wXaHJ85g88A?t=5814) .

<a name="2"></a>[2] De Prins J., & De Prins W. (2006, October). Afromoths, online database of Afrotropical moth species (Lepidoptera). [https://checklistbank.org/dataset/2017](https://checklistbank.org/dataset/2017) [https://doi.org/10.48580/d4fl.v124](https://doi.org/10.48580/d4fl.v124) [https://www.afromoths.net/](https://www.afromoths.net). Formerly published as a DwC archive through GBIF [https://ipt.biodiversity.be/archive.do?r=afromoths](https://ipt.biodiversity.be/archive.do?r=afromoths) [https://www.gbif.org/dataset/65c9103f-2fbf-414b-9b0b-e47ca96c5df2](https://www.gbif.org/dataset/65c9103f-2fbf-414b-9b0b-e47ca96c5df2) and [https://doi.org/10.15468/s1kwuw](https://doi.org/10.15468/s1kwuw) .

<a name="3"></a>[3] Elton, Nomer, & Preston. (2026). Versioned Archive and Review of Biotic Interactions and Taxon Names Found within urn:lsid:checklistbank.org:dataset:2017 hash://md5/a9aaa7113716ab2f87ede6f6b70297c8. *Zenodo*. [https://doi.org/10.5281/zenodo.19389793](https://doi.org/10.5281/zenodo.19389793).

<a name="4"></a>[4] Döring, M., & Ower, G. (2019). The Catalogue of Life Data Package - A new format for exchanging nomenclatural and taxonomic information. *Biodiversity Information Science and Standards*, 3, e38771. [https://doi.org/10.3897/biss.3.38771](https://doi.org/10.3897/biss.3.38771).

<a name="5"></a>[5] Elliott M.J., Poelen, J.H. & Fortes, J.A.B. (2023) Signing data citations enables data verification and citation persistence. *Sci Data*. [https://doi.org/10.1038/s41597-023-02230-y](https://doi.org/10.1038/s41597-023-02230-y) [hash://sha256/f849c870565f608899f183ca261365dce9c9f1c5441b1c779e0db49df9c2a19d](https://linker.bio/hash://sha256/f849c870565f608899f183ca261365dce9c9f1c5441b1c779e0db49df9c2a19d) 

<a name="6"></a>[6] UCD Community. (2025). Universal Chalcidoidea Database curated in TaxonWorks (Apr 2025). [https://doi.org/10.48580/d758p](https://doi.org/10.48580/d758p)

<a name="7"></a>[7] Hobern, D., & Gielis, C. (2025). Catalogue of the Pterophoroidea of the World (D. Hobern, Ed.; 1.1.25.304). Catalogue of Life, Amsterdam, Netherlands. [https://doi.org/10.48580/d3gd](https://doi.org/10.48580/d3gd).
