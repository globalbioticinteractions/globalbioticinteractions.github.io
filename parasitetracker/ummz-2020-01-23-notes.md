---
status: unlisted
---
# Parasite Tracker / University of Michigan Museum of Zoology (UMMZ) Meeting Notes

## Date / Time 
23 Jan 2020 13:00 EST (Thu)  

video/voice @ https://whereby.com/jhpoelen

notes @ https://pad.carpentries.org/parasitetracker-ummz

## Attendees 
Erika (UMMZ), Barry (UMMZ), Jorrit (GloBI)

## Agenda  
1. Revisit UMMZ goals / GloBI
2. GloBI Q&A / UMMZ Collection Q&A
3. Review existing Specify integration profile at https://globalbioticinteractions.org/parasitetracker#specify
4. Discuss / document record linking strategy for UMMZ based on examples UMMZI-156823 (associated with bat guano FMNH 74-348) / UMMZI-167581 (associated with bird UMMZ 232420) / UMMZI-178049 (associated with Aves Passeriformes Parulidae Parkesia motacilla)
5. Identify next steps to further detail/ implement 4.

## Action Items
1. Erika to share manual database export with Jorrit
2. Jorrit to find UMMZ collections in SCAN/ GBIF/ iDigBio networks
3. Jorrit to share documented record indexing strategies
4. Jorrit to analyze manual database export and outline method to implement indexing strategies (see also https://github.com/globalbioticinteractions/globalbioticinteractions/issues/452 ). 
5. Jorrit to consider adding lifestage information to GloBI search pages (see also https://github.com/globalbioticinteractions/globalbioticinteractions/issues/379 ).

## Notes

Erika - UMMZ goals is to make our records as usable as possible. Linking the parasite-host records through GloBI works towards that. 

Jorrit - GloBI's goal is to make sure that interaction records are more easily found and accessed. 

Barry - Definitions of the interaction terms are important and dependent on who you talk to you.

Erika - Our records, birds mites show 

Barry - for some species, the life stages are tied to multiple kinds of interactions. For instance a nest mites disperse in some life stage, in other stages they might take nutrients from the host  
Need something on GloBI that says what life stage the interaction is for and multiple relationship options for one specimen/record

Erika - re:  https://globalbioticinteractions.org/parasitetracker#specify . Our records are indexed by GBIF via an IPT hosted at UMich including birds, mammal, herps, fish, mollusks, herbarium, insect collections . SCAN somehow also picks up our records from the insect collection (mollusks?).

Erika - our collections have different database instances but all use Specify. 

Barry - our collection ~ good number of specimen come from host specimen from other institutions. Field Museum, US National Museum, Natural History Museum London, Museum in Copenhagen. There's much effort put into cross-referencing host records with their parasites. Also, we have records of bird mites came from large project in 1950s in Asia from netted birds. includes bird identification, locality, date/time. 

Erika - all of our slides should have relatively complete information about the host/parasite specimen. Two methods for collection: (1) catch/descard host (non-vouchered), (2) borrow/inspect host specimen from local/other institution (vouchered)

Barry - sometimes it is tricky to keep track of the returned host specimen. 

Jorrit - lets come up with a recipe to capture (1) non-vouchered interaction host (2) vouched interaction hosts .

(2) Vouchered interaction hosts 

1. find out host institution from the catalog number
2. lookup/determine catalog numbering scheme related to candidate institution/collection
3. find candidate associated host record at candidate institution with catalog/lot number 
4. review /confirm likely linkages
5. GloBI can now index the found host records and associate them with the parasite record

(1) Non-vouchered interaction hosts

1. extract associated host taxon names from parasite record
2. GloBI indexes host-parasite based on the taxon name only.

 Erika - next steps: figure out a way to get our records on GloBI via IPT, SCAN or GBIF . 
 
 Jorrit - next steps: find the UMMZ IPT, SCAN, GBIF . Would be helpful to get a manual database export containing all the parasite and host records information. 






