from google.appengine.ext import ndb

class Landmark(ndb.Model):
    number = ndb.IntegerProperty()
    name = ndb.StringProperty()
    address = ndb.StringProperty()
    geopt = ndb.GeoPtProperty()
    date_accepted = ndb.DateProperty()

