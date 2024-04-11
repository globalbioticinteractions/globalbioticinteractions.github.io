---
layout: default
title: "WorldFAIR"
status: unlisted
---
<div class="figure figure-globi right">
<a href="https://worldfair-project.eu/"><img src="assets/worldfair_logo.png"/></a>
</div>


In the [WorldFAIR project](https://worldfair-project.eu/), the Committee on Data of the International Science Council ([CODATA](https://codata.org/)) and the Research Data Alliance ([RDA](https://www.rd-alliance.org/)) work with a set of 11 disciplinary and cross-disciplinary case studies to advance implementation of the FAIR principles and, in particular, to improve interoperability and reusability of digital research objects, including data. Particular attention is paid to the articulation of an interoperability framework for each case study and research domain.

Related meeting notes available [here](https://docs.google.com/document/d/1MKUFLdGscFODvkW8NfzrP8LhJbDks3L0FXLyae6yZ34) and [here](https://docs.google.com/document/d/1QZjtZeYOT-Mn5IwdeGfkVmKzOy39rrc1ebnBXeVWtiA/edit). 

This page shows the current state of integration between GloBI and WorldFAIR affiliated datasets, with a special focus on pollination datasets.  

[edit this page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/worldfair/index.md) / [ask a question about the project](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new?title=WorldFAIR&body=Hi,%20I%20am%20wondering%20about...) / [contribute data](https://github.com/globalbioticinteractions/globalbioticinteractions/issues)

[events](#events)
/ [dataset status](#dataset-status)
/ [integration profiles](#integration-profiles) 
/ [DwC-A guidelines](#dwca-guidelines) 
/ [translation tables](#translation-tables) 
/ [supported biotic interaction terms](#supported-terms) 


# Events 

**31 July 2023** Publication of: Trekels, M., Pignatari Drucker, D., Salim, J. A., Ollerton, J., Poelen, J., Miranda Soares, F., Rünzel, M., Kasina, M., Groom, Q., & Devoto, M. (2023). WorldFAIR Project (D10.1) Agriculture-related pollinator data standards use cases report (Version 2). Zenodo. <a href="https://doi.org/10.5281/zenodo.8356529">https://doi.org/10.5281/zenodo.8356529</a>.

**19 January 2024** First draft released of: Debora Pignatari Drucker (Embrapa), José Augusto Salim (Unicamp), Jorrit Poelen (Ronin Institute, UC Santa Barbara), Filipi Miranda Soares (USP & UTwente), Rocio Ana Gonzalez-Vaquero (UBA), Jeff Ollerton (UoN/KIB), Mariano Devoto (UBA), Max Rünzel (HiveTracks), Drew Robinson (HiveTracks), Muo Kasina (KALRO), Christine Taliga (USDA NRCS), Cynthia Parr (USDA ARS), Diana Cox-Foster (USDA ARS), Elizabeth Hill (USDA OCS), Marcia Motta Maues (Embrapa), António Mauro Saraiva (USP), Kayna Agostini (UFSCAR), Luisa Gigante Carvalheiro (UFG), Pedro Bergamo (Unesp), Isabela Varassin (UFPR), Denise Araujo Alves (USP), Bruno Marques (UFG), Carla Tinoco (UFG), André Rodrigo Rech (UFVJM), Juliana Cardona-Duque (University CES), Mileidy Idárraga (University CES), M. Camila Agudelo-Zapata (University CES), Esteban Marentes Herrera (SiB Colombia), Maarten Trekels (2024). **WorldFAIR Project (D10.2) Agricultural Biodiversity Standards, Best Practices and Guidelines Recommendations.** Google Drive. [pdf](assets/WorldFAIR-Deliverable-D10-2-Draft-2024-01-19.pdf) accessed at <a href="https://docs.google.com/document/d/1W98fP7wA7rVNYoVkDagw7pDoxlhpZL_82BOB0lpnA0w">https://docs.google.com/document/d/1W98fP7wA7rVNYoVkDagw7pDoxlhpZL_82BOB0lpnA0w</a> on 2024-01-22.  

**26 February 2024** Publication of D10.2 (Version 1): Drucker, D., Salim, J. A., Poelen, J., Soares, F. M., Gonzalez-Vaquero, R. A., Ollerton, J., Devoto, M., Rünzel, M., Robinson, D., Kasina, M., Taliga, C., Parr, C., Cox-Foster, D., Hill, E., Maues, M. M., Saraiva, A. M., Agostini, K., Carvalheiro, L. G., Bergamo, P., … Trekels, M. (2024). WorldFAIR (D10.2) Agricultural Biodiversity Standards, Best Practices and Guidelines Recommendations (Version 1). Zenodo. [doi:10.5281/zenodo.10666593](https://doi.org/10.5281/zenodo.10666593).

**5 March 2024** Publication of D10.3 (Version 1): Drucker, D. P., Salim, J. A., Poelen, J., Soares, F. M., Gonzalez-Vaquero, R. A., Devoto, M., Ollerton, J., Kasina, M., Carvalheiro, L. G., Bergamo, P. J., Alves, D. A., Varassin, I., Tinoco, F. C., Rünzel, M., Robinson, D., Cardona-Duque, J., Idárraga, M., Agudelo-Zapata, M. C., Marentes Herrera, E., Taliga, C., Parr, C.S., Cox-Foster, D., Hill, E., Maués, M.M. Agostini, K. Rech, A.R., Saraiva, A. (2024). WorldFAIR (D10.3) Agricultural biodiversity FAIR data assessment rubrics (Version 1). Zenodo. [https://doi.org/10.5281/zenodo.10719265](https://doi.org/10.5281/zenodo.10719265).

**18 April 2024** The WorldFAIR webinar series- "Reusing Plant-Pollinator Datasets: a Global Perspective with Guidelines and Recommendations inspired by Pilot Studies from Africa, the Americas and Europe". It will be held on April 18 at 2:00 pm – 3:00 pm (Times in UTC) - register here: https://worldfair-project.eu/event/the-worldfair-webinar-series-reusing-plant-pollinator-datasets-a-global-perspective-with-guidelines-and-recommendations-inspired-by-pilot-studies-from-africa-the-americas-and-europe/

# Dataset Status

Click on badges to browse/download indexed records or inspect automated reviews.

[edit dataset list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/_data/worldfair.tsv)

{% assign cols = site.data.worldfair | sort: "pilot" -%}
{% for c in cols -%}
{%- assign globi-badge = c.globi_id | url_encode | prepend: "https://api.globalbioticinteractions.org/interaction.svg?accordingTo=" -%}
{%- assign globi-url = c.globi_id | url_encode | prepend: "https://globalbioticinteractions.org/?accordingTo=" -%}
[![badge]({{ globi-badge }})]({{ globi-url }}) <a href="#{{ c.pilot }}">{{ c.pilot }}</a> {{ " / " }}
{%- endfor %}

|status|<ins>M</ins>etadata\|<ins>D</ins>ata\|<ins>R</ins>eview|pilot|contact|
|---|---|---|---
{% assign cols = site.data.worldfair | sort: "pilot" -%}
{% for c in cols -%}
{%- assign globi-badge = c.globi_id | url_encode | prepend: "https://api.globalbioticinteractions.org/interaction.svg?accordingTo=" -%} 
{%- assign globi-url = c.globi_id | url_encode | prepend: "https://globalbioticinteractions.org/?accordingTo=" -%}
{%- if c.review_id and c.review_id != "NA" and c.review_report_access != "closed" -%}
{%- assign review-url = c.review_id | trim | prepend: "https://depot.globalbioticinteractions.org/reviews/" -%}
{%- assign review-badge = c.review_id | trim | prepend: "https://depot.globalbioticinteractions.org/reviews/" | append: "/review.svg" -%}
{%- assign names-url = c.review_id | trim | uri_escape | prepend: "https://api.globalbioticinteractions.org/interaction.csv?type=csv&sourceTaxon=no%3Amatch&includeObservations=true&accordingTo=globi%3A" -%}
{%- assign config-badge = "assets/config.svg" -%}
{%- assign config-url = c.review_id | trim | prepend: "https://github.com/" -%}
{%- assign issues-badge = c.review_id | trim | prepend: "https://img.shields.io/github/issues/" | append: ".svg?color=#4c1" -%}
{%- assign issues-url = c.review_id | trim | prepend: "https://github.com/" | append: "/issues" -%}
{%- else -%}
{%- assign review-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign review-badge = "assets/review_none.svg" -%}
{%- assign names-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign names-badge = "assets/suspicious_names_none.svg" -%}
{%- assign config-badge = "assets/config_none.svg" -%}
{%- assign config-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign issues-badge = "assets/issues_none.svg" -%}
{%- assign issues-url = "https://globalbioticinteractions.org/contribute" -%}
{%- endif -%}
[![review-badge]({{ review-badge }})]({{ review-url }}) [![badge]({{ globi-badge }})]({{ globi-url }}) [![badge]({{ config-badge }})]({{ config-url }}) [![badge]({{ issues-badge }})]({{ issues-url }}) | <span class="{{ c.metadata_access }}" title="At this time, metadata of {{ c.pilot }} WorldFAIR pilot is {{ c.metadata_access }} access.">M</span> \| <span class="{{ c.data_access }}" title="At this time, data of {{ c.pilot }} WorldFAIR pilot is {{ c.data_access }} access.">D</span> \| <span class="{{ c.review_report_access }}" title="At this time, the review report of {{ c.pilot }} WorldFAIR pilot is {{ c.review_report_access }} access.">R</span> | <span id="{{ c.pilot }}">{{ c.pilot }}</span> | {{ c.contact }} | 
{% endfor %}

# Integration Profiles
Integration profiles are descriptions on how data flows from one system to the next. Because the WorldFAIR community is using a variety of tools (e.g., GBIF IPTs, Excel, MSAccess) to manage and share pollinator data, there are many integration profiles to exchange collection data. The integration profiles below are geared towards the exchange and linking of biotic associations data (e.g., species interactions, or pollinator-plant associations) with [GloBI](https://globalbioticinteractions.org). 

## Undecided

Please see [BigBee](../bigbee#integration-profiles) and [ParasiteTracker](../parasitetracker#integration-profiles) project pages for example integration profiles. 

Your platform/project here | GloBI Integration Profile
 --- | ---
authors | ?
actors | ?
integration method | ?
diagram | ?
example collection | ?


Aside from various collection management systems, some collections use custom, home grown tools to manage their digital inventory. When feasible, we aim to develop custom integration profiles for those institutional solutions, provided that the data is openly accessible on the internet. 


# DwCA Guidelines

Darwin Core Archives provide several ways to capture biotic associations including: [associatedTaxa](https://dwc.tdwg.org/terms/#associatedTaxa), [associatedOccurrences](https://dwc.tdwg.org/terms/#associatedOccurrences), [ResourceRelationship](https://dwc.tdwg.org/terms/#resourcerelationship), and [dynamicProperties](https://dwc.tdwg.org/terms/#dwc:dynamicProperties). 

For specific examples also see GloBI blog posts [Associating with Natural History Collections](/2019/07/10/associating-with-natural-history-collections/) and [Models in Fashion](/2018/08/16/models-in-fashion/#darwin-core-archives).

## General Guidelines
The interaction information should be shared in multiple ways through DwC-A because no single way is sufficient for all aggregators. GBIf does display Dynamic Properties and Associated Taxa (according to K. Seltmann).

## Associated Taxa
http://rs.tdwg.org/dwc/terms/associatedTaxa should always be filled out when an association is present (according to K. Seltmann).

## Associated Occurrences
If http://rs.tdwg.org/dwc/terms/associatedOccurrences are listed, those should be a separate column in the DwC-A (not included in http://rs.tdwg.org/dwc/terms/dynamicProperties) (according to K. Seltmann).

http://rs.tdwg.org/dwc/terms/associatedOrganisms may include a relationship and link.

## Dynamic Properties
http://rs.tdwg.org/dwc/terms/dynamicProperties should be used to handle all other information about an interaction formatted in JSON (according to K. Seltmann). 

## Resource Relations
https://dwc.tdwg.org/terms/#resourcerelationship is another way of adding biotic interactions to the Darwin Core archive, but only accommodates key:values, thus dynamicProperties will also be needed for more complex information (according to K. Seltmann).

https://dwc.tdwg.org/terms/#resourcerelationship is designed to link, or relate, occurrence/taxon or any kind of DwC record using a defined relationship. This means that many details from the linked records are inherited (e.g., lifestage of a specimen described by a linked occurrence record). However, limited information (e.g., https://dwc.tdwg.org/terms/#dwc:relationshipAccordingTo, https://dwc.tdwg.org/terms/#dwc:relationshipEstablishedDate, https://dwc.tdwg.org/terms/#dwc:relationshipRemarks) can be associated to the relationship record itself (according to J.H. Poelen).

(work in progress) Include best practices, pros/cons, examples and links to datasets using the extensions. 

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
