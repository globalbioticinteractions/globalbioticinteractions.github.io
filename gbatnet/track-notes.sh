#!/bin/bash
#
# Tracks meetings notes of GBatNet Eco Interactions Group.
#

preston track "https://docs.google.com/document/d/1yvOZVzv4hnr4E0p_0cNuISyF6c5Gd2Dvps_He9cwOBg/edit"

preston cat $(preston head) |grep hasVersion | grep docx | preston cat > notes.docx
preston cat $(preston head) |grep hasVersion | grep pdf | preston cat > notes.pdf

