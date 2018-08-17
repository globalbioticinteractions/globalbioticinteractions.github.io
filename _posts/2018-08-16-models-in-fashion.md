---
layout: post
title: Models in Fashion
date: 2018-08-16
categories:
- bioinformatics
- biology
- ecology
- open data
- species interactions
tags: []
status: published
type: post
published: true
---


<div class="figure figure-globi left"><a href="https://www.inaturalist.org/observations/786129" target="_blank"><img
        src="https://static.inaturalist.org/photos/275923/medium.jpg?1363705043" alt="Desert Island"/></a>

    <div class="figcaption">
        <p>This photo of an Eastern Pondhawk (<a href="https://www.inaturalist.org/taxa/61495" target="_blank"><em>Erythemis simplicicollis</em></a>) <a href="https://www.inaturalist.org/observation_fields/3011" target="_blank">preying on</a> a Narrow-winged Damselflies (<a href="https://www.inaturalist.org/taxa/47925" target="_blank"><em>Family Coenagrionidae</em></a>) was found by GloBI using a <a href="#json">JSON</a>-based integration with <a href="https://inaturalist.org" target="_blank">iNaturalist</a>. Photo 987870 © <a href="https://www.inaturalist.org/people/greglasley" target="_blank">greglasley</a>, some rights reserved (CC BY-NC), uploaded by Greg Lasley. 
        </p>
    </div>
</div>

GloBI adapts to whatever contributors decided to express their digital data in and currently supports over 40+ flavors of species interaction data formats. This makes GloBI both fashionable and unfashionable – newer, hipper formats/models are supported as well as those that have been around for a while. Being fashionable has the advantage of appealing to the new hip kids in town. Supporting the older formats however, might actually be crucial to preserve valuable datasets from previous generations. 

