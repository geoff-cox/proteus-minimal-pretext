#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Test Environment
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage[dvipsnames]{xcolor}

END_LATEX_IMAGE_PREAMBLE
}
