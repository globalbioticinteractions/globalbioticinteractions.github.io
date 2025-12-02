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
 --message "Snapshot of Butterfly Data Management Plan (DMP) Draft"\
 "https://docs.google.com/document/d/1eRsXw-bSWmz9mI1v1HHKdJez11sbjTsBtWsknAdkDF0/edit?tab=t.0"

latest pdf\
 > dmp-draft.pdf

latest md\
 > dmp-draft.md

preston track\
 --message "Snapshot of Butterfly Data Management Plan (DMP) Draft"\
 "https://docs.google.com/document/d/1nt0fzQhqUNo51-VC6zbI5Wrs0dRAOFMU/edit"

latest pdf\
 > dmp-draft-alternate.pdf

latest md\
 > dmp-draft-alternate.md

preston track\
 --message "Drivdal et al. (2025). D9.1 Data Management Plan – Version 1"\
 https://butterfly-europe.eu/en/wp-content/uploads/2025/09/Butterfly_D9pnt1_DMP_final.pdf

preston head | preston cat | grep hasVersion | preston cat > dmp.pdf

preston track\
 --message "Snapshot of meeting notes of Butterfly Data Management Plan (DMP)"\
 "https://docs.google.com/document/d/1Uo27KvElyArCGN6YrWU0Xlcf74qKp9-zyeUj9p1-WDI/edit?tab=t.0"

latest pdf\
 > dmp-notes.pdf

latest md\
 > dmp-notes.md

https://cloud.butterfly-europe.eu/public.php/dav/files/gdtwJsfTddCXd85/

preston track\
 --message "Snapshot of EuroAPPA use cases"\
 "https://cloud.butterfly-europe.eu/public.php/dav/files/gdtwJsfTddCXd85/"

preston head \
 | preston cat \
 | grep hasVersion \
 | preston cat \
 > use-cases.md
