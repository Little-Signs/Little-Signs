import os
import sys
import subprocess


PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _run_manage_py(args: list[str]) -> int:
    manage_py = os.path.join(PROJECT_ROOT, "manage.py")
    cmd = [sys.executable, manage_py, *args]
    return subprocess.call(cmd)


def server() -> None:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "conf.settings")
    exit_code = _run_manage_py(["runserver", "0.0.0.0:8000"]) 
    if exit_code != 0:
        sys.exit(exit_code)


def migrate() -> None:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "conf.settings")
    exit_code = _run_manage_py(["migrate"]) 
    if exit_code != 0:
        sys.exit(exit_code)


def createsuperuser() -> None:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "conf.settings")
    exit_code = _run_manage_py(["createsuperuser"]) 
    if exit_code != 0:
        sys.exit(exit_code)


def worker() -> None:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "conf.settings")
    cmd = [
        sys.executable,
        "-m",
        "celery",
        "-A",
        "conf",
        "worker",
        "-l",
        "info",
    ]
    sys.exit(subprocess.call(cmd))


