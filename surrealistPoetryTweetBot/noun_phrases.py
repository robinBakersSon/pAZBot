
# noun_phrases for 2 txt files
from textblob import TextBlob
import random
import sys



#how would you enter multiple files either as system args 
lemon = open('freedomDreams.txt').read().decode('ascii', errors="replace")
# lime = open('bpp10.txt').read().decode('ascii', errors="replace")


blob = TextBlob(lemon)
# blob_blah_blah = TextBlob(lime)

kelley = list()
for np in blob.noun_phrases:
		if len(np) > 0:
			kelley.append(np)



# malcolmX = list()
# for np in blob_blah_blah.noun_phrases:
# 		if len(np) > 0:
# 			malcolmX.append(np)

for i in range(2):
	print kelley 
