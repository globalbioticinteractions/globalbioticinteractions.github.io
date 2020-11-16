---
layout: default
title: "Plazi-Zenodo"
status: unlisted
---

<div class="figure figure-globi right">
  <a href="https://cetaf.org/covid19-taf-communities-taking-action"><img src="/assets/cetaf-dissco-covid.png"/></a>
  <a href="https://plazi.org"><img src="assets/plazi_logo.png"/></a>
  <div class="figure figure-globi right">
    <a href="https://zenodo.org"><img src="assets/zenodo_logo.svg"/></a>
  </div>
</div>

This page shows the current state of integrations between Plazi annotated publications, Zenodo and GloBI. This integration originated as part of developing a biodiversity-related knowledge hub on COVID-19 via [COVID19-TAF - Communities Taking Action](https://cetaf.org/covid19-taf-communities-taking-action), a community-rooted initiative raised jointly by CETAF and DiSSCo.  

These integration are very much a work in progress and will hopefully lead to an increased visibility of Pensoft publications that make claims about species interactions.

[edit this page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/plazi-zenodo/index.md) / [edit collection list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/_data/plazi-zenodo.tsv) / [ask a question](https://github.com/globalbioticinteractions/globalbioticinteractions/issues) / [contribute data](https://github.com/globalbioticinteractions/globalbioticinteractions/issues)

[events](#events)
/ [integration status](#integration-status)
/ [integration profiles](#integration-profiles) 
/ [translation tables](#translation-tables) 
/ [supported biotic interaction terms](#supported-terms) 


# Events 

**24 April 2020** -  Exploratory Plazi<>Zenodo<>GloBI integration meeting with Jorrit (GloBI), Donat (Plazi), Marcus (Plazi) and Alex (Zenodo). [meeting notes](./2020-04-24-plazi-zenodo-globi-notes) .

**18 May 2020** - Continued Pensoft<>Plazi<>GloBI integration meeting with Jorrit, Lyubo, Mariya, Donat, Guido, Teodor, Georgi. [meeting notes](../pensoft/2020-05-18-pensoft-zenodo-globi-notes) .

**16/17 July 2020** - Guido adds Plazi-mediated publications to Zenodo using the custom "host of" Zenodo annotation that Alex implemented (e.g., [Luo et al. 2018](https://zenodo.org/record/3948922)). Soon after, Jorrit enabled the indexing of these Zenodo pubs. For context, see [related github issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/488#issuecomment-658277871) and related tweets by [Donat](https://twitter.com/myrmoteras/status/1284123656138960898) and [GloBI](https://twitter.com/GlobalBiotic/status/1284171977662410754) . 

**2 Oct 2020** - Jorrit uses a [newly added feature](https://github.com/globalbioticinteractions/nomer/issues/23#issuecomment-705650038) of [Nomer](https://github.com/globalbioticinteractions/nomer) to link taxonomic names indexed by GloBI to 41,894 Plazi treatments,  27,721 Plazi taxonomic concepts and direct links to 9,346 associated scientific publications. The methods and results of the link process are described in Poelen, Jorrit H. (2020). Global Biotic Interactions: Taxon Graph Patches (Version 0.5) [Data set]. Zenodo. http://doi.org/10.5281/zenodo.4062711 and Poelen, Jorrit H. (2020). Global Biotic Interactions: Taxon Graph (Version 0.3.26) [Data set]. Zenodo. http://doi.org/10.5281/zenodo.4062765 .


# Integration Status

Click on badges to browse/download indexed records or inspect automated reviews.

[edit collection list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/_data/pensoft.tsv)

|status|institution/collection|platform|contact|
|---|---|---|---|---
{% assign cols = site.data.plazi_zenodo | sort: "institution" -%}
{% for c in cols -%}
{%- assign globi-badge = c.globi_id | url_encode | prepend: "https://api.globalbioticinteractions.org/interaction.svg?accordingTo=" -%} 
{%- assign globi-url = c.globi_id | url_encode | prepend: "https://globalbioticinteractions.org/?accordingTo=" -%}
{%- if c.review_id -%}
{%- assign globi-review-url = c.review_id | trim | prepend: "https://depot.globalbioticinteractions.org/reviews/" | append: "/review.tsv.gz" -%}
{%- assign globi-review-badge = "assets/review.svg" -%}
{%- assign globi-interactions-url = c.review_id | trim | prepend: "https://depot.globalbioticinteractions.org/reviews/" | append: "/indexed-interactions.tsv.gz" -%}
{%- assign globi-index-badge = "assets/index.svg" -%}
{%- else -%}
{%- assign globi-review-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign globi-review-badge = "assets/review_none.svg" -%}
{%- assign globi-interactions-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign globi-index-badge = "assets/index_none.svg" -%}
{%- endif -%}
[![review-badge]({{ globi-review-badge }})]({{ globi-review-url }}) [![index-badge]({{ globi-index-badge }})]({{ globi-interactions-url }}) [![badge]({{ globi-badge }})]({{ globi-url }}) | <span id="{{ c.institution_code }}">{{ c.institution_code }}</span> / {{ c.institution }} {{ c.collection_code }} / {{ c.collection }} | [{{ c.platform }}](#{{ c.platform | downcase }}) | {{ c.contact }} | 
{% endfor %}

# Integration Profiles
Integration profiles are descriptions on how data flows from one system to the next. 


## google-sheets 

Plazi Google Sheets | GloBI Integration Profile
 --- | ---
authors | ?
actors | ?
integration method | Plazi team manually gathers literature on COVID-19 and extract virus-host annotations. These host-virus annotations are entered in a online spreadsheet. This Plazi curated spreadsheet is contiously tracked and indexed by GloBI. Now, GloBI helps make the literature annotations curated by the Plazi team more visible.  
diagram | ?
examples | see related [issue 490](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/490)

## Zotero

Zotero | GloBI Integration Profile
 --- | ---
authors | ...
actors | ...
integration method | Plazi team takes manually curated spreadsheets to automatically populate an annotated [Zotero](https://zotero.org) reference list of COVID-19 publications. Also, interested parties can append relevant publication to the Zotero reference list to allow to outside, non-Plazi contributions. The each contributed citation, Plazi help to extract and add relevant virus-host annotations and records them manually in the curated spreadsheet.
diagram | ...
examples | see related [issue 487](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/487)
status | method not implemented because alternatives exist (googlesheets, Zenodo) 

## Zenodo

Zenodo | GloBI Integration Profile
 --- | ---
authors | Alex, Markus, Donat, Jorrit
actors | ...
integration method | Plazi team uses each invidual reference in annotated Zotero citation list and creates an individual Zenodo publication. These Zenodo publications are annotated with relevant taxonomic, interactions, locality etc. properties. Interaction annotations are encoded in a key value scheme that allows for encoding interaction triples, taking inspiration from hexastore. For more information see [Virus host relationship custom metadata: feature request](https://docs.google.com/document/d/1cKcQfx8X8uAXR6JF96jqZO8OCpwwkYatnxSIyVXvYbo). 
diagram | ...
examples | see related [issue 488](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/488)

## Collaborative Transcription

Collaborative Transcription | GloBI Integration Profile
 --- | ---
status | under development
authors | Marcus, Katja, Donat, Jorrit 
actors | Plazi automated OCR workflows; Plazi RSS notification feed; Community Experts with interest in transcribing species interactions from taxonomic literature;
actors | Plazi OCR workflow, Plazi treatment bank (search index), Expert Curators at institutions studying species interactions
integration method | (step 1. machine readable literature) Existing Plazi workflows produce a steady flow of OCR-ed taxonomic literature with machine readable and machine generated annotations for taxonomic names, locations, habitats etc. . Note that descriptions of species interactions are (yet) automatically annotated, but the text containing the descriptions is available in machine readable format (OCR-ed pdfs/scans). (step 2. notify availability) On completing the OCR and annotation process, Plazi notifies community of the available publication via an rss feed and search indexes. (step 3. listening experts) On receiving a notification of a newly transcribed taxonomic literature for a specific taxonomic group (e.g., ticks), experts (e.g., entomologist/parasitologist) accesses the machine readable text and transcribes the species interaction in them. (step 4. integration) The transcribed species interactions are linked to the Plazi treatment bank and made available as annotations on Zenodo publications (step 5. indexing) GloBI indexes the annotations via Zenodo custom annotation.
diagram | ...
examples | See https://github.com/globalbioticinteractions/globalbioticinteractions/issues/559 for example




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
