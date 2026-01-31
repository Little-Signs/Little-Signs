import pytest

from apps.learn.models import Coarse, CoarseEnrollment


@pytest.mark.django_db
def test_is_user_enrolled_true_false(django_user_model):
    user = django_user_model.objects.create(email="enroll@example.com", is_active=True)
    course = Coarse.objects.create(name="Intro", description="desc")

    assert CoarseEnrollment.is_user_enrolled(user, course) is False

    CoarseEnrollment.objects.create(user=user, coarse=course)

    assert CoarseEnrollment.is_user_enrolled(user, course) is True

