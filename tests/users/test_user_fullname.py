import pytest


@pytest.mark.django_db
def test_user_get_full_name(django_user_model):
    user = django_user_model.objects.create(
        email="name@example.com", first_name="Grace", last_name="Hopper"
    )
    assert user.get_full_name() == "Grace Hopper"

