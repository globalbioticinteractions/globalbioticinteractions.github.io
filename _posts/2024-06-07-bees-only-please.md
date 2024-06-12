---
layout: post

title: "Bees Only Please: Selecting Hundreds of Thousands of Possible Bee Interactions Using a Laptop, Open Datasets, and Small (but Mighty) Commandline Tools." 
author: Jorrit Poelen and Katja C. Seltmann
date: 2024-06-07
excerpt: "Bees play a crucial role in food production and as pollinators of wild plants. Increasingly, datasets describing bee-plant interactions are becoming openly available. The Big Bee project and GloBI collaborate to facilitate access to these valuable bee interaction records. In this context, we outline a method for accessing biotic interactions involving bees, including records of bees visiting flowers, bee parasites, and hosts of these parasites. Using commonly available tools and open resources, we demonstrate how to build a bee interaction dataset using a known and customizable data processing workflow that can run on a laptop." 
categories:
- bioinformatics
- biology
- ecology
- open data
- species interactions
- bees
- Anthophila
tags: []
status: draft
type: post
published: true
---

⚠️ Work in Progress ⚠️

<div class="figure figure-globi right">
  <img src="/assets/bees-only.svg" alt=""/>
    <div class="figcaption"><em>Figure 1.</em> A method for selecting interactions involving at least one bee using openly available data and tools.</div> 
</div>