In this post, I’ll give some examples of formats currently used to share species interaction datasets. To help navigate through the various approaches, examplar datasets are described that fit into the following categories: [single tabular text file](#single-tabular-text-files), [multi-tabular text files](#multi-tabular-text-files), [json](#json), [rdf/owl/xml/json-ld](#rdfowljson-ld), and [Darwin Core Archives](#darwin-core-archives). And, I'll end with sharing some [closing thoughts](#closing-thoughts).

### Single Tabular Text Files

Most datasets indexed by GloBI are expressed in tab or comma separated text files with custom schemas/headers. [CEFAS’s DAPSTOM](https://www.cefas.co.uk/cefas-data-hub/fish-stomach-records/) provides an API to download single table comma-separated-values representations of the gut contents of fishes. Rather than providing a single archive to download all stomach content, various download URLs need to be constructed to access the data. For instance, the url (truncated for layout reasons) [https://www.cefas.co.uk/umbraco/CefasPlugins/DapstomSurface/Download...](https://www.cefas.co.uk/umbraco/CefasPlugins/DapstomSurface/Download?searchType=predator&species=MAC&years=2011&years=2010&years=2006&years=2005&years=2004&years=1991&years=1987&years=1986&years=1979&years=1978&years=1977&years=1976&years=1974&years=1972&years=1965&years=1956&years=1919&years=1917&years=1907&years=1906&years=1902&years=1901&years=1899&areas=VIIIb&areas=Va&areas=VIIj&areas=VIa&areas=VIIIc&areas=XIVb&areas=VIIg&areas=VIIh&areas=VIIa&areas=IIa&areas=XIVa&areas=VIIId&areas=VIIe&areas=VIIf&areas=IVa&areas=IVc&areas=VIIIa&areas=IVb&minlength=0&maxlength=1000&nullLengths=true) produced the following csv content on 18 September 2017.  (only first 5 lines are shown):

HAUL ID | Year | Date | Sea | Ices division | Predator Latin name | Predator common name | Pooled | Mean length of predator | Prey Latin name | Prey common name | Prey group | Predator ID | Number of stomachs | Prey Length | Minimum number
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
BULLEN-1907-118 | 1907 | 01/05/1907 | Channel | VIIe | SCOMBER SCOMBRUS | (EUROPEAN) MACKEREL | y | 33.7 | ACARTIA CLAUSI | ACARTIA CLAUSI | Copepod | BULLEN-1907-118/MAC-1 | 6 | | 1
BULLEN-1906-66 | 1906 | 19/04/1906 | Channel | VIIe | SCOMBER SCOMBRUS | (EUROPEAN) MACKEREL | y | 33.7 | ACARTIA CLAUSI | ACARTIA CLAUSI | Copepod | BULLEN-1906-66/MAC-1 | 6 | | 1
BULLEN-1907-115 | 1907 | 01/05/1907 | Channel | VIIe | SCOMBER SCOMBRUS | (EUROPEAN) MACKEREL | y | 33.7 | ACARTIA CLAUSI | ACARTIA CLAUSI | Copepod | BULLEN-1907-115/MAC-1 | 6 | | 10
BULLEN-1907-127 | 1907 | 23/05/1907 | Channel | VIIe | SCOMBER SCOMBRUS | (EUROPEAN) MACKEREL | y | 33.7 | ACARTIA CLAUSI | ACARTIA CLAUSI | Copepod | BULLEN-1907-127/MAC-1 | 6 | | 2

Note that the kind of species association is defined in the name of the column headers (e.g., "Predator Latin name", "Prey Latin name"). Also note that the preferred citation of the data source is not included in the dataset itself, but in a human readable form on a web page at https://www.cefas.co.uk/cefas-data-hub/fish-stomach-records/ . This citation was copy-pasted from the website into the meta-data descriptor of the datasets, globi.json. (see https://doi.org/10.5281/zenodo.258222) . To integrate the dataset from the various DAPSTOM download URLs, a list of URLs was created along with their schema definitions using globi.json and schema.json files. This approach was repeated for other single table datasets expressed in tab-separated-values or comma-separated-values.

Also note that GloBI produces a single table interaction data archive to help make it easy for folks to get all the data for further processing. The download is available at [https://globalbioticinteractions.org/data](https://globalbioticinteractions.org/data). 

### Multi-tabular Text Files

Other datasets use multiple tabular text files to capture species interaction data. The rationale behind doing this is often to normalize the data to avoid data duplication. This technique is often used in relational databases to make avoid having to update a single data element in multiple places. Efficient usage of this normalized data format requires an additional piece of software (a relational database) to relate data elements across the various tables. The mandated joining of tables makes it hard for humans  (like data paper reviewers) to digest and validate the information. Also, large normalized datasets become hard and expensive to handle even by powerful computers due to the resource requirements associated with joining million or billions of data elements across disjoint tables.

An example of a multi-tabular dataset is the study ["Who eats whom in the Barents Sea: a food web topology from plankton to whales." by Planque et. al 2014](https://doi.org/10.1890/13-1062.1). In this study, pairwise interactions are stored in PairWiseList.txt, related references are stored in References.txt and the table relating the pairwise interactions with their references is PairWise2References.txt . Note that after first publication of Planque et. al 2014 , some data errors were detected and shared with authors on a first attempt to integrate the data into GloBI. The root cause of the data errors appeared to be broken links between reported pair wise species interactions and their references.  On receiving the feedback, the authors were careful to publish an updated dataset in which the issues were addressed. The reason the data errors were found in this peer reviewed data publication is consistent with inadequate data quality methods during the publication process.

PairWiseList.txt (first 5 lines)

PWKEY |	PREDATOR    | PREY  | CODE
-- | -- | -- | --
ACA_SPP-ACA_SPP	| ACARTIA_SPP | ACARTIA_SPP | 2
ACA_SPP-AUT_FLA	| ACARTIA_SPP | AUTOTHROPH_FLAGELLAT | 1
ACA_SPP-DIATOM | ACARTIA_SPP  | DIATOM | 1
ACA_SPP-HET_FLA | ACARTIA_SPP | HETEROTROPH_FLAGELLAT |	1

PairWiseList.txt (first 5 lines)

PWKEY | AUTHOR_YEAR
-- | --
ACA_SPP-ACA_SPP | Turner 1984
ACA_SPP-AUT_FLA | Kleppel 1993
ACA_SPP-DIATOM | Kleppel 1993
ACA_SPP-HET_FLA | Kleppel 1993

References.txt (first 5 lines):

 AUTHOR_YEAR | FULL_REFERENCE
 -- | --
Aarefjord et al. 1995 |	Aarefjord, H., Bj¿rge, AJ, Kinze, CC, and Lindstedt, I. 1995. Diet of the harbour porpoise (Phocoena phocoena) in Scandinavian waters. Report of the International Whaling Commission, special issue 16: 211Ð222.
Acu–a & Zamponi 1996 |	Acu–a, F.H. and Zamponi, M. O. 1996. Trophic ecology of the intertidal sea anemones, Phymactis clematis Dana, 1849, Aulactina marplatensis (Zamponi,1977) and A. reynaudi (Milne-Edwards,1857) (Actiniaria:Actiniidae): Relationships between sea anemones and their prey
Agersted et al. 2011 |	Agersted, M. D., Nielsen, Torkel G., Munk, P. Vismann, B., Arendt, K. E. 2011. The functional biology and trophic role of krill (Thysanoessa raschii) in a Greenlandic fjord. Marine biology. 158: 1387-1402
Agnalt 2011 |	Agnalt, A-L., Pavlov, V., J¿rstad, K. E., Farestveit, E., Sundet, J. 2011. (Book) The Snow Crab, Chionoecetes opilio (Decapoda, Majoidea, Oregoniidae) in the Barents Sea. In the Wrong Place-Alien Marine Crustaceans: Distribution, Biology and Impacts. pp. 283-200. Springer

### JSON
Javascript Object Notation (JSON) is a used by [iNaturalist API](http://api.inaturalist.org) to expose observations along with their (taxon) observation fields. Species interaction data is extracted via specific, mapped observation field types. 

Example from extracted from https://www.inaturalist.org/observation_field_values.json?type=taxon&page=1&per_page=100&quality_grade=research at 16 Aug 2018 related to https://www.inaturalist.org/observations/219043 . 

```json
{
    "id": 3169091,
    "observation_id": 219043,
    "observation_field_id": 3011,
    "value": "47925",
    "created_at": "2016-08-16T01:49:55.615Z",
    "updated_at": "2016-08-16T01:49:55.615Z",
    "user_id": 217057,
    "updater_id": 217057,
    "uuid": "c449c461-6cf3-49f7-96fc-c6e891813da1",
    "taxon": {
      "id": 47925,
      "name": "Coenagrionidae",
      "rank": "family",
      "source_identifier": null,
      "taxon_scheme_taxa": [
        {
          "id": 345162,
          "taxon_scheme_id": 23,
          "source_identifier": null,
          "taxon_scheme": {
            "id": 23,
            "title": "NatureWatch NZ"
          }
        },
        {
          "id": 492242,
          "taxon_scheme_id": 27,
          "source_identifier": "8577",
          "taxon_scheme": {
            "id": 27,
            "title": "GBIF"
          }
        }
      ]
    },
    "observation_field": {
      "id": 3011,
      "name": "Predating",
      "datatype": "taxon"
    },
    "observation": {
      "id": 219043,
      "observed_on": "2012-07-12",
      "latitude": "30.0906884449",
      "longitude": "-98.4006732702",
      "positional_accuracy": null,
      "license": "CC-BY-NC",
      "time_observed_at_utc": null,
      "coordinates_obscured": false,
      "created_at_utc": "2013-03-19T14:57:06.607Z",
      "updated_at_utc": "2017-09-25T18:16:19.289Z",
      "faves_count": 0,
      "owners_identification_from_vision": false,
      "taxon": {
        "id": 61495,
        "name": "Erythemis simplicicollis",
        "rank": "species",
        "source_identifier": "9696176",
        "source": {
          "id": 139,
          "in_text": "Bisby et al., 2012",
          "url": "http://www.catalogueoflife.org/annual-checklist/2012",
          "title": "Catalogue of Life: 2012 Annual Checklist"
        },
        "taxon_scheme_taxa": [
          {
            "id": 86938,
            "taxon_scheme_id": 1,
            "source_identifier": "165090",
            "taxon_scheme": {
              "id": 1,
              "title": "IUCN Red List of Threatened Species. Version 2012.1"
            }
          },
          {
            "id": 128393,
            "taxon_scheme_id": 13,
            "source_identifier": null,
            "taxon_scheme": {
              "id": 13,
              "title": "Odonata Central"
            }
          },
          {
            "id": 158498,
            "taxon_scheme_id": 14,
            "source_identifier": "165090",
            "taxon_scheme": {
              "id": 14,
              "title": "IUCN Red List of Threatened Species. Version 2012.2"
            }
          },
          {
            "id": 207811,
            "taxon_scheme_id": 11,
            "source_identifier": "ELEMENT_GLOBAL.2.108317",
            "taxon_scheme": {
              "id": 11,
              "title": "NatureServe Explorer: An online encyclopedia of life. Version 7.1"
            }
          },
          {
            "id": 278436,
            "taxon_scheme_id": 15,
            "source_identifier": "157289ARTROB501212",
            "taxon_scheme": {
              "id": 15,
              "title": "CONABIO"
            }
          },
          {
            "id": 417570,
            "taxon_scheme_id": 26,
            "source_identifier": "165090",
            "taxon_scheme": {
              "id": 26,
              "title": "IUCN Red List of Threatened Species. Version 2014.3"
            }
          },
          {
            "id": 473055,
            "taxon_scheme_id": 27,
            "source_identifier": "1429340",
            "taxon_scheme": {
              "id": 27,
              "title": "GBIF"
            }
          },
          {
            "id": 1027837,
            "taxon_scheme_id": 33,
            "source_identifier": null,
            "taxon_scheme": {
              "id": 33,
              "title": "World Odonata List"
            }
          }
        ]
      },
      "user": {
        "id": 9706,
        "login": "greglasley",
        "name": "Greg Lasley"
      }
    }
  }
```

Note that the JSON file is full of identifiers in nested structures. While the JSON structure does not fellow any particular standard, you can derive most of the meaning by reading the text and squinting your eyes a little. With <a href="https://travis-ci.org/globalbioticinteractions/inaturalist" target="_blank">automated integration checks</a>, GloBI is able to verify that the integration is still alive and that iNaturalist developers did not change the data format. Also, checks are in place to help pick up new observation fields so that they can be mapped to interaction terms that GloBI understands. 

[GloBI's API](https://github.com/jhpoelen/eol-globi-data/wiki/API) supports JSON to help make it easier for web developers and other tech-savvy people to integrate species interaction records into their workflows.

### RDF/Owl/JSON-LD

Data formats compatible with the Semantic Web or [Linked Data](http://linkeddata.org) are sparingly used in GloBI's infrastructure. In the section below, a single dataset and a JSON-LD prototype that provide species association data to GloBI are described. To open the door to a brave new semantic world, GloBI exports aggregated records in a [RDF quads](https://globalbioticinteractions.org/data) archive. 

The project [Semantic Prototypes in Research Ecoinformatics (SPIRE)](https://github.com/globalbioticinteractions/spire) produced a RDF-based dataset in 2006 that contains species interactions. 

Below, you'll find an owl snippet in xml extracted from [https://github.com/globalbioticinteractions/spire/raw/master/allFoodWebStudies.owl](https://github.com/globalbioticinteractions/spire/raw/master/allFoodWebStudies.owl) :

```xml
<ConfirmedFoodWebLink rdf:ID="c_6_14_6">
<predator rdf:resource="http://spire.umbc.edu/ethan/Rajiformes"/>
<predator_description rdf:datatype="http://www.w3.org/2001/XMLSchema#string"><![CDATA[stingray]]></predator_description>
<prey rdf:resource="http://spire.umbc.edu/ethan/Grapsidae"/>
<prey_description rdf:datatype="http://www.w3.org/2001/XMLSchema#string"><![CDATA[shore crabs]]></prey_description>
<observedInStudy rdf:resource="#s_6"/>
</ConfirmedFoodWebLink>
```

The snippet is give an example of how a predator-prey interaction (e.g., stingray (<em>Rajiformes</em>) preying on shore crabs (<em>Grapsidae</em>) is modeled using rdf/owl approach.

Aside from a GloBI example of species interaction expressed in JSON-LD, no other species interaction dataset is expressed in data formats related to resource definition framework (RDF). 


From https://github.com/globalbioticinteractions/jsonld-template-dataset/blob/master/globi-dataset.jsonld , the example below shows a way to express a species interaction in JSON-LD. 
  
```json
{
 "@context": "https://raw.githubusercontent.com/globalbioticinteractions/jsonld-template-dataset/master/context.jsonld",
 "datasets" : {
     "id": "https://raw.githubusercontent.com/globalbioticinteractions/jsonld-template-dataset/master/globi-dataset.jsonld",
     "type": "dataset",
     "created": "2015-03-16",
     "keyword" : ["birds", "insects"],
     "author": {
         "id": "http://orcid.org/0000-0002-6601-2165",
         "label": "Chris Mungall"
     },

     "nodes": [
         {
             "id": "http://arctos.database.museum/guid/CUMV:Bird:25225",
             "type": "OBI:0100051",
             "taxon": {
                 "id": "NCBITaxon:56350",
                 "label": "Falco sparverius"
             },
             "OBI:0001619": "1955-07-18",
             "location": {
                 "latitude": "44.378414",
                 "longitude": "-98.178441",
                 "elevation": {
                     "value": "1300",
                     "units": "foot"
                 }
             }
         },
         {
             "id": "http://arctos.database.museum/guid/CUMV:Bird:25225-UBERON_0000945-1",
             "label": "stomach contents part 1",
             "taxon": {
                 "id": "NCBITaxon:50557",
                 "label": "insects"
             }
         },
         {
             "id": "http://arctos.database.museum/guid/CUMV:Bird:25225-UBERON_0000945-2",
             "type": "OBI:0100051",
             "label": "stomach contents part 2, fledglings",
             "taxon": {
                 "id": "NCBITaxon:8782",
                 "label": "birds"
             },
             "stage": {
                 "id": "UBERON:0034919",
                 "label": "juvenile stage"
             }
         }
     ],
     "links": [
         {
             "subject": {
                "id": "http://arctos.database.museum/guid/CUMV:Bird:25225",
                "type": "OBI:0100051"
              },
             "relation": {
                "id": "RO:0002470",
                "label": "eats"
              },
             "target": {
                "id": "http://arctos.database.museum/guid/CUMV:Bird:25225-UBERON_0000945-1",
                "type": "OBI:0100051"
              }
         },
         {
             "subject": { 
                "id": "http://arctos.database.museum/guid/CUMV:Bird:25225",
                "type": "OBI:0100051"
              },
             "relation": {
                "id": "RO:0002470",
                "label": "eats"
              },
             "target": {
                "id": "http://arctos.database.museum/guid/CUMV:Bird:25225-UBERON_0000945-2",
                "type": "OBI:0100051"
              }
         }
     ]
 }
}
```

The JSON-LD prototype shown above is ingested by GloBI, but no other datasets that use JSON-LD to express species association are currently indexed. 


### Darwin Core Archives

[TDWG's Darwin Core](https://www.tdwg.org/standards/dwc/) standard has facilitated the impressive growth in digital biodiversity datasets available through infrastructures like [iDigBio](https://idigbio.org) and [GBIF](https://gbif.org). While some ways exist to capture species interaction within the Darwin Core framework, no clear community consensus exists on how to best capture species interaction records within the standard.  Even if data contributors capture association between specimen in their data archives using compliant fields like "associatedTaxa", platforms like iDigBio and GBIF do not provide a way to easily access, explore and review species interaction data. 

There are some examples of DwC archives that express association data, including GloBI’s aggregate DwC archive used by Encyclopedia of Life has a non-standard "associations" extension, Lichens of Belgium uses resourceRelationship table, Tri-Trophic Thematic Collections Network uses a non-standard "associatedTaxa" extension with terms like "aec:associatedScientificName", "aec:associatedRelationshipTerm", "aec:associatedRelationshipURI", "aec:associatedLocationOnHost","aec:associatedEmergenceVerbatimDate".

#### Darwin Core Archive – Tri-Trophic Thematic Collection Network flavor
Approach: add non-standard associatedTaxa extension to link an occurrence record to an associated taxon of a specific association type that emerged from a specific body part of the host at a given time.

First 5 lines of associatedTaxa.tsv extracted from [http://amnh.begoniasociety.org/dwc/AEC-NA_PlantBugPBI_DwC-A20160308.zip](http://amnh.begoniasociety.org/dwc/AEC-NA_PlantBugPBI_DwC-A20160308.zip):


dwc:coreid | dwc:basisOfRecord | aec:associatedOccuranceID | aec:associatedFamily | aec:associatedGenus | aec:associatedSpecificEpithet | aec:associatedScientificName | aec:associatedAuthor | aec:associatedCommonName | aec:associatedRelationshipTerm | aec:associatedRelationshipURI | aec:associatedNotes | aec:associatedDeterminedBy | aec:associatedCondition | aec:associatedLocationOnHost | aec:associatedEmergenceVerbatimDate | aec:associatedCollectionLocation | aec:isCultivar
-- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | --
urn:uuid:81e94538-d8e1-11e2-99a2-0026552be7ea_RID | LabelObservation |   | Lamiaceae |   |   | Lamiaceae |   | cultivated mint | associated with | http://purl.obolibrary.org/obo/RO_0002437 |   |   | Unknown |   |   |   | Unknown
urn:uuid:81e94696-d8e1-11e2-99a2-0026552be7ea_RID | LabelObservation |   | Asteraceae |   |   | Asteraceae |   | Canada thistle | associated with | http://purl.obolibrary.org/obo/RO_0002437 |   |   | Unknown |   |   |   | Unknown
urn:uuid:81e94740-d8e1-11e2-99a2-0026552be7ea_RID | LabelObservation |   | Apiaceae |   |   | Apiaceae |   | dill | associated with | http://purl.obolibrary.org/obo/RO_0002437 |   |   | Unknown |   |   |   | Unknown
urn:uuid:81e9490c-d8e1-11e2-99a2-0026552be7ea_RID | LabelObservation |   | Rosaceae | Holodiscus | discolor | Holodiscus discolor | (K. Koch) Maxim. |   | associated with | http://purl.obolibrary.org/obo/RO_0002437 |   |   | Unknown |   |   |   | Unknown

Note that this unofficial associatedTaxa extension has a wide variety of association meta-data with some overlapping with core concepts like [taxon](http://rs.gbif.org/core/dwc_taxon.xml) (e.g., aec:associatedFamily, aec:associatedGenus) and [occurrence](http://rs.gbif.org/core/dwc_occurrence.xml) (e.g., dwc:basisOfRecord). 

#### Darwin Core Archive – Uredinales of Belgium flavor
Approach: use standard resourceRelationship extension to establish an association between taxa with associated bibliographic reference. 

Example below was extracted from [https://github.com/trias-project/uredinales-belgium-checklist/tree/master/data/processed](https://github.com/trias-project/uredinales-belgium-checklist/tree/master/data/processed) on 16 August 2018 :

taxonID | resourceID | relatedResourceID | relationshipOfResource | relationshipAccordingTo
--- | --- | --- | --- | ---
uredinales-belgium-checklist:taxon:260455576301d23f512a9650f9936ef9 | uredinales-belgium-checklist:taxon:d1a10d22fbadf1d2edba815dd0e0e98e | uredinales-belgium-checklist:taxon:260455576301d23f512a9650f9936ef9 | parasite of | Vanderweyen A & Fraiture A (2009) Catalogue des Uredinales de Belgique, 1re partie, Chaconiaceae, Coleosporiaceae, Cronartiaceae, Melampsoraceae, Phragmidiaceae, Pucciniastraceae, Raveneliaceae et Uropyxidaceae. Lejeunia, Revue de Botanique. Page: 11
uredinales-belgium-checklist:taxon:8fe069e7f3228441fb405002b038aaf1 | uredinales-belgium-checklist:taxon:cbf7427c90512ca36cbb2b484d678ffc | uredinales-belgium-checklist:taxon:8fe069e7f3228441fb405002b038aaf1 | parasite of | Vanderweyen A & Fraiture A (2009) Catalogue des Uredinales de Belgique, 1re partie, Chaconiaceae, Coleosporiaceae, Cronartiaceae, Melampsoraceae, Phragmidiaceae, Pucciniastraceae, Raveneliaceae et Uropyxidaceae. Lejeunia, Revue de Botanique. Page: 11
uredinales-belgium-checklist:taxon:cf04e2617aba99a239404b150dd8f933 | uredinales-belgium-checklist:taxon:eb8274c1dc18a90b65cf5e813a6faa5c|uredinales-belgium-checklist:taxon:cf04e2617aba99a239404b150dd8f933|parasite of|Vanderweyen A & Fraiture A (2009) Catalogue des Uredinales de Belgique, 1re partie, Chaconiaceae, Coleosporiaceae, Cronartiaceae, Melampsoraceae, Phragmidiaceae, Pucciniastraceae, Raveneliaceae et Uropyxidaceae. Lejeunia, Revue de Botanique. Page: 11
uredinales-belgium-checklist:taxon:8f40d1f544b697192379f3573ae269d8|uredinales-belgium-checklist:taxon:b1ff1c8b1a8af95288d93b24fa6e0342|uredinales-belgium-checklist:taxon:8f40d1f544b697192379f3573ae269d8|parasite of|Vanderweyen A & Fraiture A (2009) Catalogue des Uredinales de Belgique, 1re partie, Chaconiaceae, Coleosporiaceae, Cronartiaceae, Melampsoraceae, Phragmidiaceae, Pucciniastraceae, Raveneliaceae et Uropyxidaceae. Lejeunia, Revue de Botanique. Page: 12

The usage of the standard [Resource Relationship Extension](http://rs.gbif.org/extension/dwc/resource_relation_2018_01_18.xml) helps to relate two associate taxa with a textual description of a relationship. Other than a free text description of the authority (i.e., relationshipAccordingTo), some free text nodes (i.e., relationshipRemarks) and a date at which the relationship was established (i.e., relationshipEstablishedDate), no other meta-data can be associated with the relationship.

Also see [https://trias-project.github.io/uredinales-belgium-checklist](https://trias-project.github.io/uredinales-belgium-checklist) with active discussion here: [https://github.com/trias-project/uredinales-belgium-checklist/issues/8](https://github.com/trias-project/uredinales-belgium-checklist/issues/8) .

#### Darwin Core Archive – Encyclopedia of Life flavor
Approach: add non-standard Association extension to link occurrence records. This format was requested by the Encyclopedia of Life as a way for GloBI to share aggregated species interaction records. 

Example below contains first 5 lines of association.tsv extracted from https://depot.globalbioticinteractions.org/snapshot/target/eol-globi-datasets-1.0-SNAPSHOT-darwin-core-aggregated.zip on 16 August 2018 :

associationID | occurrenceID | associationType | targetOccurrenceID | measurementDeterminedDate | measurementDeterminedBy | measurementMethod | measurementRemarks | source | bibliographicCitation | contributor | referenceID
-- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | --
globi:assoc:2-FBC:SLB:SpecCode:155196-ATE-GBIF:5219380 | globi:occur:source:2-FBC:SLB:SpecCode:155196-ATE | http://purl.obolibrary.org/obo/RO_0002470 | globi:occur:target:2-FBC:SLB:SpecCode:155196-ATE-GBIF:5219380 |   |   |   |   | Allen Hurlbert. Avian Diet Database (https://github.com/hurlbertlab/dietdatabase/). Accessed at <AvianDietDatabase.txt> on 13 Aug 2018. |   |   | globi:ref:2
globi:assoc:2-FBC:SLB:SpecCode:155196-ATE-GBIF:7572569 | globi:occur:source:2-FBC:SLB:SpecCode:155196-ATE | http://purl.obolibrary.org/obo/RO_0002470 | globi:occur:target:2-FBC:SLB:SpecCode:155196-ATE-GBIF:7572569 |   |   |   |   | Allen Hurlbert. Avian Diet Database (https://github.com/hurlbertlab/dietdatabase/). Accessed at <AvianDietDatabase.txt> on 13 Aug 2018. |   |   | globi:ref:2
globi:assoc:2-FBC:SLB:SpecCode:155196-ATE-GBIF:2436910 | globi:occur:source:2-FBC:SLB:SpecCode:155196-ATE | http://purl.obolibrary.org/obo/RO_0002470 | globi:occur:target:2-FBC:SLB:SpecCode:155196-ATE-GBIF:2436910 |   |   |   |   | Allen Hurlbert. Avian Diet Database (https://github.com/hurlbertlab/dietdatabase/). Accessed at <AvianDietDatabase.txt> on 13 Aug 2018. |   |   | globi:ref:2
globi:assoc:2-FBC:SLB:SpecCode:155196-ATE-GBIF:729 | globi:occur:source:2-FBC:SLB:SpecCode:155196-ATE | http://purl.obolibrary.org/obo/RO_0002470 | globi:occur:target:2-FBC:SLB:SpecCode:155196-ATE-GBIF:729 |   |   |   |   | Allen Hurlbert. Avian Diet Database (https://github.com/hurlbertlab/dietdatabase/). Accessed at <AvianDietDatabase.txt> on 13 Aug 2018. |   |   | globi:ref:2

The associationID help provide a pointer to capture an association between two occurrences (i.e. occurrenceID and targetOccurrenceID) of a specific type (i.e. associationType) with some room for additional meta-data like how the interaction was measured, who made the claim and where the data came from. 

### Closing thoughts

Species interaction datasets are overwhelmingly published in tabular text files with custom schemas, while other formats like rdf/owl, JSON, JSON-LD and Darwin Core Archive are used by relatively few. In its role as a catalyst and mediator for access to species interaction data, the included examples show how GloBI serves as a way for data contributors to explore the various file formats to help promote re-use or improvement of existing data exchange methods. 

While I sometimes find it tempting to say that some data formats are better than others, I know from experience that the most beautiful datasets are those that are actively maintained, shared and accessed. As long as the data is valuable, humans and machines alike will figure out a way to store or parse it in order to keep it alive.

If you'd like to share additional examples of species associations in digital formats, please send <a href="mailto:info@globalbioticinteractions.org?subject=I'd like to share my species interaction dataset and tell you all about it&body=Hi! [start typing now]">an email</a>, join the <a href="https://lists.gbif.org/mailman/listinfo/globi">GloBI mailing list</a>, open an <a href="https://github.com/jhpoelen/eol-globi-data/issues/new">GitHub issue</a> or have a conversation with yourself or your neigbhor. 
