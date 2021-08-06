---
layout: default
title: "image snippets"
status: unlisted
---

Image snippets provide semantic annotations and tools to query images. https://imagesnippets.com .

Global Biotic Interactions integrates with Image Snippets to exchange species interactions related to images. 


[edit this page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/imagesnippets/index.md) 

[events](#events)
/ [integration profiles](#integration-profiles) 
/ [translation tables](#translation-tables) 
/ [supported biotic interaction terms](#supported-terms) 


# Events 

**6 Aug 2021** - Exploratory meeting with Jorrit and Margaret

# Integration Profiles

Integration profiles are descriptions on how data flows from one system to the next. Because the Parasite Tracker community is using a variety of tools (e.g., Arctos, Symbiota, Specify, Excel, MSAccess) to manage and share collection data, there are many integration profiles to exchange collection data. The integration profiles below are geared towards the exchange and linking of biotic associations data (e.g., species interactions, or host-parasite associations) with [GloBI](https://globalbioticinteractions.org). 

## Arctos
Arctos managed collections are indexed by GloBI. This section explains how.

 Arctos | GloBI Integration Profile 
 --- | --- 
 authors | Dusty (Arctos dev), Mariel Campbell (MSB), Teresa Mayfield-Meyer (MSB)
 actors | Arctos, VertNet, GloBI
 integration method | A collection manager uses Arctos to establish associations or relationships between records. Arctos periodically shares data with VertNet. VertNet uses [GBIF IPT](https://www.gbif.org/ipt) software to publish data archives. VertNet publishes a list of available datasets in the form of a RSS feed, including those shared by Arctos. Periodically, GloBI finds, and downloads, Arctos related data archives in VertNet. Then, GloBI indexes the associatedOccurrences fields of records in these Arctos data archives. The associatedOccurrences contain the association type (e.g., "eats") and a pointer to the occurrence id of the linked record.
  diagram | ![arctos-integration.png](./assets/arctos-integration.svg)
example collection | [MSB-PARA](#MSB-PARA)

# Integration Profile Template

Your platform/project here | GloBI Integration Profile
 --- | ---
authors | ?
actors | ?
integration method | ?
diagram | ?
example collection | ?


# Interaction Types 
# Supported Terms
# Translation Tables

GloBI uses a subset of biotic interaction (or association) terms defined in the [OBO Relations Ontology](http://www.obofoundry.org/ontology/ro.html) (OBO RO) to help classify and index biotic associations in collection records. Verbatim association types (e.g., ```on```, ```parasite of```, ```found on```) are explicitly mapped into these OBO RO terms using translation tables. GloBI keeps a default translation tables and specific collection may choose to provide their own (see e.g., [INHS-Insects](https://github.com/globalbioticinteractions/inhs-insects) ).

| resource | description |
| --- | --- |
| [OBO Relations Ontology project page](http://obofoundry.org/ontology/ro.html) | OBO RO contains many kinds of terms, not just biotic associations terms |
| [List of OBO RO Biotic Interaction Terms with definitions](https://github.com/globalbioticinteractions/nomer/blob/main/nomer/src/test/resources/org/globalbioticinteractions/nomer/match/ro.tsv) | a table of RO biotic interaction terms and their definitions (if available)
| [List of GloBI Supported Interaction Terms](https://github.com/globalbioticinteractions/globalbioticinteractions/blob/main/eol-globi-lib/src/main/resources/org/globalbioticinteractions/interaction_types_ro.csv) | subset of RO interactions terms that GloBI uses for indexing |
| [Default Verbatim Terms Translation Table](https://github.com/globalbioticinteractions/globalbioticinteractions/blob/main/eol-globi-lib/src/main/resources/org/globalbioticinteractions/interaction_types_mapping.csv) | the translation table used by GloBI to maps verbatim interaction terms to supported interaction terms
| [Example of Custom Verbatim Terms Translation Table](https://github.com/globalbioticinteractions/inhs-insects/blob/main/interaction_types_mapping.csv) | if provided/needed, GloBI can use a custom mapping provided by a collection |

The OBO RO is far from complete and we expect to add new terms and improve definitions as needed. Also, GloBI translation tables can be easily updated when needed. Please [open an issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new) if you have questions or suggestions. 