As pollinators, bees play a major role in food production and ecosystems. Many datasets describing bee-plant interactions are becoming openly available. In their partnership, the [Big Bee project](https://big-bee.net) [`[1]`](#1) and [Global Biotic Interactions (GloBI)](https://globalbioticinteractions.org/bigbee) [`[2]`](#2) work together to facilitate access to these valuable bee interaction records. Here, we outline a method for accessing biotic interactions that involve Anthophila, commonly known as bees. These interactions includes records of bees visiting flowers, parasites of bees as well as hosts of social parasitic bees. Using commonly available tools and open resources, we show how to build an interaction dataset only involving Anthophila (bees) using a known, and customizeable, data processing workflow and commonly available hardware.

## Ingredients

 * GloBI's verbatim interaction records [`[3]`](#3) 
 * DiscoverLife Bee Checklist as made available via Nomer [`[4]`](#4), [`[5]`](#5)
 * Lenovo T480s Laptop running Ubuntu 22.04.1 LTS 
 * Familiarity with the Unix Shell [`[6]`](#6), [`[7]`](#7)
 * GloBI's Interaction Data Review Report Framework

## Selecting Bee Interactions

Figure 1. shows an approach to select biotic interactions involving bees in a verbatim interactions table from GloBI's Interpreted Data Products. 

First (Fig 1a), the taxonomic names are parsed using GBIF's taxonomic name parser. 

Following (Fig 1b), the parsed names are aligned with the DiscoverLife Bee Taxonomic Checklist as defined in Nomer's Corpus of Taxonomic Resources. 

Then (Fig 1c), interactions are only included when one or more known bee family name (i.e., Andrenidae, Apidae, Colletidae, Halictidae, Megachilidae, Melittidae, Stenotritidae) are mentioned.

Finally (Fig 1d), a review report is generated for the generated specific subset of biotic interactions that mention at least one bee name per interaction.

This approach was implemented in a bash script [`select-bee-interactions.sh`](https://github.com/Big-Bee-Network/select-bee-interactions.sh/blob/main/select_bee_interactions.sh). This scripts combines openly available tools (e.g., GloBI's Nomer [`[5]`](#5), GNU's Grep) to process openly available interaction data [`[3]`](#3). 

This script was run on two different interaction datasets (GloBI v0.6/v0.7) and the results can be found at (https://github.com/Big-Bee-Network/select-bee-interactions.sh)[https://github.com/Big-Bee-Network/select-bee-interactions.sh] and in the table below.

 *output / version* | **GloBI Data [v0.7](https://doi.org/10.5281/zenodo.11552565)** | **GloBI Data [v0.6](https://doi.org/10.5281/zenodo.8284068)**
 **input data** | [`verbatim-interactions.tsv`](https://linker.bio/gz:hash://md5/7e11573d83b2bac6425ee2482c4d73bc!/verbatim-interactions.tsv) 13.9M records | [`verbatim-interactions.tsv`](https://linker.bio/gz:hash://md5/a18697d59e5f6756c22d8c4a1346685e!/verbatim-interactions.tsv) 20.0M records
 **filtered interactions** | [`bees-only-interactions.tsv`](https://linker.bio/gz:hash://sha256/85aef194ba1e084c2c02d409929bba28d7f1bf051a27a8889543d071868cb729!/bees-only-interactions.tsv) (also [here](https://github.com/Big-Bee-Network/select-bee-interactions.sh/blob/0ca199f682ed5e24aec8ca30031cbabd1723d655/examples/2024-06-07/bees-only-interactions.tsv.gz)) 1.4M records | [`bees-only-interactions.tsv`](https://linker.bio/gz:hash://sha256/655dab8ccb6ac71206c52fca2a8d6637eaafa32b52c21bf2783e222cc5d67f02!/bees-only-interactions.tsv) 1.1M records (also [here](https://github.com/Big-Bee-Network/select-bee-interactions.sh/blob/0ca199f682ed5e24aec8ca30031cbabd1723d655/examples/2023-08-25/bees-only-interactions.tsv.gz))
 **review report** | [`bees-only-review.pdf`](https://linker.bio/hash://sha256/26cbd99759c4d336389dc5b06602cb6026e1e8d68b1209aebf441ec526d40db1.pdf) (also [here](github.com/Big-Bee-Network/select-bee-interactions.sh/blob/5f6536c10f251b42fff370c8bb6be092d8d30fc8/examples/2024-06-07/bees-only-review.pdf)) | [`bees-only-review.pdf`](https://linker.bio/hash://sha256/ee962b0f99b3762f9f0fa9583e6ad3e76ff1be3d05bd3777a7f68ae0d77de3f7.pdf) (also [here](https://github.com/Big-Bee-Network/select-bee-interactions.sh/blob/5f6536c10f251b42fff370c8bb6be092d8d30fc8/examples/2023-08-25/bees-only-review.pdf))

These results suggests that relatively complex and custom biodiversity data integrations with large datasets (>1M records) can be achieved on modest hardware with carefully selected tools, openly available datasets, using the nible yet powerful Unix shell, and leveraging available data publication platforms. 

The output from this work is currently being used by Big Bee to create a global dataset of bee interactions that includes taxon name alignment based on DiscoverLife. That dataset currently includes over half a million records of global bee species interacting with plants, parasites and other organisms [`[8]`](#8).

## Future Work

I suspect I'll be reusing the [`select-bee-interactions.sh`](https://github.com/big-bee-network/select-bee-interactions.sh) script in the future to create similar custom data processing workflows. . . and I am curious how others approach the challenge of integration biodiversity data to answer a specific (research) question. So, I'll close out by asking a question:

> What other approach can you think of get an extensive list of species interaction data involving bees compiled from known and open datasets?



## References

#### [1] 
Seltmann, K., Allen, J., Brown, B. V, Carper, A., Engel, M. S, Franz, N., et al. (2021). Announcing Big-Bee: An initiative to promote understanding of bees through image and trait digitization. Biodiversity Information Science and Standards, 5(e74037). [doi:10.3897/biss.5.74037](https://doi.org/10.3897/biss.5.74037) Retrieved from [https://escholarship.org/uc/item/0937b5gp](https://escholarship.org/uc/item/0937b5gp)

#### [2]
Jorrit H. Poelen, James D. Simons and Chris J. Mungall. (2014). Global Biotic Interactions: An open infrastructure to share and analyze species-interaction datasets. Ecological Informatics. [https://doi.org/10.1016/j.ecoinf.2014.08.005](https://doi.org/10.1016/j.ecoinf.2014.08.005).

#### [3]
GloBI Community. (2024). Global Biotic Interactions: Interpreted Data Products hash://md5/946f7666667d60657dc89d9af8ffb909 hash://sha256/4e83d2daee05a4fa91819d58259ee58ffc5a29ec37aa7e84fd5ffbb2f92aa5b8 (0.7) [Data set]. Zenodo. [https://doi.org/10.5281/zenodo.11552565](https://doi.org/10.5281/zenodo.11552565)

#### [4]
Ascher, J. S. and J. Pickering. 2024. Discover Life bee species guide and world checklist (Hymenoptera: Apoidea: Anthophila). [http://www.discoverlife.org/mp/20q?guide=Apoidea_species](http://www.discoverlife.org/mp/20q?guide=Apoidea_species).

#### [5]
Poelen, J. H. (ed . ) . (2024). Nomer Corpus of Taxonomic Resources hash://sha256/83617875e84bb8ae7ac2a257ad50eb8e82d8935d975f465b8ee8f3a803f72b48 hash://md5/c639d7e3fcd5603f6c48e9d5e6c49672 (0.24) [Data set]. Zenodo. [https://doi.org/10.5281/zenodo.11105453](https://doi.org/10.5281/zenodo.11105453)

#### [6] 
Danielle Kane (Ed.), Anna Oates (Ed.), John Wright (Ed.), Nilani Ganeshwaran (Ed.), Tim Dennis (Ed.), Belinda Weaver (Ed.), James Baker, Christopher Erdmann, Dan Michael Heggø, Katrin Leinweber, hugolio, … Vikram Chhatre. (2019, July). LibraryCarpentry/lc-shell: Library Carpentry: The UNIX Shell, June 2019 (Version v2019.06.1). Zenodo. [https://doi.org/10.5281/zenodo.3266085](https://doi.org/10.5281/zenodo.3266085) Accessed at [https://librarycarpentry.org/lc-shell/](https://librarycarpentry.org/lc-shell/) on 2024-06-11 .

#### [7] 
Seltmann & Poelen. 2021. A Practical Exploration of Biotic Interaction Data Management and Information Retrieval through Terrestrial Parasite Tracker (TPT) and Global Biotic Interactions (GloBI) [Workshop]. Zenodo. [doi:10.5281/zenodo.4759060](https://doi.org/10.5281/zenodo.4759060) Access at [https://www.globalbioticinteractions.org/interaction-data-workshop/03-ixodes-whole-dataset/](https://www.globalbioticinteractions.org/interaction-data-workshop/03-ixodes-whole-dataset/) on 2024-06-11 . 

#### [8]
Katja C. Seltmann, & Global Biotic Interaction Community. (2024). Global Bee Interaction Data (v3.0) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.10552937
