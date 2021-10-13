---
layout: default
title: "pensoft"
status: unlisted
---

<div class="figure figure-globi right">
<a href="https://cetaf.org/covid19-taf-communities-taking-action"><img src="/assets/cetaf-dissco-covid.png"/></a><a href="https://pensoft.com"><img src="assets/pensoftlogo_-01.png"/></a>
</div>

This page shows the current state of integrations between Pensoft publication platforms and GloBI. This integration originated as part of developing a biodiversity-related knowledge hub on COVID-19 via [COVID19-TAF - Communities Taking Action](https://cetaf.org/covid19-taf-communities-taking-action), a community-rooted initiative raised jointly by CETAF and DiSSCo.  

These integration are very much a work in progress and will hopefully lead to an increased visibility of Pensoft publications that make claims about species interactions.

[edit this page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/pensoft/index.md) / [edit collection list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/_data/pensoft.tsv) / [ask a question](https://github.com/globalbioticinteractions/globalbioticinteractions/issues) / [contribute data](https://github.com/globalbioticinteractions/globalbioticinteractions/issues)

[events](#events)
/ [integration status](#integration-status)
/ [integration profiles](#integration-profiles) 
/ [translation tables](#translation-tables) 
/ [supported biotic interaction terms](#supported-terms) 


# Events 

**16 April 2020** -  Exploratory Pensoft<>GloBI integration meeting with Jorrit, Lyubo, Mariya. [meeting notes](./2020-04-16-pensoft-globi-notes) .

**23 April 2020** - Publication of Lyubomir Penev, Mariya Dimitrova, Viktor Senderov, Georgi Zhelezov, Teodor Georgiev, Pavel Stoev, & Kiril Simov. (2020). OpenBiodiv Archive (Version 0.0.1) [Data set]. Zenodo. http://doi.org/10.5281/zenodo.3763429

**18 May 2020** - Continued Pensoft<>Plazi<>GloBI integration meeting with Jorrit, Lyubo, Mariya, Donat, Guido, Teodor, Georgi. [meeting notes](./2020-05-18-pensoft-zenodo-globi-notes) .

**25 June 2020** - Continued Pensoft<>Plazi<>GloBI integration meeting with Mariya (organizer), Jorrit, Lyubo,  Donat, Georgi. [meeting notes](./2020-06-25-pensoft-plazi-globi-notes) .

**13 July 2020** - Continued Pensoft<>Plazi<>GloBI integration meeting with Mariya (organizer), Lyubomir, Georgi, Guido, Jorrit. [meeting notes](./2020-07-13-pensoft-plazi-globi-notes) .

**17 July 2020** - Mariya published blog post "Pensoft – GloBI workflow for FAIR data exchange and indexing of biotic interactions locked within scholarly articles" at [https://blog.pensoft.net/2020/07/17/pensoft-globi-workflow-for-fair-data-exchange-and-indexing-of-biotic-interactions-locked-within-scholarly-articles/](https://blog.pensoft.net/2020/07/17/pensoft-globi-workflow-for-fair-data-exchange-and-indexing-of-biotic-interactions-locked-within-scholarly-articles/).

**11 Aug 2020** - Mariya submitted abstract ["Semantic Publishing Enables Text Mining of Biotic Interactions"](/pensoft/td
wg2020-semantic-publishing.pdf) to [virtual TDWG 2020](https://www.tdwg.org/conferences/2020/) annual conference Oct 19-23 2020.

**12 Oct 2021** - Pensoft - Naturalis - GloBI meeting with Mariya Dimitrova (Pensoft), Lyubomir Penev (Pensoft), Teodor Georgiev (Pensoft), Georgi Zhelezov (Pensoft), Niki Kyriakopoulou (Naturalis), Jorrit Poelen (GloBI) discussing a possible collaboration to improve ways to extract (and predict) species interaction data from conserved/published materials like tables, specimen records. See [meeting notes](https://docs.google.com/document/d/1vgsX3k0Gy5Sigalv1fXCFHEwSgJCf2begeaITrsxeQo) for more details.



# Integration Status

Click on badges to browse/download indexed records or inspect automated reviews.

[edit collection list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/_data/pensoft.tsv)

|status|institution/collection|platform|contact|
|---|---|---|---|---
{% assign cols = site.data.pensoft | sort: "institution" -%}
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


## OpenBiodiv

OpenBiodiv | GloBI Integration Profile
 --- | ---
authors | ?
actors | ?
integration method | GloBI uses **OpenBiodiv sparql endpoint** to query for publications using that contains species interactions (e.g., dwc:habitat fields). GloBI indexes resulting pensoft publications and taxonomic treatments. Now, Pensoft publications and plazi taxonomic treatments can be found via GloBI.
diagram | ?
examples | see related [issue 483](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/483)

## Arpha Table

Pensoft Arpha Tables | GloBI Integration Profile
 --- | ---
authors | ?
actors | ?
integration method | GloBI queries Arpha (?) for **tables** that include Darwin Core Archive attachments.  GloBI parses the DwC-A and indexes species interactions terms contained in them. Now, Pensoft publications and plazi taxonomic treatments can be found via GloBI.
diagram | ?
examples | see related [issue 481](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/481)

## Arpha DwC

Pensoft Arpha DwC-A | GloBI Integration Profile
 --- | ---
authors | ?
actors | ?
integration method | GloBI queries Arpha (?) for publications that include **Darwin Core Archive attachments**.  GloBI parses the DwC-A and indexes species interactions terms contained in them. Now, Pensoft publications and plazi taxonomic treatments can be found via GloBI.
diagram | ?
examples | see related [issue 480](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/480)



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
