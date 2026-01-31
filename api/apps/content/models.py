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


class HomePage(models.Model):
    """Home page content management"""
    welcome_title = models.CharField(max_length=200)
    welcome_subtitle = models.TextField()
    hero_image = models.ImageField(
        storage=PublicMediaStorage(),
        help_text="Main hero image for home page"
    )
    
    # Features section
    feature1_title = models.CharField(max_length=100)
    feature1_description = models.TextField()
    feature1_icon = models.ImageField(
        storage=PublicMediaStorage(),
        null=True,
        blank=True
    )
    
    feature2_title = models.CharField(max_length=100)
    feature2_description = models.TextField()
    feature2_icon = models.ImageField(
        storage=PublicMediaStorage(),
        null=True,
        blank=True
    )
    
    feature3_title = models.CharField(max_length=100)
    feature3_description = models.TextField()
    feature3_icon = models.ImageField(
        storage=PublicMediaStorage(),
        null=True,
        blank=True
    )
    
    # Call to action
    cta_title = models.CharField(max_length=200)
    cta_description = models.TextField()
    cta_button_text = models.CharField(max_length=50, default="Get Started")
    
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Home Page"
        verbose_name_plural = "Home Pages"

    def __str__(self):
        return self.welcome_title


class Testimonial(models.Model):
    """User testimonials for the platform"""
    user_name = models.CharField(max_length=100)
    user_role = models.CharField(
        max_length=50,
        help_text="e.g., Parent, Teacher, Student"
    )
    content = models.TextField()
    rating = models.IntegerField(
        choices=[(i, f"{i} stars") for i in range(1, 6)],
        help_text="Rating from 1 to 5 stars"
    )
    avatar = models.ImageField(
        storage=PublicMediaStorage(),
        null=True,
        blank=True
    )
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-is_featured', 'display_order', 'created_at']
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"

    def __str__(self):
        return f"{self.user_name} - {self.rating} stars"


class FAQ(models.Model):
    """Frequently Asked Questions"""
    question = models.CharField(max_length=300)
    answer = models.TextField()
    category = models.CharField(
        max_length=50,
        choices=[
            ('general', 'General'),
            ('pricing', 'Pricing'),
            ('technical', 'Technical'),
            ('parental', 'Parental Controls'),
            ('learning', 'Learning'),
        ],
        default='general'
    )
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['category', 'display_order', 'question']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return self.question
