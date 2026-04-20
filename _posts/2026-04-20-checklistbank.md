---
layout: post
title: Review of Species Interactions Available Through ChecklistBank Datasets
author: Jorrit H. Poelen
date: 2026-04-20
excerpt: "ChecklistBank offers a way to capture species interaction claims via their Catalogue of Life Data Package format. GloBI now supports indexing Catalogue of Life datasets containing descriptions on how taxa interact with each other. An example of a moth parasite association from the Afromoths project is shown."
status: unlisted
---

⚠️ draft ⚠️ work in progress ⚠️

[![CC0](/assets/cc-zero.svg)](https://creativecommons.org/public-domain/cc0/)

On Wed 22 October 2025, [Rod Page](https://orcid.org/0000-0002-7101-9767) gave a talk [```[1]```](#1) mentioning the "Afromoths" project by De Prins & De Prins [```[2]```](#2) as an example. Afromoths is said to cover "all relevant information on every Afrotropical moth species" of Sub-Saharan Africa and includes descriptions of associated (plant) hosts and  parasites [```[3]```](#3). 

Facilitated by the Belgian Biodiversity Platform, Belspo, the Afromoth data is currently available through ChecklistBank [https://www.checklistbank.org/dataset/2017/](https://www.checklistbank.org/dataset/2017/) in the [Catalogue of Life Data Package](https://github.com/CatalogueOfLife/coldp) format ([```[4]```]](#4), [https://github.com/CatalogueOfLife/coldp](https://github.com/CatalogueOfLife/coldp)). This format, developed by [Markus Döring](https://orcid.org/0000-0001-7757-1889) and colleagues, includes explicit support for species interactions, similar to how Darwin Core supports species interactions via their Resource Relationships Extension. 

Here's an example of the first record in a 2026 copy of their ColDP archive with sha256 and md5 fingerprints [```[5]```](#5) ```hash://sha256/dd778e9038f87067815f9c7afdec1286db2e4cc08a298cbab27fe23dba2e1b44``` and ```hash://md5/7e21ac93fb0e5e786f1254d6bd0a2341`` respectively: 

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

After extending Elton's support to include Catalogue of Life Data Package, you can now access the record without having to join this records with their taxonomic and reference tables via an interpreted interaction record obtained via a published GloBI data review resource [```indexed-interactions.tsv.gz```(https://zenodo.org/records/19389793/files/indexed-interactions.tsv.gz) [```[3]```](#3):

```
preston cat --remote https://zenodo.org hash://md5/0c2373f08dc68ec2a44d18edb45d7139 \
 | gunzip \
 | mlr --itsvlite --oxtab filter '$sourceTaxonId = "S100010010" && $referenceId = "6968"
```

to produce:

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

## Discovering Interactions in ChecklistBank Datasets

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

This suggests that a little over 10 datasets in ChecklistBank currently describe at least one species interaction claim. As expected, the Afromoth dataset (i.e., [```urn:lsid:checklistbank.org:dataset:2017```](https://checklistbank.org/dataset/2017)) is included in this list. Other examples include the Universal Chalcidoidea Database (i.e., [```urn:lsid:checklistbank.org:dataset:124661```](https://checklistbank.org/dataset/124661)) and the Catalogue of the Pterophoroidea of the World (i.e., [```urn:lsid:checklistbank.org:dataset:1199```](https://checklistbank.org/dataset/1199)). 


## Discussion

Biodiversity data platforms such as ChecklistBank offer the ability to describe species interaction claims. And, as of early 2026, GloBI helps discover these datasets via their search indexes, reviews and data products. This is yet another example how existing datasets in data infrastructures can be reused and integrated via review and data services associated with Global Biotic Interactions. With this, hopefully, these datasets can be more easily found just like their existing data cousins in the many other available data formats (e.g., [DwC Associated Taxa](https://dwc.tdwg.org/list/#dwc_associatedTaxa), [DwC Assocated Occurrences](https://dwc.tdwg.org/list/#dwc_associatedOccurrences), [DwC Resource Relations](https://www.globalbioticinteractions.org/2023/11/03/dwca-resource-relations/), or whatever other [models happen to be in fashion](https://www.globalbioticinteractions.org/2018/08/16/models-in-fashion/)).  

## References 

<a name="1"></a>[1] Page, R.D.M. (2025). Using links from wikis to help discover content in the Biodiversity Heritage Library (BHL) Wikimedia and Biodiversity Data A Mutualistic Relationship in the Open Knowledge Ecosystem. Presented at Living Data/ Datos Vivos 2025 in Bogota Colombia on 2025-10-22. [https://livingdata2025.com/program.html?abstract=7010913](https://livingdata2025.com/program.html?abstract=7010913) [https://youtu.be/wXaHJ85g88A?t=5814](https://youtu.be/wXaHJ85g88A?t=5814) .

<a name="2"></a>[2] De Prins J., & De Prins W. (2006, October). Afromoths, online database of Afrotropical moth species (Lepidoptera). [https://checklistbank.org/dataset/2017](https://checklistbank.org/dataset/2017) [https://doi.org/10.48580/d4fl.v124](https://doi.org/10.48580/d4fl.v124) [https://www.afromoths.net/](https://www.afromoths.net). Formerly published as a DwC archive through GBIF [https://ipt.biodiversity.be/archive.do?r=afromoths](https://ipt.biodiversity.be/archive.do?r=afromoths) [https://www.gbif.org/dataset/65c9103f-2fbf-414b-9b0b-e47ca96c5df2](https://www.gbif.org/dataset/65c9103f-2fbf-414b-9b0b-e47ca96c5df2) and [https://doi.org/10.15468/s1kwuw](https://doi.org/10.15468/s1kwuw) .

<a name="3"></a>[3] Elton, Nomer, & Preston. (2026). Versioned Archive and Review of Biotic Interactions and Taxon Names Found within urn:lsid:checklistbank.org:dataset:2017 hash://md5/a9aaa7113716ab2f87ede6f6b70297c8. Zenodo. [https://doi.org/10.5281/zenodo.19389793](https://doi.org/10.5281/zenodo.19389793).

<a name="4"></a>[4] Döring, M., & Ower, G. (2019). The Catalogue of Life Data Package - A new format for exchanging nomenclatural and taxonomic information. Biodiversity Information Science and Standards, 3, e38771. [https://doi.org/10.3897/biss.3.38771](https://doi.org/10.3897/biss.3.38771).

<a name="5"></a>[5] Elliott M.J., Poelen, J.H. & Fortes, J.A.B. (2023) Signing data citations enables data verification and citation persistence. *Sci Data*. https://doi.org/10.1038/s41597-023-02230-y [hash://sha256/f849c870565f608899f183ca261365dce9c9f1c5441b1c779e0db49df9c2a19d](https://linker.bio/hash://sha256/f849c870565f608899f183ca261365dce9c9f1c5441b1c779e0db49df9c2a19d) 
