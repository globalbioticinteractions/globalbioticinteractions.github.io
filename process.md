---
layout: default
title: Data Integration Process
status: unlisted
---
[edit page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/blob/main/process.md)

## Data Integration Process

To enable the discovery of existing species interaction datasets, Global Biotic Interactions (GloBI) continuously tracks existing datasets and integrates the discovered interaction records. These integrated interaction records form the basis of the [GloBI's interpreted interaction data](/data). 

The process described below is an evolution of the process described in the original GloBI methods paper (Poelen et al. 2014 [doi:10.1016/j.ecoinf.2014.08.005](https://doi.org/10.1016/j.ecoinf.2014.08.005)). 


[![integration-process](/assets/integration-process.svg)](/assets/integration-process.svg)

The integration process consists of the following phases:

a. ```track``` Every week or so, [Elton](https://github.com/globalbioticinteractions/elton) ([1]) is used to execute ```elton track```. This command queries GitHub and Zenodo for species interactions datasets registration entries (e.g., [NHM Interactions Bank](https://github.com/globalbioticinteractions/natural-history-museum-london-interactions-bank), [Soleto-Casas & Simões 2020](https://doi.org/10.5281/zenodo.3365469)). The information in these entries allow Elton (or any other tool) to locate resources that contain interaction datasets. After discovering dataset locations, all resources related to these datasets are downloaded, versioned and stored. Once in a while, a collection volume of these versioned datasets is added to the [Elton Dataset Cache](https://doi.org/10.5281/zenodo.2007418) ([2]). 


b. ```resolve``` Regularly, as part of the automated [taxon-graph-builder](https://github.com/globalbioticinteractions/taxon-graph-builder) program, [Elton](https://github.com/globalbioticinteractions/elton) command ```elton names``` is used to extract all names from the versioned datasets. Now, [Nomer](https://github.com/globalbioticinteractions/nomer) is used to associate verbatim names to (taxonomic) names known to existing name authorities (e.g., [ITIS](https://itis.gov), [WoRMS](https://marinespecies.org)) using existing services (e.g., https://resolver.globalnames.org, ITIS data products, NCBI api) (e.g., [ITIS](https://itis.gov), [WoRMS](https://marinespecies.org)). The resulting name links are recorded in a name link table. Once updated, the name link table is published as part of the [GloBI Taxon Graph](https://doi.org/10.5281/zenodo.755513) ([5]).   

c. ```integrate``` Every week or so, GloBI's Index Builder takes the most recent versions of species interaction datasets, extracts the interactions and integrates the resulting records using, among other things, a published version of the name link table ([7]). The resulting integrated, or interpreted, species interaction data forms the basis of the [GloBI's interpreted interaction data](/data).

## Bias and Errors

As with any analysis and processing workflow, care should be taken to understand the bias and error propagation of data sources and related data transformation processes.  The datasets indexed by GloBI are biased geospatially, temporally and taxonomically (Hortal et al. 2015 [doi:10.1146/annurev-ecolsys-112414-054400](https://doi.org/10.1146/annurev-ecolsys-112414-054400), Cains et al. 2017 [doi:10.5281/zenodo.814978](https://doi.org/10.5281/zenodo.814978)). Also, mapping of verbatim names from datasets to known name concept may contains errors due to synonym mismatches, outdated names lists, typos or conflicting name authorities. Finally, bugs may introduce bias and errors in the resulting integrated data product.

To help better understand where bias and errors are introduced, only versioned data and code are used as an input: the datasets, name maps and integration software are versioned so that the integration processes can be reproduced if needed. This way, steps taken to compile an integrated data record can be traced and the sources of bias and errors can be more easily found.

## Customization

The modular GloBI integration workflow is designed to facilitate maintenance, troubleshooting, scaling, and stability of the integration process. This means that, in theory, specifically curated name maps and source datasets can be used to compile an integrated data product to answer a specific research question. For instance, when studying bats and the viruses that they host, only relevant input datasets and up-to-date name maps can be curated and constructed. And, a name map can be constructed manually instead of using the Taxon Graph Builder. Alternatively, the verbatim interaction can be extracted from selected datasets using ```elton interactions``` and other tools can be used to resolve names or otherwise enrich/process the verbatim interactions.   

## Notes

[1] Elton is a command-line tool to help track, version and access species interaction data. See [https://github.com/globalbioticinteractions/elton](https://github.com/globalbioticinteractions/elton) and [doi:10.5281/zenodo.998263](https://doi.org/10.5281/zenodo.998263).

[2] Versioned datasets, or GloBI's Elton Dataset Cache, contains versioned species interactions datasets and are the result of the ```elton track``` command. See also [doi:10.5281/zenodo.2007418](https://doi.org/10.5281/zenodo.2007418) . 

[3] Nomer is a command-line tool to help map identifiers and names to taxonomic names and ontological terms. See [https://github.com/globalbioticinteractions/nomer/](https://github.com/globalbioticinteractions/nomer/) and [doi:10.5281/zenodo.1145474](https://doi.org/10.5281/zenodo.1145474) .

[4] Taxon Graph Builder is a script using standard linux tools to map (new) names in versioned interaction datasets to known name concepts. The process produces a version of a GloBI Taxon Graph.

[5] Name link table, or GloBI Taxon Graph, is the (published) outcome of the Taxon Graph Builder. The link table associated verbatim names to known taxon name concepts. See published versions at [doi:10.5281/zenodo.755513](https://doi.org/10.5281/zenodo.755513) .

[6] GloBI's Index Builder is an automated process that integrates versioned datasets and a published name map (e.g., GloBI's Taxon Graph) to create integrated species interaction data products at [https://globalbioticinteractions.org/data](https://globalbioticinteractions.org/data) . See also [https://github.com/globalbioticinteractions/globalbioticinteractions/](https://github.com/globalbioticinteractions/globalbioticinteractions/) .

[7] Interpreted, or integrated, interactions are one of the outcomes of the described GloBI processes. Also see [doi:10.5281/zenodo.3950589](https://doi.org/10.5281/zenodo.3950589) and the [data page](/data) . 

