#!/bin/bash
#

latest() {
 local format=${1:-pdf}
 preston head\
 | preston cat\
 | grep hasVersion\
 | grep "format=${format}"\
 | preston cat
}

preston track\
 --message "Snapshot of EuroAPPA rolling meeting notes"\
 https://docs.google.com/document/d/1MDfcQESQh9abAxIhAs4gCRi88SnTP0s39bscvsREgto

latest pdf\
 > notes.pdf

latest md\
 > notes.md

preston track\
 --message "Snapshot of EuroAPPA list of related projects"\
 "https://docs.google.com/document/d/1MDfcQESQh9abAxIhAs4gCRi88SnTP0s39bscvsREgto/edit?tab=t.bcaxfrmawmxl"

latest pdf\
 > related-projects.pdf

latest md\
 > related-projects.md

preston track\
 --message "Snapshot of Butterfly Data Management Plan (DMP)"\
 "https://docs.google.com/document/d/1eRsXw-bSWmz9mI1v1HHKdJez11sbjTsBtWsknAdkDF0/edit?tab=t.0"

latest pdf\
 > dmp.pdf

latest md\
 > dmp.md
