class ChoicesMeta(type):
    def __getattribute__(cls, name):
        if name and not name.startswith("_"):
            try:
                value = cls.__dict__[name]
                if not callable(value):
                    if isinstance(value, tuple):
                        return value[0]
                    else:
                        return value
            except KeyError:
                pass
        return super().__getattribute__(name)


class Choices(metaclass=ChoicesMeta):
    """
    Helper class to create choices from django models. Every property you
    add is a choice. If you define as value a string, then the value is
    the database entry, while the property name is the display name. If
    you pass a tuple, the first element is the database entry, and the
    second the display name.

    Usage:

    class CarType(Choices):
        SUV = 'SUV',
        SEDAN = ('SD', 'Sedan')
        HATCHBACK = ('HB', 'Hatchback')
        CONVERTIBLE = ('CV', 'Convertible')
        COUPE = ('CP', 'Coupe')

    class Car(models.Model):
        type = models.CharField(max_length=10, choices=CarType.choices())

    convertibles = Car.objects.filter(type=CarType.CONVERTIBLE)
    """

    @classmethod
    def choices(cls):
        for attr_name in dir(cls):
            if attr_name.startswith("_"):
                continue
            if attr_name in ["keys", "choices"]:
                continue
            value = cls.__dict__[attr_name]
            if not callable(value):
                if isinstance(value, tuple):
                    yield value
                else:
                    yield value, attr_name

    @classmethod
    def keys(cls):
        return [choice[0] for choice in cls.choices()]


# Common choices for the Little Signs platform
class GenderChoices(Choices):
    MALE = 'Male'
    FEMALE = 'Female'
    OTHER = 'Other'
    PREFER_NOT_TO_SAY = 'Prefer not to say'


class UserRoleChoices(Choices):
    PARENT = 'Parent'
    CHILD = 'Child'
    TEACHER = 'Teacher'
    THERAPIST = 'Therapist'
    ADMINISTRATOR = 'Administrator'


class EnrollmentStatusChoices(Choices):
    PENDING = 'PENDING'
    ACTIVE = 'ACTIVE'
    SUSPENDED = 'SUSPENDED'
    COMPLETED = 'COMPLETED'
    CANCELLED = 'CANCELLED'


class BadgeTypeChoices(Choices):
    COURSE_COMPLETION = 'COURSE_COMPLETION'
    SIGN_MASTER = 'SIGN_MASTER'
    STREAK = 'STREAK'
    PARTICIPATION = 'PARTICIPATION'
    SPECIAL = 'SPECIAL'


class SessionTypeChoices(Choices):
    LESSON = 'LESSON'
    REVIEW = 'REVIEW'
    FREE = 'FREE'
    QUIZ = 'QUIZ'


class RelationshipChoices(Choices):
    PARENT = 'PARENT'
    GUARDIAN = 'GUARDIAN'
    TEACHER = 'TEACHER'
    THERAPIST = 'THERAPIST'


class OrganizationTypeChoices(Choices):
    SCHOOL = 'SCHOOL'
    HOSPITAL = 'HOSPITAL'
    THERAPY_CENTER = 'THERAPY_CENTER'
    DAYCARE = 'DAYCARE'
    OTHER = 'OTHER'


class PlanTypeChoices(Choices):
    INDIVIDUAL = 'individual'
    ORGANIZATION = 'organization'


class DifficultyLevelChoices(Choices):
    BEGINNER = 'Beginner'
    INTERMEDIATE = 'Intermediate'
    ADVANCED = 'Advanced'


class CategoryChoices(Choices):
    ANIMALS = 'Animals'
    COLORS = 'Colors'
    FAMILY = 'Family'
    FOOD = 'Food'
    EMOTIONS = 'Emotions'
    ACTIONS = 'Actions'
    NUMBERS = 'Numbers'
    ALPHABET = 'Alphabet'
    SCHOOL = 'School'
    NATURE = 'Nature'
    WEATHER = 'Weather'
    CLOTHING = 'Clothing'
    TOYS = 'Toys'
    TRANSPORT = 'Transport'
    BODY = 'Body'
    TIME = 'Time'
