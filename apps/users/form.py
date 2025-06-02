from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, PasswordChangeForm, UsernameField, PasswordResetForm, SetPasswordForm
from apps.users.models import User
from django.utils.translation import gettext_lazy as _

INPUT_CLASSES = [
    "input-text"
]
CHECKBOX_LABEL_CLASSES = []

class RegistrationForm(UserCreationForm):
  
  def __init__(self, *args, **kwargs):
        super(RegistrationForm, self).__init__(*args, **kwargs)
        self.fields['is_organisation'].required = False
        self.fields['is_individual'].required = False

  password1 = forms.CharField(
      label=_("Password"),
      widget=forms.PasswordInput(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'Password'}),
  )
  password2 = forms.CharField(
      label=_("Password Confirmation"),
      widget=forms.PasswordInput(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'Password Confirmation'}),
  )
  class Meta:
        model = User
        fields = [
            'first_name', 'last_name', 'email', 'gender', 'date_of_birth',
            'phone_number','city', 'is_organisation', 'is_individual'
        ]
        widgets = {
            'first_name': forms.TextInput(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'First Name'}),
            'last_name': forms.TextInput(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'Last Name'}),
            'email': forms.EmailInput(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'Email'}),
            'phone_number': forms.TextInput(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'Phone number'}),
            'city': forms.TextInput(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'city'}),
            'gender': forms.Select(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'Email'}),
            'date_of_birth': forms.DateInput(attrs={'class': " ".join(INPUT_CLASSES), 'placeholder': 'date of birth YYYY-MM-DD', 'type': 'date'}),
            'is_organisation': forms.CheckboxInput(attrs={'class': " ".join(CHECKBOX_LABEL_CLASSES)}),
            'is_individual': forms.CheckboxInput(attrs={'class': " ".join(CHECKBOX_LABEL_CLASSES)})
        }

class LoginForm(AuthenticationForm):
  username = UsernameField(widget=forms.TextInput(attrs={"class": "focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow", "placeholder": "Username"}))
  password = forms.CharField(
      label=_("Password"),
      strip=False,
      widget=forms.PasswordInput(attrs={"class": "focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow", "placeholder": "Password"}),
  )