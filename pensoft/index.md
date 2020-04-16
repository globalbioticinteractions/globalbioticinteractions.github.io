---
layout: default
title: "pensoft"
status: unlisted
---

This page shows the current state of integration between Pensoft publication platforms and GloBI. 

[edit this page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/master/pensoft/index.md) / [edit collection list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/master/_data/pensoft.tsv) / [ask a question](https://github.com/ParasiteTracker/data-issues-observations-and-questions/issues) / [contribute data](https://github.com/globalbioticinteractions/globalbioticinteractions/issues)

[events](#events)
/ [collections status](#tpt-collections-status)
/ [integration profiles](#integration-profiles) 
/ [DwC-A guidelines](#dwca-guidelines) 
/ [translation tables](#translation-tables) 
/ [supported biotic interaction terms](#supported-terms) 


# Events 

**16 April 2020** -  Exploratory Pensoft<>GloBI integration meeting with Jorrit, Lyubo, Mariya. [meeting notes](  

**24 Feb 2020** -  Publication of ```Poelen, Jorrit H., & Seltmann, Katja. (2020). Terrestrial Parasite Tracker indexed biotic interactions and review summary (Version 0.1) [Data set]. Zenodo. [http://doi.org/10.5281/zenodo.3685365](http://doi.org/10.5281/zenodo.3685365)``` .  For summaries see [indexed_interactions_by_collection.tsv](https://zenodo.org/record/3685365/files/indexed_interactions_by_collection.tsv) and [review_summary_by_collection.tsv](https://zenodo.org/record/3685365/files/review_summary_by_collection.tsv). For full report with review comments, indexed interactions and source datasets, please visit the Zenodo data publication at [http://doi.org/10.5281/zenodo.3685365](http://doi.org/10.5281/zenodo.3685365). 

**5 Mar 2020** - workshop GloBI presentation available via [doi:10.17605/OSF.IO/VK8WQ](https://doi.org/10.17605/OSF.IO/VK8WQ), workshop blog post at [Tracking Parasites](/2020/03/05/tracking-parasites/) 

# TPT Collections Status

Click on badges to browse/download indexed records or inspect automated reviews.

[edit collection list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/master/_data/pensoft.tsv)

{% assign cols = site.data.pensoft | sort: "institution" -%}
{% for c in cols -%}
{%- assign globi-badge = c.globi_id | url_encode | prepend: "https://api.globalbioticinteractions.org/interaction.svg?accordingTo=" -%}
{%- assign globi-url = c.globi_id | url_encode | prepend: "https://globalbioticinteractions.org/?accordingTo=" -%}
[![badge]({{ globi-badge }})]({{ globi-url }}) <a href="#{{ c.institution_code }}">{{ c.institution_code }}</a> {{ " / " }}
{%- endfor %}

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

Pensoft | GloBI Integration Profile
 --- | ---
authors | ?
actors | ?
integration method | ?
diagram | ?
examples | ?

# Interaction Types 
# Supported Terms
# Translation Tables

GloBI uses a subset of biotic interaction (or association) terms defined in the [OBO Relations Ontology](http://www.obofoundry.org/ontology/ro.html) (OBO RO) to help classify and index biotic associations in collection records. Verbatim association types (e.g., ```on```, ```parasite of```, ```found on```) are explicitly mapped into these OBO RO terms using translation tables. GloBI keeps a default translation tables and specific collection may choose to provide their own (see e.g., [INHS-Insects](https://github.com/globalbioticinteractions/inhs-insects) ).

| resource | description |
| --- | --- |
| [OBO Relations Ontology project page](http://obofoundry.org/ontology/ro.html) | OBO RO contains many kinds of terms, not just biotic associations terms |
| [List of OBO RO Biotic Interaction Terms with definitions](https://github.com/globalbioticinteractions/nomer/blob/master/nomer/src/test/resources/org/globalbioticinteractions/nomer/match/ro.tsv) | a table of RO biotic interaction terms and their definitions (if available)
| [List of GloBI Supported Interaction Terms](https://github.com/globalbioticinteractions/globalbioticinteractions/blob/master/eol-globi-lib/src/main/resources/org/globalbioticinteractions/interaction_types_ro.csv) | subset of RO interactions terms that GloBI uses for indexing |
| [Default Verbatim Terms Translation Table](https://github.com/globalbioticinteractions/globalbioticinteractions/blob/master/eol-globi-lib/src/main/resources/org/globalbioticinteractions/interaction_types_mapping.csv) | the translation table used by GloBI to maps verbatim interaction terms to supported interaction terms
| [Example of Custom Verbatim Terms Translation Table](https://github.com/globalbioticinteractions/inhs-insects/blob/master/interaction_types_mapping.csv) | if provided/needed, GloBI can use a custom mapping provided by a collection |

The OBO RO is far from complete and we expect to add new terms and improve definitions as needed. Also, GloBI translation tables can be easily updated when needed. Please [open an issue](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new) if you have questions or suggestions. 
