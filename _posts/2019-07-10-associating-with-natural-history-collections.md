---
layout: post
title: Associating with Natural History Collections
date: 2019-07-10
excerpt: Natural history collections contain essential building blocks for our scholarly record — physical evidence. Through persistent, often slightly obsessive, work by generations of curators and collection managers, millions of physical specimens have withstood the tooth of time.
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

<div class="figure figure-globi left"><a href="https://arctosdb.org" target="_blank"><img
        src="/assets/arctos-logo.png" alt="Arctos"/></a>

    <div class="figcaption">
        <p>"More than a data management system for museum collections, we are a community of curators and researchers dedicated to responsible curation and education." — <a href="https://arctosdb.org" target="_blank">https://arctosdb.org</a> accessed on 10 July 2019.
        </p>
    </div>
</div>


Natural history collections contain essential building blocks for our scholarly record: physical evidence. Through painstaking, often slightly obsessive, work by generations of curators and collection managers, millions of physical specimens have withstood the tooth of time in drawers, boxes, closets and jars. Over the years, digital management tools have been introduced to keep track of these valuable specimens and list them with national and global indexes, registries and databases. One such collection-management tool is [Arctos](https://arctosdb.org). 

My first introduction to Arctos was through [Kayce Bell](http://www.kaycebell.com), who I met at the [Open Tree of Life Hack-a-thon in 2014](https://www.globalbioticinteractions.org/2014/10/24/eating-of-pudding#open-tree-hack-a-thon). I learned that she had painstakingly gone through existing chipmunk (Tamias sp.) specimens and extracted parasite specimens from their bodies. She used Arctos not only to record specimen details, but also to establish an explicit relationship between the host, the chipmunk, and the parasite feeding on it (e.g., [http://arctos.database.museum/guid/MSB:Para:27069](http://arctos.database.museum/guid/MSB:Para:27069)).

<div class="figure figure-globi right">
    <img src="/assets/chipmunk.jpg" alt="Chipmunk (Tamias sp.) specimens."/>
    <div class="figcaption">
        <p>Example of chipmunk specimens that Kayce worked with. Top to bottom: <em>Tamias townsendii</em> (<a href="http://arctos.database.museum/guid/MSB:Mamm:233582">MSB:Mamm:233582</a>), <em>Tamias speciosus</em> (<a href="http://arctos.database.museum/guid/MSB:Mamm:259343">MSB:Mamm:259343</a>), <em>Tamias amoenus</em> (<a href="http://arctos.database.museum/guid/MSB:Mamm:269867">MSB:Mamm:269867</a>). Image courtesy of Adrienne Raniszewski. 
        </p>
    </div>
    <img src="/assets/chipmunk_lice.jpg" alt="Chipmunk lice (Hoplopleura sp.) specimens."/>

    <div class="figcaption">
        <p>Example of parasitic lice (<em>Hoplopleura arboricola</em>) specimens (with chipmunk hair!) extacted from a chipmunk specimen. Image provided by Kayce Bell. 
        </p>
    </div>
</div>


Years later, at the [2nd Annual Digital Data in Biodiversity Research Conference in Berkeley, CA](https://www.idigbio.org/wiki/index.php/Digital_Data_in_Biodiversity_Research_Conference,_Berkeley), I was fortunate to have [lunch](http://curiositydata.org/Meeting-the-Modern-Naturalists_at_the_digital_data_conference/#highlights-with-links) with Mariel Campbell, current Arctos working group chair, and [Ciera Martinez](http://cierareports.org), an evolutionary biologist and lover of all things data. In this lunch conversation, I learned that Arctos is not just a carefully designed and maintained collection-management system, but also a thriving, active, self-governing, community that provides research-grade data, [training](https://www.youtube.com/watch?v=miVsxdMuGEs) and a [let's-make-it-work subscription model](https://arctosdb.org/join-arctos/financial-contributions/).

Some weeks ago, at the [2019 Annual Meeting of the Society for Preservation of Natural History Collections in Chicago](https://www.spnhcchicago2019.com), I reconnected with Mariel and also met Teresa Mayfield-Meyer, current Arctos working group treasurer. Soon after some more exciting conversations on the benefits of linking data (see Teresa's [excellent post](https://arctosdb.org/arctos-collaboration-with-global-biodiversity-interactions-globi/) for a summary), we built the first bidirectional link between Arctos and GloBI, with the technical support of Dusty McDonald. With this integration, you can more easily [find Kayce's chipmunk parasite specimens](https://globalbioticinteractions.org/?interactionType=hasParasite&sourceTaxon=Tamias%20speciosus) and [related research](https://globalbioticinteractions.org/references?interactionType=hasParasite&sourceTaxon=Tamias%20speciosus), such as [Baker et al. 2017](#baker) and [Durden et al. 1994](#durden) as well as Kayce's research paper ([Bell et al. 2015](#bell)). 

Just like it took generations to come up with strategies to preserve physical specimens, I expect it will take years, or perhaps even decades, to create sustained and useful links between digital datasets. I am hoping to continue to draw inspiration from curators and natural history collection managers through communities like Arctos to help contribute to improving ways to access our digital legacy.

Thanks to [Carl Boettiger](https://carlboettiger.info), [Janeen Jones](https://www.linkedin.com/in/janeen-jones-6b682729), [Kate Webbink](https://www.linkedin.com/in/kate-webbink-40b66751) and the [Field Museum](https://fieldmuseum.org)'s Grainger Bioinformatics Center, for providing support to attend, mingle and present ([1](https://www.idigbio.org/wiki/images/a/a1/1-Poelen-frugal_tools_2018-06-04.pdf), [2](https://doi.org/10.17605/OSF.IO/A2V8G)) at the [Digital Data in Biodiversity Research Conference](https://www.idigbio.org/wiki/index.php/Digital_Data_in_Biodiversity_Research_Conference,_Berkeley) and the [Annual Meeting of the Society for Preservation of Natural History Collections](https://www.spnhcchicago2019.com).

### References 

<span id="baker"></span>
Ed Baker; Ian J. Kitching; George W. Beccaloni; Amoret Whitaker; Steen Dupont; Vincent S. Smith; John S. Noyes (2017). NHM Interactions Bank. [doi:10.5519/0060767](https://doi.org/10.5519/0060767). 

<span id="bell"></span>
Bell, K. C., Matek, D., Demboski, J. R., & Cook, J. A. (2015). Expanded Host Range of Sucking Lice and Pinworms of Western North American Chipmunks. Comparative Parasitology, 82(2), 312–321. [doi:10.1654/4756.1](https://doi.org/10.1654/4756.1).

<span id="durden"></span>
Durden, Lance A., and Guy A. Musser. The Sucking Lice (Insecta, Anoplura) of the World: A Taxonomic Checklist with Records of Mammalian Hosts and Geographical Distributions. Bulletin of the AMNH; No. 218. New York: American Museum of Natural History, 1994. Web. Also see [http://hdl.handle.net/2246/825](http://hdl.handle.net/2246/825).
