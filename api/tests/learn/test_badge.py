import pytest
from unittest.mock import patch

from apps.learn.models import Badge


@pytest.mark.django_db
def test_award_to_user_adds_badge_and_sends_email(django_user_model):
    user = django_user_model.objects.create(
        email="badge@example.com", first_name="Ada", is_active=True
    )
    badge = Badge.objects.create(name="Starter", description="First badge")

    with patch("apps.learn.models.send_mail") as mocked_send:
        badge.award_to_user(user)

        assert user.badges.filter(pk=badge.pk).exists()
        mocked_send.assert_called_once()

    # Calling again should not duplicate or send email again
    with patch("apps.learn.models.send_mail") as mocked_send_again:
        badge.award_to_user(user)
        assert user.badges.filter(pk=badge.pk).count() == 1
        mocked_send_again.assert_not_called()

