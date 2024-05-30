from django.db.models.signals import m2m_changed
from django.dispatch import receiver
from django.conf import settings
from apps.users.models import User
from apps.learn.models import Badge

@receiver(m2m_changed, sender=User.badges.through)
def notify_user_on_badge_award(sender, instance, action, reverse, model, pk_set, **kwargs):
    if action == "post_add":
        for badge_pk in pk_set:
            badge = Badge.objects.get(pk=badge_pk)
            badge.send_award_email(instance)