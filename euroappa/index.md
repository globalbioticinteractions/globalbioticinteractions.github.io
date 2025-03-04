---
layout: default
title: "EuroAPPA"
status: unlisted
---

⚠️ this page is under construction, unofficial, and is likely incomplete ⚠️

[edit](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/edit/main/euroappa/index.md) / [contact via GitHub](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/new?title=about%20EuroAPPA%20.%20.%20.%20&body=HI%21%0A%0AI%20noticed%20your%20page%20at%20https%3A%2F%2Fglobalbioticinteractions.org%2FEuroAPPA%20and%20I%27d%20like%20to%20...%0A%0AThanks%2C%0A%5Byour%20name%5D) / [contact via email](mailto:euroappa@globalbioticinteractions.org?subject=about%20EuroAPPA%20.%20.%20.%20&body=HI%21%0A%0AI%20noticed%20your%20page%20at%20https%3A%2F%2Fglobalbioticinteractions.org%2FEuroAPPA%20and%20I%27d%20like%20to%20...%0A%0AThanks%2C%0A%5Byour%20name%5D)

EuroAPPA aims to be a:

> [...] One-stop shop for animal pollinator ecology: BUTTERFLY’s European Atlas of Plant-Pollinator Associations (EuroAPPA) will provide user-friendly access for all stakeholders to the most complete taxonomically-harmonised well-curated database of plant-pollinator interactions ever produced for Europe and three Overseas Territories/Outermost Regions. [...]

and is a key result defined in the [BUTTERFLY](https://cordis.europa.eu/project/id/101181930) proposal. 

The [BUTTERFLY](https://cordis.europa.eu/project/id/101181930) project is about "Mainstreaming pollinator stewardship in view of cascading ecological, societal and economic impacts of pollinator decline" and relates to the EU Horizon call: [HORIZON-CL6-2024-BIODIV-01-3](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl6-2024-biodiv-01-2) — `Biodiversity and ecosystem services (HORIZON-CL6-2024-BIODIV-01) / Dependence of society and the economy on pollinators`.

This page contains references to EuroAPPA and related projects with a specific focus on species interactions (e.g., plant-pollinator) datasets.  

# Monthly Meeting

First Tuesdays at 07:00 US Central / 13:00 Sussex / 14:00 Central European Time.

[rolling meeting notes (google doc)](https://docs.google.com/document/d/1MDfcQESQh9abAxIhAs4gCRi88SnTP0s39bscvsREgto/edit), [notes.pdf (versioned snapshot)](./notes.pdf)



# Events

 **2024-02-22** - Deadline EU Horizon's [Biodiversity and ecosystem services (HORIZON-CL6-2024-BIODIV-01)](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl6-2024-biodiv-01-2)  

 **2024-07-01** - EuroAPPA meeting to discuss ways to collaborate and organize within BUTTERFLY and across other initiatives. See  [meeting notes](https://docs.google.com/document/d/1MDfcQESQh9abAxIhAs4gCRi88SnTP0s39bscvsREgto/edit).
 
 **2025-03-01** - [BUTTERFLY](https://cordis.europa.eu/project/id/101181930) official start date see also [https://cordis.europa.eu/project/id/101181930](https://cordis.europa.eu/project/id/101181930).

 **...**

# Partners 

EuroAPPA aims to work with the 24 BUTTERFLY partners to help (1) mobilizing existing data (2) access to newly collected data (3), to facilitate processing datasets into model output. 

## List of Partners 

[The Database of Pollinator Interactions (DoPI)](https://www.sussex.ac.uk/lifesci/ebe/dopi/about) see also [#780](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/780) . 

[BeeLife.eu](https://bee-life.eu) 


...

# Dataset Review

To help better understand existing datasets, EuroAPPA aims to review datasets. The list below contains the list of dataset selected for review.

Click on badges to browse/download indexed records or inspect automated reviews.

[edit dataset list](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/_data/euroappa.tsv)

{% assign cols = site.data.euroappa | sort: "dataset" -%}
{% for c in cols -%}
{%- assign globi-badge = c.globi_id | url_encode | prepend: "https://api.globalbioticinteractions.org/interaction.svg?accordingTo=" -%}
{%- assign globi-url = c.globi_id | url_encode | prepend: "https://globalbioticinteractions.org/?accordingTo=" -%}
[![badge]({{ globi-badge }})]({{ globi-url }}) <a href="#{{ c.dataset }}">{{ c.dataset }}</a> {{ " / " }}
{%- endfor %}

|status|<ins>M</ins>etadata\|<ins>D</ins>ata\|<ins>R</ins>eview|dataset|contact|
|---|---|---|---
{% assign cols = site.data.euroappa | sort: "dataset" -%}
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
[![review-badge]({{ review-badge }})]({{ review-url }}) [![badge]({{ globi-badge }})]({{ globi-url }}) [![badge]({{ config-badge }})]({{ config-url }}) [![badge]({{ issues-badge }})]({{ issues-url }}) | <span class="{{ c.metadata_access }}" title="At this time, metadata of dataset {{ c.dataset }} is {{ c.metadata_access }} access.">M</span> \| <span class="{{ c.data_access }}" title="At this time, data of dataset {{ c.dataset }} is {{ c.data_access }} access.">D</span> \| <a href="https://doi.org/{{ c.review_doi }}"><span class="{{ c.review_report_access }}" title="At this time, the review report of dataset {{ c.dataset }} is {{ c.review_report_access }} access.">R</span></a> | <span id="{{ c.dataset }}">{{ c.dataset }}</span> | {{ c.contact }} | 
{% endfor %}


# Related Initiatives


[Running List of Related Initiatives](https://docs.google.com/document/d/1MDfcQESQh9abAxIhAs4gCRi88SnTP0s39bscvsREgto/edit?tab=t.bcaxfrmawmxl). For a versioned snapshot of this list, see [related-projects.pdf](related-project.pdf).

[EU Pollinator Hub](https://pollinatorhub.eu). See also [#991](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/991).

[SafeGuard](https://www.safeguard.biozentrum.uni-wuerzburg.de) / [SafeHub](https://www.safeguard.biozentrum.uni-wuerzburg.de/Project/SafeHub.aspx) (used by VALOR developed by Pensoft). See also [#989](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/989) and [SafeGuard Database Download ](https://www.safeguard.biozentrum.uni-wuerzburg.de/Download/Download.aspx) and [EuPPollNet](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/1041).
 
[VALOR](https://cordis.europa.eu/project/id/101181169) - see [synergy meeting notes](https://docs.google.com/document/d/1kMT17tVcH-hU1dBYdEbIoYHyELvNHpwPH9WoLwefqNI/edit?usp=sharing)

[Big Bee](https://big-bee.net) see also [GloBI's Big Bee Page](https://globalbioticinteractions.org/bigbee). 

[WorldFAIR WP10 on Agricultural Biodiversity](https://globalbioticinteractions.org/worldfair) - The WorldFAIR Case Study on Agricultural Biodiversity (WP10) addresses the challenges of advancing interoperability and mobilising plant-pollinator interactions data for reuse.  

[BatBase](https://batbase.org) - formerly called ```batplant.org``` this project indexes bat interactions including bat pollinations. BatBase is part of  [GBatNet's Eco-interactions Working Group](https://globalbioticinteractions.org/gbatnet). 

