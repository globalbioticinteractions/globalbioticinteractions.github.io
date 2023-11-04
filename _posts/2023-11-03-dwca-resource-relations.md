---
layout: post
title: Field Museum and iNaturalist Adopt Darwin Core Resource Relationship Standard to Share Species Interaction Records 
author: Jorrit Poelen
date: 2023-11-03
excerpt: The Field Museum and iNaturalist capture detailed records on how species interact. They both showed their capacity to innovate by using the recently improved Darwin Core Resource Relationship extensions to publish their interaction records. By using this standards based approach, they facilitate access to the valueable biodiversity knowledge they keep, and provide examples for others to follow. 
categories:
- bioinformatics
- biology
- ecology
- open data
- species interactions
- Cayman Islands
tags: []
status: 
type: post
published: true
---

Life on earth is sustained by a complex interplay between organisms and their environment. [Global Biotic Interactions](https://globalbioticinteractions.org) (GloBI) helps to make records of these interactions easier to find by tracking and indexing digital datasets containing descriptions of how organisms interact. [TDWG](https://tdwg.org)'s [Darwin Core](https://www.tdwg.org/standards/dwc/) has long been used to exchange information about where organisms are seen. Recently, the Field Museum and iNaturalist switched to using the [Darwin Core Resource Relationship extension](https://dwc.tdwg.org/terms/#resourcerelationship) to share how organisms _interact_.

The Field Museum holds millions of preserved specimen in their natural history collections. And some of these specimen are parasites that were found on their host. For instance, the Field Museum Insect collection contain a preserved specimen of an adult male flea Trichopsylloides oregonensis Ewing, 1938 [FMNH FMNHINS 0004 345 536](https://db.fieldmuseum.org/65167e0f-0e31-4884-a34e-577ffdb54545) collected on 17 April 1971 by C. O. Maser in Tillamook, Oregon, USA at the Cascade Head Experimental Forest. And, according to their records this flea was found on a mountain beaver (_Aplodontia rufa_  (Rafinesque, 1817) ).

<table>
<caption><p><em>Table 1. Top 5 most frequently reported interaction claims in Field Museum Collections are parasitic interactions between flies (Diptera) and bats (Chiroptera). Data was extracted from a <a href="/assets/fmnh-review-2023-10-30.pdf">A data review report produced on 30 October 2023</a>.</em></p></caption>
<colgroup>
<col style="width: 25%">
<col style="width: 25%">
<col style="width: 25%">
<col style="width: 25%">
</colgroup>
<thead>
<tr class="header">
<th>Primary Taxon</th>
<th>Interaction Type</th>
<th>Associated Taxon</th>
<th>Count</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="https://www.catalogueoflife.org/data/taxon/7CQFK"><em>Trichobius joblingi</em> Wenzel, 1966</a></td>
<td><a href="http://purl.obolibrary.org/obo/RO_0002632">ectoparasite of</a></td>
<td><a href="https://en.wikipedia.org/wiki/Seba's_short-tailed_bat">Seba's short-tailed bat (<em>Carollia perspicillata</em>)</a></td>
<td>1377</td>
</tr>
<tr class="even">
<td><a href="https://www.catalogueoflife.org/data/taxon/3Z25Q"><em>Megistopoda proxima</em> (Séguy, 1926)</a></td>
<td><a href="http://purl.obolibrary.org/obo/RO_0002632">ectoparasite of</a></td>
<td><a href="https://en.wikipedia.org/wiki/Little_yellow-shouldered_bat">Little yellow-shouldered bat (<em>Sturnira lilium</em>)</a></td>
<td>906</td>
</tr>
<tr class="odd">
<td><a href="https://www.catalogueoflife.org/data/taxon/3Z25L"><em>Megistopoda aranea</em> (Coquillétt, 1899)</a></td>
<td><a href="http://purl.obolibrary.org/obo/RO_0002632">ectoparasite of</a></td>
<td><a href="https://en.wikipedia.org/wiki/Jamaican_fruit_bat">Jamaican fruit bat (<em>Artibeus jamaicensis</em>)</a></td>
<td>793</td>
</tr>
<tr class="even">
<td><a href="https://www.catalogueoflife.org/data/taxon/7D2FV"><em>Trichobius parasiticus</em> Gervais, 1844</a></td>
<td><a href="http://purl.obolibrary.org/obo/RO_0002632">ectoparasite of</a></td>
<td><a href="https://en.wikipedia.org/wiki/Common_vampire_bat">Common vampire bat (<em>Desmodus rotundus</em>)</a></td>
<td>775</td>
</tr>
<tr class="odd">
<td><a href="https://www.catalogueoflife.org/data/taxon/52WST"><em>Strebla wiedemanni</em> Kolenati, 1856</a></td>
<td><a href="http://purl.obolibrary.org/obo/RO_0002632">ectoparasite of</a></td>
<td><a href="https://en.wikipedia.org/wiki/Common_vampire_bat">Common vampire bat (<em>Desmodus rotundus</em>)</a></td>
<td>697</td>
</tr>
</tbody>
</table>  



[iNaturalist](https://inaturalist.org) is a popular community scientist platform used to help identify organisms in uploaded photos. They, similar to the Field Museum, also capture information about how the organism interacts with their environment. For instance, iNaturalist user [lianaj](https://www.inaturalist.org/people/lianaj) took a [picture](https://www.inaturalist.org/observations/46552699) of a Grey-headed Flying-fox (_Pteropus poliocephalus_) that fell prey to a Coastal Carpet Python (_Morelia spilota_) on 20 May 2020 in the Billinudgel Nature Reserve, Wooyung, NSW, Australia. 
  
<div class="figure figure-globi right">
  <a href="https://www.inaturalist.org/observations/46552699"><img src="/assets/inaturalist-photo-73834483.jpg" alt=""/></a>
    <div class="figcaption"><em>Figure 1.</em>(c) Liana, some rights reserved (CC BY-NC) Grey-headed Flying-fox (<em>Pteropus poliocephalus</em>) being killed and eaten by a Coastal Carpet Python (<em>Morelia spilota</em>) on 20 May 2020 in the Billinudgel Nature Reserve, Wooyung, NSW, Australia.</div>
</div>

I was able to find these records via [GloBI](https://globalbioticinteractions.org) because both the [Field Museum](https://globalbioticinteractions.org/?accordingTo=globi:globalbioticinteractions/fmnh) and [iNaturalist](https://globalbioticinteractions.org/accordingTo=globi:globalbioticinteractions/inaturalist) openly shared their interaction records using the [Darwin Core Resource Relationship Extension](https://dwc.tdwg.org/terms/#resourcerelationship). With this, the kind of interaction can be expressed in a machine readable way. This machine-readability of interaction types gives the publishers a way to point to definitions of their interaction types. For the Field Museum flea specimen [FMNH FMNHINS 0004 345 536](https://db.fieldmuseum.org/65167e0f-0e31-4884-a34e-577ffdb54545) the relation [http://purl.obolibrary.org/obo/RO_0002632](http://purl.obolibrary.org/obo/RO_0002632) or "ectoparasite of" was used. In the iNaturalist photo of the bat being eaten by a python, the relation [https://www.inaturalist.org/observation_fields/3133](https://www.inaturalist.org/observation_fields/3133) or "Observation field: Interaction->Preyed upon by" was used. 

💡 **So, if you are looking for ways to share species interaction claims in a standardized way, please consider using the [Darwin Core Resource Relationships extension](https://dwc.tdwg.org/terms/#resourcerelationship). And, if you are looking for examples - the Field Museum and iNaturalist has hundreds of thousands of those records.**

Big thanks to [Sharon Grant](https://orcid.org/0000-0002-0201-732X), [Kate Webbink](https://orcid.org/0000-0002-8347-0942), [Janeen Jones](https://orcid.org/0000-0002-1261-8049) of the Field Museum and [Patrick Leary](https://orcid.org/0000-0001-5172-8577) and [Ken-ichi Ueda](https://orcid.org/0000-0003-0145-6846) of iNaturalist for their willingness to try new things, even though though they take years to complete. To get an impression of the amount of work and time required to introduce such standardization, please see [Field Museum](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/609#issuecomment-790649340) and [iNaturalist](https://github.com/globalbioticinteractions/globalbioticinteractions/issues/427) related integration discussions. 

Also, thanks to TDWG contributors like [John Wieczorek](https://orcid.org/0000-0003-1144-0290), [Peter Desmet](https://orcid.org/0000-0002-8442-8025), [Quentin Groom](https://orcid.org/0000-0002-0596-5376), [Steve Baskauf](https://orcid.org/0000-0003-4365-3135) and many others for helping to review and approve an improvement to Resource Relationship extension that enabled machine readability of relationship types. If you'd like, you can review the history of the discussion threads related to this one seemingly small change to the Darwin Core standards at [tdwg/dwc/issue#186](https://github.com/tdwg/dwc/issues/186) and [tdwg/dwc/issue#283](https://github.com/tdwg/dwc/issues/283) - it takes a village to keep a standard alive!

Finally, this work was, in part, made possible with the financial support of NSF through projects like the [Parasite Tracker Thematic Collections Network](https://www.globalbioticinteractions.org/parasitetracker/) led by [Jen Zaspel (PI)](https://orcid.org/0000-0003-3960-0364) and [Katja Seltmann (co-PI)](https://orcid.org/0000-0001-5354-6048) via award numbers [DBI:1901932](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1901932) and [DBI:1901926](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1901926).


