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
