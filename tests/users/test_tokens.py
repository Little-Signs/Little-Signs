import pytest

from apps.users.tokens import AppTokenGenerator


def test_app_token_hash_uses_is_active_pk_and_timestamp(db, django_user_model):
    user = django_user_model.objects.create(email="u@example.com", is_active=False)

    gen = AppTokenGenerator()
    value_false = gen._make_hash_value(user, 123456)

    user.is_active = True
    value_true = gen._make_hash_value(user, 123456)

    assert value_false != value_true
    assert str(user.pk) in value_true
    assert "123456" in value_true

