---
layout: default
title: Data Integration Process
---

## Data Integration Process

To enable the discovery of existing species interaction datasets, Global Biotic Interactions (GloBI) continuously tracks existing datasets and integrates the discovered interaction records. These integrated interaction records form the basis for the [GloBI data products](/data).   


[![integration-process](/assets/integration-process.svg)](/assets/integration-process.svg)

The integration process consists of the following processes:

a. ```track``` Every other day, [Elton](https://github.com/globalbioticinteractions/elton) is used to execute ```elton track```. This command queries GitHub and Zenodo for species interactions datasets. Now, all resources related to these datasets are downloaded, versioned and stored. Once in a while, a collection volume of these versioned datasets is added to the [Elton Dataset Cache](https://doi.org/10.5281/zenodo.2007418). 


b. ```resolve``` Regularly, as part of the automated [taxon-graph-builder](https://github.com/globalbioticinteractions/taxon-graph-builder) program, [Elton](https://github.com/globalbioticinteractions/elton) command ```elton names``` is used to extract all names from the versioned datasets. Now, [Nomer](https://github.com/globalbioticinteractions/nomer) is used to associate verbatim names to (taxonomic) names known to existing name authorities (e.g., [ITIS](https://itis.gov), [WoRMS](https://marinespecies.org)) using existing services (e.g., https://resolver.globalnames.org, ITIS data products, NCBI api) (e.g., [ITIS](https://itis.gov), [WoRMS](https://marinespecies.org)). The resulting name links are recorded in a name link table. Once updated, the name link table is published as part of the [GloBI Taxon Graph](https://doi.org/10.5281/zenodo.755513).   

c. ```integrate``` Every other day, GloBI's Index Builder takes the most recent versions of species interaction datasets, extracts the interactions and integrates the resulting records using, among other things, a published version of the name link table. The resulting integrated, or interpreted, species interaction data forms the basis of the [GloBI data products](/data).

## References

[1] Elton is a command-line tool to help track, version and access species interaction data. See https://github.com/globalbioticinteractions/elton and https://doi.org/10.5281/zenodo.998263.

[2] Versioned datasets, or GloBI's Elton Dataset Cache, contains versioned species interactions datasets and are the result of the ```elton update``` command. See also https://doi.org/10.5281/zenodo.2007418 . 

[3] Nomer is a command-line tool to help map identifiers and names to taxonomic names and ontological terms. See https://github.com/globalbioticinteractions/nomer/ and https://doi.org/10.5281/zenodo.1145474 .

[4] Taxon Graph Builder is a script using standard linux tools to map (new) names in versioned interaction datasets to known name concepts. The process produces a version of a GloBI Taxon Graph.

[5] Name link table, or GloBI Taxon Graph, is the (published) outcome of the Taxon Graph Builder. The link table associated verbatim names to known taxon name concepts. See published versions at https://doi.org/10.5281/zenodo.755513 .

[6] GloBI's Index Builder is an automated process that integrates versioned datasets and a published name map (e.g., GloBI's Taxon Graph) to create integrated species interaction data products at https://globalbioticinteractions.org/data . See also https://github.com/globalbioticinteractions/globalbioticinteractions/ . 
[7] Intepreted, or integrated, interactions are one of the outcomes of the described GloBI processes. You can find them via https://globalbioticinteractions.org/data . 

