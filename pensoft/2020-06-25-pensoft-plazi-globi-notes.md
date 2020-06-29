---
status: unlisted
---

## GloBI Pensoft Plazi technology brainstorming 

See also https://docs.google.com/document/d/1EPZRD-oCR0kWa_9b-KcSTlQ4uYerYg0iO4_xxrTX9JE and https://globalbioticinteractions.org/pensoft . 

## Date/time 
Thursday June 25, 2020 17 EEST/16 CEST

## Location
Meeting link https://global.gotomeeting.com/join/374772109

You can also dial in using your phone.
United States: +1 (646) 749-3122

Access Code: 374-772-109

## Meeting Agenda

1. Discuss Pensoft’s workflow for detecting tables containing biotic interactions
See presentation: https://docs.google.com/presentation/d/189N6yJWkOj_LX1kdPhstXTEWcN0RbetK1yKtXJPuZrw/edit?usp=sharing , see also [exported pdf](./2020-06-25-pensoft-plazi-globi-presentation.pdf)

2. Integration between GLoBI and OpenBiodiv - bird-parasite example

3. Create Action Plan for extraction of biotic interactions from publications
Nanopublications

## Attendees:
Mariya Dimitrova

Georgi Zhelezov

Donat Agosti

Lyubomir Penev

Jorrit Poelen

## Notes

Lyubo: emphasizes this work if part of Mariya's PhD work and we'd like to approach this integration systematically. Expected outputs are: publications, documentation and a functional integration between Pensoft <> GloBI, including: 
(a) Federation between GloBI and OpenBiodiv (b) xml-based integration (c) using nano-publications to publish curated biotic interactions extracted from literature

Mariya presents on detecting tables with likely interactions. 

GloBI's Taxon Graph - Poelen, Jorrit H. (2020). Global Biotic Interactions: Taxon Graph (Version 0.3.24) [Data set]. Zenodo. http://doi.org/10.5281/zenodo.3905244

OBO Relations Ontology keeps a GitHub issue tracker.

Mariya proposes to develop a tool to help create nanopublications in the context of an existing publication / table. 

https://zookeys.pensoft.net/article/50738/element/7/0/rhadinaea/ I am not sure you, Jorrit, has seen how our Pensoft Taxon Profile works? This is just an example - you can click on any taxon name in a Pensoft article

Lyubo regarding nanopublications: the origin is the paper from which the statement originated, the provenance is the curator who ‘approved’ the nanopublication

Jorrit: We can implement a system to publish refutations of statements as nanopublications - something which is not done in traditional publishing is to continue the review process after publication.

Lyubo: We can develop a nanopublication server/platform where nanopublications will be published and curator can approve them; also a messaging service allowing organisations like COL and GloBI to ingest new nanopublications

Jorrit: We do not need 1 central place for nanopublications 

Lyubo: We need to focus on a nanopublication format to suit our ideas (Jorrit: “tailored RDF”)

Jorrit: Plazi and Pensoft are data sources and GloBI is an indexer but it can become also a source for nanopublications as it echoes back the information it indexed (entities exchanging information)

Mariya presented a federated query (figure) example 
Lyubo: It will be nice to have a graph visualisation of GloBI-OpenBiodiv federated queries to show how the resources are linked across the two


## Next steps / action plan:
1. (Jorrit/ Mariya, ~ days) to create a github repository for storing json blobs related to the detected tables (static archives)<-- "pensoft-interaction-tables"
2. (Jorrit, ~ weeks) index the json blob in "pensoft-interaction-tables" using vague interaction terms like name X interacts with name Y, but provide direct links to the published table
3. (Mariya, ~weeks) extract interaction statements from the json blobs
4. (Mariya, ~weeks ) express interaction statement in term of nanopublications ( e.g., https://github.com/globalbioticinteractions/globalbioticinteractions/wiki/Nanopubs )
5. (Jorrit, depends on 3., 4.) index Pensoft generated nanopublications that describe species interactions
6. (Jorrit/Lyubo/Mariya, ~ ) think of "paper prototypes" of applications of federation between GloBI <> OpenBiodiv (where OpenBiodiv = Plazi U Pensoft "knowledge graph")
7. (Jorrit, ~days) implement a taxon name link to Plazi or Pensoft via OpenBiodiv on the Global Biotic Interactions web page 
8. (Donat/Mariya, ~ weeks) schedule a meeting to explore ways to reuse Mariya's annotator tools to extract statements from non-Pensoft tables (or any other free text using any vocabulary list)  (depends on 3. 4.)
9. (Jorrit, ~ days) - update https://globalbioticinteractions.org/pensoft update the integration profile with existing/desired workflows
10. (Mariya, ~ years) - write a publication 

