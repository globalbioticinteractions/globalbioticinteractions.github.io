#!/bin/bash
#

preston track\
 --message "Snapshot of EuroAPPA rolling meeting notes"\
 https://docs.google.com/document/d/1MDfcQESQh9abAxIhAs4gCRi88SnTP0s39bscvsREgto

preston head\
 | preston cat\
 | grep hasVersion\
 | grep pdf\
 | preston cat\
 > notes.pdf

preston track\
 --message "Snapshot of EuroAPPA list of related projects"\
 "https://docs.google.com/document/d/1MDfcQESQh9abAxIhAs4gCRi88SnTP0s39bscvsREgto/edit?tab=t.bcaxfrmawmxl"

preston head\
 | preston cat\
 | grep hasVersion\
 | grep pdf\
 | preston cat\
 > related-projects.pdf

