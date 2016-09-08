# File to include in the server app directory

import imp
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

wsgi = imp.load_source('wsgi', 'buz.py')
application = wsgi.app
