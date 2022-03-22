---
layout: default-how-to
title: how-to
permalink: how-to
---

# **A 'How-To' Guide for Extracting GloBI Data** 😃 <span id="top"/>

GloBI has a ton of useful data in it and can be used in many different ways. However, it can also be a bit overwhelming with so much data. This page offers some helpful links, hacks, and instructions for how to extract the information available in a useful format. 

## **Contents**

* [Introduction to using GloBI](#intro) 
* [Pre-compiled Datasets](#datasets)
   * [Terrestrial Parasite Tracker (TPT) data](#TPT)
   * [SCAN data](#SCAN)
   * [Big-Bee data](#bigbee)
* [General Searches](#searches)
   * [Search from Home Page](#home-search)
   * [Search from Browse Page](#browse-search)
* [Using R](#R)
* [Using the Command Line](#command-line)
* [GloBI Hacks](#hacks)
   * [No-download data viewing](#no-download) 
   * [Name matching with other databases](#nomer)

## ❗ ⚠️ Page under construction ⚠️ ❗

---
<br>

## **Introduction to using GloBI** <span id="intro"/>

Did you know there is a video tutorial on how to use GloBI?\
[A Practical Exploration of Biotic Interaction Data Management and Information Retrieval through TPT and GloBI](https://vimeo.com/546669878) (video)

There are also detailed step-by-step instructions from the [Species Interaction Data Workshop](https://www.globalbioticinteractions.org/interaction-data-workshop/) on how to extract information from GloBI. 
1. [Getting Interaction Data](https://www.globalbioticinteractions.org/interaction-data-workshop/02-data/)
2. [Working with the Whole Dataset](https://www.globalbioticinteractions.org/interaction-data-workshop/03-ixodes-whole-dataset/index.html)
3. [Exploring Ixodes (tick) Records By Pointing and Clicking](https://www.globalbioticinteractions.org/interaction-data-workshop/04-ixodes-point-and-click/index.html)
4. [Data Sources: Interaction Data Record Review](https://www.globalbioticinteractions.org/interaction-data-workshop/07-reviewing-interaction-records/)
5. [Data Sources: Taxonomic Name Review](https://www.globalbioticinteractions.org/interaction-data-workshop/06-reviewing-taxonomic-names/index.html)

<br>

#### <sub> [Top of Page](#top) </sub>

---
<br>

## **Pre-compiled Datasets** <span id="datasets"/>

Did you know, GloBI has a number of datasets and files pre-compiled and ready to download?! 

Just go to the [GloBI Sources page](https://www.globalbioticinteractions.org/sources), find a collection or group's dataset you are interested in, and click the "review" button on the left with the green checkmark. Then copy the file you want and paste it into your web browser address box. It will automatically start to download the file 😃

Here are some multiple collection precompiled datasets you may find useful:

### **Terrestrial Parasite Tracker (TPT) data** <span id="TPT"/>
[Terrestrial Parasite Tracker](https://parasitetracker.org) is a NSF-funded project that aims to digitize natural history collection records related to parasites and their vertebrate hosts. 
- [List of all data files available](https://zenodo.org/record/5572874)
- [.tsv file of some interactions from TPT data](https://zenodo.org/record/5572874/files/indexed_interactions_simple.tsv.gz?download=1)
- [.tsv file of *ALL* interactions from TPT](https://zenodo.org/record/5572874/files/indexed_interactions_full.tsv.gz?download=1)\
      *Note: this is LARGE file so it will need to be unzipped/compressed. See below for ways to download un-zipped/compressed file...*
- [.tsv file of interactions for each collection in TPT](https://zenodo.org/record/5572874/files/indexed_interactions_by_collection.tsv?download=1)
- [List of collections in the TPT group on GloBI](https://www.globalbioticinteractions.org/parasitetracker/)

### **SCAN data** <span id="SCAN"/>
[Symbiota Collections of Arthropods Network (SCAN)](https://scan-bugs.org) ([https://scan-bugs.org](https://scan-bugs.org)) is "A Data Portal Built to Visualize, Manipulate, and Export Species Occurrences." 
- [List of all data files available](https://depot.globalbioticinteractions.org/reviews/globalbioticinteractions/scan/README.txt)
- [.csv file of some interactions from SCAN data](https://depot.globalbioticinteractions.org/reviews/globalbioticinteractions/scan/indexed-interactions-sample.csv)
- [.csv file of *ALL* interactions from SCAN](https://depot.globalbioticinteractions.org/reviews/globalbioticinteractions/scan/indexed-interactions.csv.gz)\
      *Note: this is LARGE file so it will need to be unzipped/compressed. See below for ways to download un-zipped/compressed file...*

### **Big-Bee data**  <span id="bigbee"/>
The [Big Bee project](https://big-bee.net/) ([https://big-bee.net/](https://big-bee.net/)) aims to "Extend Anthophila research through image and trait digitization." 
- [List of collections in the Big-Bee group](https://www.globalbioticinteractions.org/bigbee/)

<br>

#### <sub> [Top of Page](#top) </sub>

---
<br>

## **General Searches** <span id="searches"/>

### **Search from home page** <span id="home-search"/>
- Navigate to [GloBI's home page](https://www.globalbioticinteractions.org/)
- Enter an organism name in one or both search boxes
- Hit search

![](https://i.imgur.com/3nxuq2q.png)

- You can browse these result in the resulting list, or for a downloadable list, click the “Open results in interaction browser” link
- This will bring up a map, two different interactive interaction graphs, and a list of interactions on the left.
 
![](https://i.imgur.com/SxR6atJ.png)

- To download the list of the interactions, click the “csv sample" link at the top of the list for a partial list, or for a full dataset click "all data” " and select the file you want.
   - Copy and paste the file name into your browser address box to download, or use the [hack below](#no-download) to view the dataset without downloading

### **Search from browse page** <span id="browse-search"/>

To search from the [GloBI browse page](https://www.globalbioticinteractions.org/browse/):
- Clear the name "Chelonia mydas" in green by clicking the little "x" next to it (unless of course this is the organism you are interested in!)
- Type in the scientific name of the organism you want to look up and select it from the dropdown menu when it comes up (you need to actually select it from the list, not just type it in)
- Examine the preview list automatically produced
- Click "download csv data sample" or	"access full dataset" at the top of the list depending on the dataset you need 
- If your browser cuts off some of the search boxes strangely like mine does, click the little grey box within a box icon on the top left of the page (next to the qestion mark - it says "maximize/minimize" if you hover your mouse over it for a bit". This will hide the maps and make it easier to see the list and search boxes.

<br>

#### <sub> [Top of Page](#top) </sub>

---
<br>

## **Using R** <span id="R"/>

For those that are comfortable using R, install and use **rglobi** for more precise and filtered datasets. 
- [rglobi CRAN (download) page](https://cran.r-project.org/web/packages/rglobi/index.html)
- [rglobi GitHub installation instructions](https://github.com/ropensci/rglobi)
- [Detailed instructions on how to use rglobi](https://github.com/ParasiteTracker/TPT-GloBI-R-Demo/blob/master/globi-to-graph2019.R)
- [How to use GloBI data in bipartite interaction analyses](https://www.globalbioticinteractions.org/deadwood2021/13-day-two-part-two/)

<br>

#### <sub> [Top of Page](#top) </sub>

---
<br>

## **Using the Command Line** <span id="command-line"/>

If you are are comfortable with using command line scripts and codes (i.e., in terminal, shell, etc.) you may find the following "[Big Data Cheatsheet](https://www.globalbioticinteractions.org/deadwood2021/code/cheatsheet.txt)" useful. 

After you download the dataset you need (see Pre-compiled Datasets](#datasets), [General Searches](#searches), or the [GloBI data page](https://www.globalbioticinteractions.org/data)), you can  modify the following code to fit your dataset needs:

```
$ time cat data/stable/interactions.csv.gz\
  | gunzip\
  | mlr --csv filter '$sourceTaxonKingdomName == "Fungi"'\
  | mlr --csv filter '$targetTaxonGenusName == "Quercus"'\
  | mlr --csv cut -f sourceTaxonName,targetTaxonName\
  > data/oakfungi.csv
$ time cat data/stable/interactions.csv.gz\
  | gunzip\
  | mlr --csv filter '$targetTaxonKingdomName == "Fungi"'\
  | mlr --csv filter '$sourceTaxonGenusName == "Quercus"'\
  | mlr --csv cut -f targetTaxonName,sourceTaxonName\
  | tail -n+2\
  >> data/oakfungi.csv

```

You can also load a dataset from GloBI into a sqlite3 database on your personal computer by using/modifying the following code (after downloading the dataset):

```
$ cat interactions.csv.gz\
| gunzip\
| sqlite3 -csv globi.db '.import /dev/stdin interactions'
```
Or for SCAN specific data:
```
$ cat interactions.csv.gz\
| gunzip\
| grep "globalbioticinteractions/scan" > globi-scan.csv
```
or:
```
cat interactions.csv.gz\
| gunzip\
| grep "globalbioticinteractions/scan"\
| wc -l
```

To reduce the size of sqlite3 (or other) database, you can drop columns before importing them using powertools like [cut](https://en.wikipedia.org/wiki/Cut_(Unix)) or [mlr/miller](https://github.com/johnkerl/miller). See the [importing csv files to sqlite page ](https://sqlite.org/cli.html#importing_csv_files).

If you can provide further step by step instructions on how to use these scripts, please add it to the [working guide](https://docs.google.com/document/d/1GjVMmGSBWJ8481BbkLfZC526eFG7TphupTf_ly98dtg/edit) and I will add to this page. I'm not a command line person, so any help adding to this section would be much appreciated!

<br>

#### <sub> [Top of Page](#top) </sub>

---
<br>

## **GloBI Hacks** <span id="hacks"/>

### **No-download data viewing** <span id="no-download"/>

You can view datasets from GloBI (or any other .csv/.tsv files online) without actually downloading them! This is possible by using Google Sheets and removing the 
".gz" extention of a file from the [GloBI Sources page](https://www.globalbioticinteractions.org/sources). 
- Open a new blank Google Spreadsheet in one browser tab/window
- In another browser tab/window, pick the dataset you want to view
   - On the [GloBI Sources page](https://www.globalbioticinteractions.org/sources), pick a collection or group
   - On the left of the items listed, click the "review" button with a green checkmark next to it
   - From the list of files that opens on a new page, copy the file name of the file you want to view (excluding the .gz part if it has it)
- Go back to your blank Google Spreadsheet tab
- In the first cell type the formula:

```
=IMPORTDATA("YOUR FILE NAME")
```
   Example: 
```
=IMPORTDATA("https://depot.globalbioticinteractions.org/reviews/globalbioticinteractions/scan/indexed-interactions-sample.tsv")
```
- Don't forget the quotation marks in the formula!

### **Name matching with other databases** <span id="nomer"/>
To match or cross-reference names in GloBI to names in other databases such as ITIS or NCBI, check out the tool [Nomer](https://github.com/globalbioticinteractions/nomer)...


<br>

#### <sub> [Top of Page](#top) </sub>

---
<br>

Hopefully, this page had some helpful content to help you navigate GloBI!!

💡 **Have something helpful to add to this page?**

  ➡️ Please add it to the [working guide](https://docs.google.com/document/d/1GjVMmGSBWJ8481BbkLfZC526eFG7TphupTf_ly98dtg/edit) we are creating to help pull data out of GloBI. 

💡 **Have a problem or something we need to add?**

  ➡️ Please submit a request on the [issue page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/issues)!

<br>

## 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧

Need additional help the [working guide](https://docs.google.com/document/d/1GjVMmGSBWJ8481BbkLfZC526eFG7TphupTf_ly98dtg/edit) or [issue page](https://github.com/globalbioticinteractions/globalbioticinteractions.github.io/issues) doesn't cover? Contact page editor [Erika Tucker](mailto:emtuckerlab@gmail.com)

This page is supported in part by the [Terrestrial Parasite Tracker](https://parasitetracker.org/) group's efforts to produce sustainable, open access, digitization methods and related research tools (NSF award# 901932). 
