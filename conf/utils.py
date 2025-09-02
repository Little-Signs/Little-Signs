from apps.learn.models import Coarse, CoarseEnrollment, Badge
from apps.users.models import User, Organisation, UserSubscription


def dashboard_callback(request, context):
    """
    Callback to prepare custom variables for index template which is used as dashboard
    template. It can be overridden in application by creating custom admin/index.html.
    """
    context.update(
        {
            "user_count": User.objects.count(),
            "course_count": Coarse.objects.count(),
            "active_subscriptions_count": UserSubscription.objects.filter(
                is_active=True
            ).count(),
            "organization_count": Organisation.objects.count(),
            "recent_enrollments": CoarseEnrollment.objects.select_related(
                "user", "coarse"
            ).order_by("-created_at")[:5],
            "recent_badges": Badge.objects.order_by("-created_at")[:5],
        }
    )
    return context
