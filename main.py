# Python Libraries
import jinja2
import webapp2
import os

from models.Landmark import Landmark 

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainPage(webapp2.RequestHandler):
    def get(self):
        landmarks = Landmark.query().order(Landmark.number).fetch(300)  
        template_values = {
            'landmarks' : landmarks,        
        }
        template = JINJA_ENVIRONMENT.get_template('webapp/index.html')
        self.response.write(template.render(template_values))

class AboutPage(webapp2.RequestHandler):
    def get(self):
        landmarks = Landmark.query().order(Landmark.number).fetch(300)  
        template_values = {
            'landmarks' : landmarks,
        }
        template = JINJA_ENVIRONMENT.get_template('webapp/template-about.html')
        self.response.write(template.render(template_values))

class AdminPage(webapp2.RequestHandler):
    def get(self):
        self.response.write("Wololo") 

application = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/about', AboutPage),
    ('/admin', AdminPage),
], debug=True)
