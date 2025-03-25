---
layout: default
title: "MICROBENetNet"
status: unlisted
---

⚠️ this page is under construction, unofficial, and is likely incomplete ⚠️

[edit](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/edit/main/microbenetnet/index.md) / [contact via GitHub](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new?title=about%20MicrobeNetNet%20.%20.%20.%20&body=HI%21%0A%0AI%20noticed%20your%20page%20at%20https%3A%2F%2Fglobalbioticinteractions.org%2FMicrobeNet^Net%20and%20I%27d%20like%20to%20...%0A%0AThanks%2C%0A%5Byour%20name%5D) / [contact via email](mailto:microbenetnet@globalbioticinteractions.org?subject=about%20MicrobeNetNet%20.%20.%20.%20&body=HI%21%0A%0AI%20noticed%20your%20page%20at%20https%3A%2F%2Fglobalbioticinteractions.org%2Fmicrobenetnet%20and%20I%27d%20like%20to%20...%0A%0AThanks%2C%0A%5Byour%20name%5D)


MICROBENet-Net: Multi-Institute Collaborative Research on BElowground plant-microbial interactions Network of Networks. 2024/2028 [NSF AccelNet Award 2412561](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2412561).

MicrobeNet^Net 

> [...] MICROBENet^Net Theme and Grand Challenge: Plants and microorganisms regulate a diverse array of processes that modulate the Earth system. Yet, we know remarkably little about how variable plant-microbial interactions are across the globe, how microbial connections with plants respond to global change, and if changes in plant-microbe interactions will lead to predictable changes in plant, ecosystem, and macro-scale ecology. While microbial ecologists and plant ecologists both explore questions about geography, interactions, and function, this work has often occurred in plant or microbial silos. Focusing on either plants or microbes resulted in the development of distinct disciplinary vocabularies and meanings, even when using similar tools and asking questions across similar scales. [...]

# Events

 **2025-03-20/2025-03-24** - MicrobeNet^Net colloquium hosted by the University of Tennessee Knoxville. 

 **2025-03-21** - A prototype to show overlap of taxonomic plant names of possible fungal hosts across various plant-fungus datasets. See [Shared Plant Taxa across MicrobeNetNet Databases (prototype)](https://github.com/jhpoelen/fungal-plant-host-overlap?tab=readme-ov-file#microbenetnet-prototype---common-plant-taxa-across-databases).

# Dataset Review

To help better understand existing fungal-plant interaction datasets, MicroNet^Net aims to better connect and use these existing datasets. The list below contains the list of dataset selected for review.

Click on badges to browse/download indexed records or inspect automated reviews.

[edit dataset list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/_data/microbenetnet.tsv)

{% assign cols = site.data.microbenetnet | sort: "dataset" -%}
{% for c in cols -%}
{%- assign globi-badge = c.globi_id | url_encode | prepend: "https://api.globalbioticinteractions.org/interaction.svg?accordingTo=" -%}
{%- assign globi-url = c.globi_id | url_encode | prepend: "https://globalbioticinteractions.org/?accordingTo=" -%}
[![badge]({{ globi-badge }})]({{ globi-url }}) <a href="#{{ c.dataset }}">{{ c.dataset }}</a> {{ " / " }}
{%- endfor %}

|status|<ins>M</ins>etadata\|<ins>D</ins>ata\|<ins>R</ins>eview|dataset|contact|
|---|---|---|---|
{% assign cols = site.data.microbenetnet | sort: "dataset" -%}
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
{%- assign globi-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign globi-badge = "assets/indexed_none.svg" -%}
{%- assign review-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign review-badge = "assets/review_none.svg" -%}
{%- assign names-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign names-badge = "assets/suspicious_names_none.svg" -%}
{%- assign config-badge = "assets/config_none.svg" -%}
{%- assign config-url = "https://globalbioticinteractions.org/contribute" -%}
{%- assign issues-badge = "assets/issues_none.svg" -%}
{%- assign issues-url = "https://globalbioticinteractions.org/contribute" -%}
{%- endif -%}
[![review-badge]({{ review-badge }})]({{ review-url }}) [![badge]({{ globi-badge }})]({{ globi-url }}) [![badge]({{ config-badge }})]({{ config-url }}) [![badge]({{ issues-badge }})]({{ issues-url }}) | <span class="{{ c.metadata_access }}" title="At this time, metadata of dataset {{ c.dataset }} is {{ c.metadata_access }} access.">M</span> \| <span class="{{ c.data_access }}" title="At this time, data of dataset {{ c.dataset }} is {{ c.data_access }} access.">D</span> \| <span class="{{ c.review_report_access }}" title="At this time, the review report of dataset {{ c.dataset }} is {{ c.review_report_access }} access.">R</span> | <span id="{{ c.dataset }}">{{ c.dataset }}</span> | {{ c.contact }} | 
{% endfor %}


# Related Initiatives

...
