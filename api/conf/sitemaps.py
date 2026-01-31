from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from apps.learn.models import Course


class StaticViewSitemap(Sitemap):
    priority = 1
    changefreq = "yearly"

    def items(self):
        return ["home"]

    def location(self, item):
        return reverse(item)


class CourseSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8

    def items(self):
        return Course.objects.all()

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return reverse("course-detail", args=[obj.pk])


class OtherStaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = "yearly"

    def items(self):
        return ["about-us", "contact", "login"]

    def location(self, item):
        return reverse(item)
