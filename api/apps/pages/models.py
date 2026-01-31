from django.db import models
from conf.storage_backend import PublicMediaStorage


class AboutUs(models.Model):
    mission_statement = models.TextField("little sign mission statement", null=False)
    vision_statement = models.TextField("little sign vision statement", null=False)

    class Meta:
        verbose_name = "AboutUs"
        verbose_name_plural = "AboutUs"

    def __str__(self):
        return self.mission_statement


class OrganisationMembers(models.Model):
    full_name = models.CharField("Full name", max_length=50)
    avatar = models.ImageField(
        "Profile avatar",
        storage=PublicMediaStorage(),
        null=True,
        height_field=None,
        width_field=None,
        max_length=None,
    )
    position = models.CharField("Position in company", max_length=50)
    linked_in = models.URLField("LinkedIn profile link", max_length=200, null=True)
    twitter = models.URLField("Twitter profile link", max_length=200, null=True)
    facebook = models.URLField("Facebook profile link", max_length=200, null=True)

    class Meta:
        verbose_name = "Team"
        verbose_name_plural = "Teams"

    def __str__(self):
        return self.full_name
