---
layout: default
title: "parasite tracker"
status: unlisted
---

Collections related to the [Parasite Tracker](https://parasitetracker.org) project. Click on badge to explore indexed records.

{% assign cols = site.data.parasitetracker | sort: "institution" -%}
{% for c in cols -%}
{%- assign globi-badge = c.globi_id | url_encode | prepend: "https://api.globalbioticinteractions.org/interaction.svg?accordingTo=" -%}
{%- assign globi-url = c.globi_id | url_encode | prepend: "https://globalbioticinteractions.org/?accordingTo=" -%}
[![badge]({{ globi-badge }})]({{ globi-url }}) <a href="#{{ c.institution_short }}">{{ c.institution_short }}</a> {{ " / " }}
{%- endfor %}

1 Oct 2019 Parasite Tracker kick-off [presentation](./assets/globi_adbc_summit_20191001.pdf) / [video](https://vimeo.com/362883545). 

[update page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/master/_data/parasitetracker.tsv) / [ask a question](https://github.com/ParasiteTracker/data-issues-observations-and-questions/issues) / [contribute data](https://github.com/globalbioticinteractions/globalbioticinteractions/issues)


|indexed|code|institution|collection|platform|contact|
|---|---|---|---|---|
{% assign cols = site.data.parasitetracker | sort: "institution" -%}
{% for c in cols -%}
{%- assign globi-badge = c.globi_id | url_encode | prepend: "https://api.globalbioticinteractions.org/interaction.svg?accordingTo=" -%} 
{%- assign globi-url = c.globi_id | url_encode | prepend: "https://globalbioticinteractions.org/?accordingTo=" -%} 
[![badge]({{ globi-badge }})]({{ globi-url }}) | <span id="{{ c.institution_short }}">{{ c.institution_short }}</span> | {{ c.institution }} | {{ c.collection }} | {{ c.platform }} | {{ c.contact }} | 
{% endfor -%}
